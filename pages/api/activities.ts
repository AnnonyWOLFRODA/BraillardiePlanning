import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

// PrismaClient singleton to prevent multiple connections in serverless environment
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = 
  globalForPrisma.prisma ||
  new PrismaClient({ log: ['error'] });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

type ActivityResponse = {
  id: string;
  name: string;
  author: string;
} | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ActivityResponse | ActivityResponse[]>
) {
  try {
    if (req.method === 'GET') {
      const activities = await prisma.activity.findMany();
      return res.status(200).json(activities);
    } 
    
    if (req.method === 'POST') {
      const { name, author } = req.body;
      
      if (!name || !author) {
        return res.status(400).json({ error: 'Name and author are required' });
      }
      
      const activity = await prisma.activity.create({ 
        data: { name, author }
      });
      
      return res.status(201).json(activity);
    }
    
    // Method not allowed
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
