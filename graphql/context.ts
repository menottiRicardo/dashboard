// graphql/context.ts
import { PrismaClient } from "@prisma/client";
import { NextApiHandler, NextApiRequest } from "next";
import prisma from "../lib/prisma";

export type Context = {
  prisma: PrismaClient;
};

export async function createContext(
  req: NextApiRequest,
  res: NextApiHandler
): Promise<Context> {
  return {
    prisma,
  };
}
