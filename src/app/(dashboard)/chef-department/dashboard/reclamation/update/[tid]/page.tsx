"use client"
import React, { useState } from 'react';
import Link from 'next/link'
interface BlogDetailPageProps {
  params: {
    tid: string;
  };
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ params }) => {
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/v1/ticket/${params.tid}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, status }),
      });

      if (response.ok) {
        // Ticket updated successfully, set the success message
        setSuccessMessage('Ticket updated successfully');
        window.location.reload();
      } else {
        // Handle errors and clear the success message
        setSuccessMessage(null);
        console.error('Error updating ticket');
      }
    } catch (error) {
      // Handle errors and clear the success message
      setSuccessMessage(null);
      console.error('Error updating ticket:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Afficher l'alerte en cas de succès */}
      {successMessage && (
        <div className="bg-green-200 text-green-800 p-2 mt-2 rounded">
          {successMessage}
        </div>
      )}
      <div className='mt-6 ml-8'>
        <label htmlFor='content' className='px-6 py-3 mr-4 bg-gray-50 text-left text-base leading-4 font-medium text-gray-700 uppercase tracking-wider'>
          Message<span className='text-rose-600'>*</span>
        </label>
        <textarea
          id='content'
          name='content'
          value={content}
          className='block p-2.5 w-2/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300'
          placeholder='Write your thoughts here...'
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>

      <label htmlFor="status" className="block mb-2 mt-6 text-sm font-medium text-gray-900 dark:text-white">Select Ticket Status</label>
      <select
        id="status"
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className='w-60 h-11 px-6 m-2 text-lg text-indigo-100  bg-red-500 rounded-full '
        required
      >
        <option className=" rounded-full" value="notCompleted">Not Completed</option>
        <option className="  rounded-full" value="completed">Completed</option>
      </select>

      <button className="px-4 py-2 rounded-full bg-red-600 ml-2 text-white" type="submit">
        Close Ticket
      </button>
   
    </form>
    
  );
}

export default BlogDetailPage;
