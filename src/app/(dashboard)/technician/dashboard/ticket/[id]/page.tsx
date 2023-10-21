
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

  const response = await db.ticket.findFirst(
    {
where :{
  id:id,
},
select :{
id: true ,
name : true ,
description : true ,
created_at : true ,

}  }) 

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
          Subject: {ticket?.name}
        </div>
        <div className='px-6 py-3 bg-gray-50 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider'>
          Ticket Opened:{ticket ? format(new Date(ticket.created_at), "yyyy-MM-dd") : ""}
        </div>
        <div className='px-6 py-3 bg-gray-50 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider'>
          Description:{ticket?.description}
        </div>
        
       
      </>
    </div>
  );
};

export default BlogDetailPage;
