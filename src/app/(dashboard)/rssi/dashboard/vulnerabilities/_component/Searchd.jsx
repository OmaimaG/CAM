// pages/search.js
"use client"
import { useState } from 'react';
import data from '../data/data.json'; // Importez vos données JSON
import Link from 'next/link';
export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);


  const handleSearch = () => {
    // Effectuez la recherche en fonction de la valeur saisie dans le champ de texte
    const result = data.find(record => record.ip === searchTerm);
    setSearchResult(result);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by IP address"
        value={searchTerm}
        className="border w-96 border-gray-300 rounded-md py-2 px-4 mr-2 focus:outline-none focus:ring focus:border-blue-300"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button  className="bg-red-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out" onClick={handleSearch}>Search</button>

      {searchResult ? (
  <div>
<div></div>
<table className="w-full bg-white shadow-md rounded my-6">
  <thead>
    <tr>
      <th className="px-6 py-3 bg-gray-100 text-left text-sm leading-4 font-semibold text-gray-600 uppercase tracking-wider">Adresse IP</th>
      <th className="px-6 py-3 bg-gray-100 text-left text-sm leading-4 font-semibold text-gray-600 uppercase tracking-wider">Numéro CVE</th>
      <th className="px-6 py-3 bg-gray-100 text-left text-sm leading-4 font-semibold text-gray-600 uppercase tracking-wider">Description</th>
      <th className="px-6 py-3 bg-gray-100 text-left text-sm leading-4 font-semibold text-gray-600 uppercase tracking-wider">Solution</th>
      <th className="px-6 py-3 bg-gray-100 text-left text-sm leading-4 font-semibold text-gray-600"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-6 py-3 text-left text-base leading-5 font-semibold text-gray-900">{searchResult.ip}</td>
      <td className="px-6 py-3 text-left text-base leading-5 font-semibold text-gray-900">{searchResult["Numéro CVE"]}</td>
      <td className="px-6 py-3 text-left text-base leading-5 font-semibold text-gray-900">{searchResult.Description}</td>
      <td className="px-6 py-3 text-left text-base leading-5 font-semibold text-gray-900">{searchResult.Solution}</td>
      <td>
        <Link className="px-2 py-2 text-base rounded-full bg-red-600 ml-2 text-white" href={``}>
          Reclamation
        </Link>
      </td>
    </tr>
  </tbody>
</table>

 
  </div>
) : (
  <p>No vulnerability found for IP address : {searchTerm}</p>
)}

    </div>
  );
}
