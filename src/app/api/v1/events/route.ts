// pages/api/events.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch events for the currently authenticated user
      const events = await prisma.calendarEvent.findMany({
        where: {
          user_id: req.user.id, // Replace with your authentication logic
        },
      });
      res.status(200).json(events);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ error: 'Error fetching events' });
    }
  } else if (req.method === 'POST') {
    const { title, start, end } = req.body;
    try {
      // Create an event associated with the currently authenticated user
      const event = await prisma.calendarEvent.create({
        data: {
          title,
          start,
          end,
          user_id: req.user.id, // Replace with your authentication logic
        },
      });
      res.status(201).json(event);
    } catch (error) {
      console.error('Error creating event:', error);
      res.status(500).json({ error: 'Error creating event' });
    }
  } else {
    res.status(405).end();
  }
}
