import { db } from '@/services/db';
import { NextResponse } from 'next/server';

interface contextProps {
  params: {
    id: string;
  };
}

export async function GET(req: Request, context: contextProps) {
  try {
    const { id } = context.params;
    const messagest = await db.message.findMany({
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

      

      // Return the list of technician names as JSON response
      const messageContents = messagest.map((message) => message.content);

    // Retournez le contenu des messages en tant que réponse JSON
    return NextResponse.json({
      message: `Messages liés au ticket avec l'ID ${id}`,
      result: messageContents,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
    }, { status: 500 });
  }
}