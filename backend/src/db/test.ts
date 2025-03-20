import { prisma } from './db';

async function main() {
    const user = await prisma.user.create({
        data: {
            name: "Shadieth",
            email: "shadieth@example.com",
        },
    });

    console.log("✅ Usuario creado:", user);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
