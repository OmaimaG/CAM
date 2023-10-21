// pages/index.js 
"use client"
// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [ipAddress, setIpAddress] = useState('');
  const [error, setError] = useState(null);
  const [hardwareIPs, setResult] = useState<{
    name: string;
    type: string;
    status: string;
    version: string | null; // Si "version" peut être nulle
    item: string;
    physical_location: string;
    installation_date: string;
  }[]>([]);

  // Utilisez useEffect pour le chargement initial des données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/v1/getip', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ searchText: ipAddress }),
        });

        if (!response.ok) {
          throw new Error('Erreur de la requête');
        }

        const data = await response.json();
        setResult(data.hardwareIPs);
        setError(null);
      } catch (error) {
        console.error('Erreur de la requête:', error);
        setError(error.message);
      }
    };

    // Appelez fetchData lorsque le composant est monté (chargement initial)
    fetchData();
  }, [ipAddress]); // Le tableau de dépendances doit contenir "ipAddress"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Pas besoin de faire quoi que ce soit ici, useEffect gère le chargement initial des données.
  };

  return (
    <div>
    
      <form onSubmit={handleSubmit}>
        <label htmlFor="ipAddress">IP Address:</label>
        <input
          type="text"
          id="ipAddress"
          name="ipAddress"
          className="border w-96 border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="enter an IP address"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <button   className="bg-red-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
        type="submit">Scan</button>
      </form>
      {error && <p>Erreur: {error}</p>}

      <div>
        <table className="w-full bg-white shadow-md rounded my-6">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Nom</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">UP</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Version</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Item</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Emplacement physique</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Date d'installation</th>
            </tr>
          </thead>
          <tbody>
            {hardwareIPs.length > 0 ? (
              hardwareIPs.map((hard, index) => (
                <tr key={index}>
                  <td className="px-6 py-3 bg-gray-50 text-left text-lg leading-4">{hard.name}</td>
                  <td className="px-6 py-3 bg-gray-50 text-left text-lg leading-4">{hard.type}</td>
                  <td className="px-6 py-3 bg-gray-50 text-left text-lg leading-4">{hard.status}</td>
                  <td className="px-6 py-3 bg-gray-50 text-left text-lg leading-4">{hard.version}</td>
                  <td className="px-6 py-3 bg-gray-50 text-left text-lg leading-4">{hard.item}</td>
                  <td className="px-6 py-3 bg-gray-50 text-left text-lg leading-4">{hard.physical_location}</td>
                  <td className="px-6 py-3 bg-gray-50 text-left text-lg leading-4">{hard.installation_date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-3 bg-gray-50 text-left text-lg leading-4">no Scan available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
