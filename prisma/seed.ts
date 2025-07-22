import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.incident.createMany({
    data: [
      { cameraId: 'CAM-101', videoUrl: 'https://example.com/vid1.mp4', timestamp: new Date(), resolved: false },
      { cameraId: 'CAM-102', videoUrl: 'https://example.com/vid2.mp4', timestamp: new Date(), resolved: true }
    ]
  });
}

main().finally(() => prisma.$disconnect());