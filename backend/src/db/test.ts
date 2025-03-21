import { prisma } from './db';

async function main() {
    //
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
