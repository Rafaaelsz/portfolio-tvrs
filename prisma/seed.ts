import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.contactMessage.createMany({
    data: [
      {
        name: "Rafael Tavares",
        email: "rafael@example.com",
        subject: "Projeto institucional",
        message: "Gostaria de conversar sobre um site institucional moderno.",
        status: "unread",
      },
      {
        name: "Ana Souza",
        email: "ana@example.com",
        subject: "Dashboard SaaS",
        message: "Preciso de uma interface para acompanhar metricas de produto.",
        status: "read",
      },
      {
        name: "Lucas Almeida",
        email: "lucas@example.com",
        subject: "Automacao",
        message: "Tenho interesse em automatizar processos internos com APIs.",
        status: "archived",
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
