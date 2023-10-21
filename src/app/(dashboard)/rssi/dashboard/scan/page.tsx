"use client"
import React, { useState, useEffect } from 'react';
import Table from '../../_components/Table';

export const metadata = {
  title: 'Scan',
  description: 'Manage Scan',
};

export default function RolePage() {
  const [ips, setIps] = useState([]);
  const [selectedIp, setSelectedIp] = useState(''); // Ajout de l'état pour la sélection IP
  const [searchText, setSearchText] = useState('');

  
  useEffect(() => {
    // Utilisez une requête HTTP pour récupérer la liste des adresses IP depuis votre API
    fetch('/api/v1/getHardware') // Assurez-vous que l'URL correspond à votre endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Réponse du réseau incorrecte');
        }
        return response.json();
      })
      .then((data) => {
        setIps(data.result); // Mettez à jour l'état avec les adresses IP
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des adresses IP :', error);
      });
  }, []);

  return (
    <div className="container mx-auto bg-gray-100">
      <p className="font-bold text-2xl">Scan Management</p>
      <div className="mt-10">
        <div className="flex items-center">
          <select
            value={selectedIp}
            onChange={(e) => setSelectedIp(e.target.value)} // Mettre à jour la sélection IP
            className="border w-48 border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Select IP</option>
            {ips.map((ip, index) => (
              <option key={index} value={ip}>
                {ip}
              </option>
              
            ))}
            
            
          </select>
          
          
        </div>
      </div>
      <div className="mt-10">
        {/* Affichez ici les résultats de la recherche */}
      </div>
      <div className="w-full border-t border-gray-500 mt-5"></div>
      <div className="w-full border-t border-gray-100 mt-5"></div>
      <Table />
    </div>
  );
}
