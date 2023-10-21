import { db } from '@/services/db';
import { NextResponse } from 'next/server';

interface contextProps {
  params: {
    id: string;
  };
}

export async function PATCH(req: Request, context: contextProps) {
  try {
    const { id } = context.params;
    const body = await req.json();

    await db.ticket.update({
      where: {
        id: id,
      },
      data: {
        messages: {
          create: [
            {
              content: body.content, // Contenu du message
            },
          ],
        },
        status :body.status,
      },
    });

    // Handle the response as needed
    return  NextResponse.json({ message: 'Ticket updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating ticket:', error);
    // Handle errors and return an appropriate response
    return  NextResponse.json({ error: 'An error occurred while updating the ticket' }, { status: 500 });
  }
}
