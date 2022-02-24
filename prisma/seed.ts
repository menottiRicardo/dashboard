// prisma/seed.ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.employee.create({
    data: {
        name: "Ricardo",
        lastname: "Menotti",
        cedula: "8-957-2190",
        phone: "6376-0173",
        location: "Las Cumbres",
        shirts: 2,
        boots: false,
        paid: false,
    },
  })

  
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })