// pages/api/yourApiRoute.js

import { NextRequest, NextResponse } from 'next/server';

import { getSession } from "@/lib/session"


// Assurez-vous d'ajuster le chemin d'importation en fonction de votre structure de projet
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function POST(req: NextRequest, res: NextResponse) {
  // Utilisez votre middleware
  const session = await getSession();
  if (!session || !session.user) {
    return NextResponse.json(
      {
        message: 'Vous devez être connecté pour créer un ticket.',
      },
      { status: 401 }
    );
  }
 // ...
if (req.method === 'POST') {
  try {
    const { name, description, receiverName,status} = await req.json();

    // Recherchez l'ID du technicien en fonction du nom
    const user = await prisma.user.findFirst({
      where: {
        name: receiverName,
      },
    });

    if (user) {
      const receiver_id = user.id;
      const sender_id = session.user.id;
      // Créez un ticket en utilisant Prisma
      const ticket = await prisma.ticket.create({
        data: {
          name, // Supposons que 'name' correspond à 'requesterName'
          description,
          receiverName,
          status,
          receiver_id,
          sender_id

        },
        
      
      });
      console.log(receiverName)
      console.log(receiver_id)
      // Retournez le ticket créé ou un message de succès
      return NextResponse.json(
        {
          message: `Ticket créé`,
          result: ticket,
        },
        { status: 201 }
      )
      

    } else {
      return NextResponse.json(
        {
          message: 'Technician not found',
        },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Erreur lors de la création du ticket :', error);
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
}

