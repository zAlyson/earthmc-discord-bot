import { PrismaClient } from '@prisma/client';

// add prisma to the NodeJS global type
declare global {
  interface CustomNodeJsGlobal {
    prisma: PrismaClient;
  }
}

declare const global: CustomNodeJsGlobal;

const prismaClient =
  global.prisma ||
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

global.prisma = prismaClient;

export default prismaClient;
