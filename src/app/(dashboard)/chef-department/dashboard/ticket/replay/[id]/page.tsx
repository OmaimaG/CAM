
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
      <div className="border p-4 bg-white rounded-md shadow-md">
  <div className="text-xl font-semibold">Subject: {ticket?.name}</div>
  <div className="text-sm text-gray-500 mt-2">Ticket Opened: {ticket ? format(new Date(ticket.created_at), "yyyy-MM-dd") : ""}</div>
  <div className="text-sm mt-2">Description: {ticket?.description}</div>
</div>
       
      </>
    </div>
  );
};

export default BlogDetailPage;
