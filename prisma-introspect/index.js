const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const run = async () => {
  // 1.findUnique (return founded object, otherwise return null)
  // 2.findUniqueOrThrow (return founded object, otherwise throw error)
  // (SELECT) (Where apply unique field)
  // const result = await prisma.brand.findUnique({
  //   where: { id: 1000 }
  // });
  // const result = await prisma.brand.findUniqueOrThrow({
  //   where: { id: 1000 }
  // });

  // 3.findFirst (return first founded object, otherwise return null)
  // 4.findFirstOrThrow (return first founded object, otherwise throw error)

  // const result = await prisma.product.findFirst({
  //   where: { brandId: 400 }
  // });
  // const result = await prisma.product.findFirstOrThrow({
  //   where: { brandId: 400 }
  // });

  // 5.findMany (return Array of founded object)
  // SELECT * FROM brand
  // const result = await prisma.brand.findMany();
  // const result = await prisma.brand.findMany({
  //   where: { name: 'Nokia' }
  // });

  // SELECT Some fields
  // const result = await prisma.brand.findUnique({
  //   where: { id: 1 },
  //   select: { id: true, name: true }
  // });

  // const result = await prisma.brand.findUnique({
  //   where: { id: 1 },
  //   select: { product: true, name: true }
  // });

  // const result = await prisma.brand.findUnique({
  //   where: { id: 1 },
  //   select: {
  //     product: {
  //       select: {
  //         id: true,
  //         name: true,
  //         price: true
  //       }
  //     },
  //     name: true
  //   }
  // });

  // INCLUDE (cannot be used with select at the same time)
  // const result = await prisma.brand.findUnique({
  //   where: { id: 1 },
  //   include: {
  //     product: {
  //       select: { id: true, name: true, price: true, orderitem: true }
  //     }
  //   }
  // });

  // FILTER WHERE CONDITION example. gte, lte, startsWith, AND, OR, ...
  // const result = await prisma.brand.findFirst({
  //   where: { id: { not: 1 } }
  // });
  // const result = await prisma.product.findMany({
  //   where: {
  //     price: { gte: 50000 }
  //   }
  // });

  // const result = await prisma.product.findMany({
  //   where: {
  //     OR: [{ brandId: 1 }, { brandId: 4 }]
  //   }
  // });

  // const result = await prisma.product.findMany({
  //   where: {
  //     brandId: 1,
  //     price: { gte: 52000 }
  //   }
  // });

  // const result = await prisma.product.findMany({
  //   where: {
  //     brand: {
  //       name: 'Apple'
  //     }
  //   }
  // });

  // ORDER BY (desc, asc)
  // const result = await prisma.product.findMany({
  //   orderBy: {
  //     price: 'asc'
  //   },
  //   select: { name: true, price: true }
  // });

  // LIMIT(take), OFFSET(skip)
  // const result = await prisma.product.findMany({
  //   orderBy: { price: 'desc' },
  //   select: { name: true, price: true },
  //   take: 5,
  //   skip: 5
  // });

  // AGGREGATE _count, _sum, ...  (result: { _avg: { price: 37705.444444 } })
  // const result = await prisma.product.aggregate({
  //   _avg: {
  //     price: true
  //   },
  //   _count: {
  //     id: true
  //   }
  // });

  // GROUP BY
  // const result = await prisma.product.groupBy({
  //   by: 'brandId',
  //   _count: {
  //     id: true
  //   }
  // });

  // RAW QUERY
  const result = await prisma.$queryRaw`
    SELECT b.name, COUNT(b.id) AS _count FROM brand AS b LEFT JOIN product AS p ON b.id = p.brandId
    GROUP BY b.id
  `;

  console.log(result);
};

run();
