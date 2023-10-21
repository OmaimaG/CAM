import { db } from '@/services/db';

export default async function handler(req: Request, res) {
  const { receiverId } = req.query;

  try {
    const receiver = await db.user.findUnique({
      where: {
        id: receiverId,
      },
      select: {
        name: true,
      },
    });

    if (receiver) {
      res.status(200).json({ receiverName: receiver.name });
    } else {
      res.status(404).json({ error: 'Receiver not found' });
    }
  } catch (error) {
    console.error('Error fetching receiver name:', error);
    res.status(500).json({ error: 'An error occurred while fetching receiver name' });
  }
}
