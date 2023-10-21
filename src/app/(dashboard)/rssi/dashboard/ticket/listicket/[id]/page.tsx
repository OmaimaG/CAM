import { db } from '@/services/db';
import React from 'react';
import { format } from "date-fns"

 // Import from next/router







 
interface BlogDetailPageProps {
  params: {
    id: string;
  };
}
async function getPost (id : string) {

  
  const response  = await db.message.findMany({
      where: {
        // Use the role relation to filter by Role_id
        ticket_id: id,
      },
      // You can select only the name field if needed
      select: {
        
                  content: true // Contenu du message
                },
            
      },
   )

return response ;

}


const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  

  const ticket =await getPost(params.id);
  if (ticket) {
    console.log("Ticket found:", ticket);
  } else {
    console.log("Ticket not found.");
  }


  
 
  return (
    <div>
      <>
      <div className='px-6 py-3 bg-gray-50 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider'>
        Messages liés au ticket avec l'ID {params.id}
      </div>
      <ul>
        {ticket.map((message, index) => (
          <li key={index}>{message.content}</li> 
        ))}
      </ul>
      </>
       </div>
      
    
  );
};

export default BlogDetailPage;