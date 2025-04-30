import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const activities = await prisma.activity.findMany();
    res.json(activities);
  } else if (req.method === 'POST') {
    const { name, author } = req.body;
    const activity = await prisma.activity.create({ data: { name, author } });
    res.status(201).json(activity);
  }
}

