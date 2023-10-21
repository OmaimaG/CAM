"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function TicketPage() {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    receiverName: '', // Correction : utiliser technicianName au lieu de technician
    description: '',
    status : ''
  });

  const [errors, setErrors] = useState([]); // État pour stocker les erreurs

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Réinitialisez les erreurs à chaque soumission
    setErrors([]);

    // Utilisez formData pour envoyer une demande POST à votre API
    try {
      const response = await fetch('/api/v1/ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Traitez une réponse réussie (par exemple, affichez un message de succès).
        console.log('Ticket créé avec succès');
        setFormData({
          name: '',
          receiverName: '', // Correction : utiliser technicianName au lieu de technician
          description: '',
          status : ''
        });
      
        // Rechargez la page pour afficher le formulaire vide
        window.location.href = '/chef-department/dashboard/ticket/listicket/';
        setShowAlert(true);
      } else {
        // Si la réponse n'est pas OK, cela signifie qu'il y a des erreurs de validation
        // Vous pouvez récupérer les erreurs de l'API (si elles sont renvoyées) et les afficher
        const data = await response.json();
        if (data.errors && data.errors.length > 0) {
          setErrors(data.errors);
        } else {
          // Gérez les autres erreurs ici
          console.error('Erreur inattendue lors de la soumission du ticket');
        }
      }
    } catch (error) {
      // Gérez les erreurs réseau.
      console.error('Erreur réseau lors de la soumission du ticket :', error);
    }
  };

  const [chefDepartementNames, setChefDepartementNames] = useState([]);

  useEffect(() => {
    // Utilisez une requête HTTP pour récupérer la liste des techniciens depuis votre API
    fetch('/api/v1/getTechnicians') // Assurez-vous que l'URL correspond à votre endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Réponse du réseau incorrecte');
        }
        return response.json();
      })
      .then((data) => {
        setChefDepartementNames(data.result); // Mettez à jour l'état avec les noms des techniciens
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des techniciens :', error);
      });
  }, []);

  return (
    <div className="">
     
     <form onSubmit={handleSubmit} className="mx-auto max-w-md p-6">
  <div className="mb-4">
    <label htmlFor="name" className="block mb-2 text-base leading-5 font-semibold text-gray-700 dark:text-white">
      Requester Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="w-full px-3 py-2 rounded-lg border text-sm leading-5 font-bold border-gray-300 text-gray-900  focus:ring focus:ring-blue-500"
      placeholder="Requester Name"
      required
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="receiverName" className="block mb-2 text-base leading-5 font-semibold  text-gray-700 dark:text-white">
      Select a chef-department<span className='text-red-600'>*</span>
    </label>
    <select
      id="receiverName"
      name="receiverName"
      className='w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 text-sm font-semibold focus:ring focus:ring-blue-500'
      required
      value={formData.receiverName}
      onChange={(e) => setFormData({ ...formData, receiverName: e.target.value })}
    >
      <option value="">Select one</option>
      {chefDepartementNames.map((chefDepartementName, index) => (
        <option key={index} value={chefDepartementName}>
          {chefDepartementName}
        </option>
      ))}
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="description" className="block mb-2   text-base leading-5 font-semibold  text-gray-700 dark:text-white">
      Description <span className='text-red-600'>*</span>
    </label>
    <textarea
      id="description"
      name="description"
      rows="4"
      className="w-full px-3 py-2 rounded-lg border-2text-base leading-5  border-gray-300 text-gray-900 text-sm font-semibold focus:ring focus:ring-blue-500"
      placeholder="Write your thoughts here..."
      value={formData.description}
      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      required
    ></textarea>
  </div>
  <div className="mb-4">
    <label htmlFor="status" className="block mb-2 text-base leading-5 font-semibold text-gray-700 dark:text-white">
      Select Ticket Status
    </label>
    <select
      id="status"
      name="status"
      className='w-full px-3 py-2 rounded-lg border border-gray-300 text-gray-900 text-sm font-semibold focus:ring focus:ring-blue-500'
      required
      value={formData.status}
      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
    >
      <option value="opened">Opened</option>
      <option value="notCompleted">Not Completed</option>
      <option value="completed">Completed</option>
    </select>
  </div>
  <button
    className="w-full px-6 py-3 mt-2 text-lg text-white bg-red-500 rounded-full hover:bg-red-600 focus:ring focus:ring-red-400 font-semibold"
    type="submit"
    href={`/rssi/dashboard/ticket/listicket/`}>
  
    Send Ticket
  </button>
</form>
      <div className="mt-6 ml-8 text-red-500">
        {/* Affichez les erreurs ici */}
        {errors.length > 0 &&
          errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
      </div>
      {showAlert && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-4">
          <p className="font-bold">Succès !</p>
          <p>Le ticket a été créé avec succès.</p>
          <button
            className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowAlert(false)}
          >
            Fermer
          </button>
        </div>
      )}
   

    </div>
  );
}

export default TicketPage;
