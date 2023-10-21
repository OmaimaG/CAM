"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link';

import { format } from "date-fns"
const ReplayPage = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTickets() {
      try {
        const response = await fetch('/api/v1/listticket');

        if (!response.ok) {
          throw new Error('Failed to fetch data from the server');
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error('Request was not successful');
        }

        setTickets(data.tickets);
      } catch (error) {
        console.error('Error fetching tickets:', error);
        setError(error); // Stocker l'erreur dans le state
      }
    }

    fetchTickets();
  }, []);

  return (
    <div>
      <div>
        <p>Nombre de tickets : {tickets.length}</p>
      </div>
      <table className="w-full bg-white shadow-md rounded my-6">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              N°
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Request Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Opened Date
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
             
            </th>
          </tr>
        </thead>
        <tbody>
        {tickets.length > 0 ? (
    tickets.map((ticket, index) => (
      <tr key={index + 1}>
        <td className="px-6 py-3 bg-gray-50 text-left text-lg leading-4">{index + 1}</td>
                <td className="px-6 py-3 bg-gray-50 text-left text-lg leading-4">{ticket.name}</td>
                <td className="px-6 py-3 bg-gray-50 text-left text-lg leading-4">{format(new Date(ticket.created_at), "yyyy-MM-dd")}</td>
                <td className="px-6 py-3 bg-gray-50 text-left text-lg leading-4">{ticket.description}</td>
                <td className="px-6 py-3 bg-gray-50 text-left text-lg leading-4" >{ticket.status}</td>
                <td>


                <Link className="px-4 py-2 rounded-full bg-red-600 ml-2 text-white "
                 href={`/rssi/dashboard/ticket/listicket/${ticket.id}`}>
                 See Details
                </Link>
                

                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No tickets available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReplayPage;