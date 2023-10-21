import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

import { getSession } from "@/lib/session"
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const session = await getSession();
  if (!session || !session.user) {
    return NextResponse.json(
      {
        message: 'Vous devez être connecté pour créer un ticket.',
      },
      { status: 401 }
    );
  }
  try {
    const userId = session.user.id;
    const tickets = await prisma.ticket.findMany({
      where: { receiver_id: userId },
    });

    return NextResponse.json({
      message: "Fetched tickets",
      success: true,
      tickets,
    });
   
  } catch (error) {
    console.error('Error fetching data:', error);

    // Ajoutez une déclaration console.log ici pour journaliser l'erreur
    console.log('Error details:', error);

    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
