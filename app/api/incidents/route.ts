import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  const incidents = await prisma.incident.findMany();
  return new Response(JSON.stringify(incidents));
}