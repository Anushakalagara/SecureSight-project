import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { id } = await req.json();
  await prisma.incident.update({ where: { id }, data: { resolved: true } });
  return new Response('Resolved');
}