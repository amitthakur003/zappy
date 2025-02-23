import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}


// globalThis.prisma: This global variable keeps the Prisma client instance the same
// during development. Without it, every time the app reloads, a new Prisma client 
// would be created, which could cause connection problems.
