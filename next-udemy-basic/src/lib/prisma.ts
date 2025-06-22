// src/lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}


//参考: https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections#prevent
//hot-reloading-from-creating-new-instances-of-prismaclient