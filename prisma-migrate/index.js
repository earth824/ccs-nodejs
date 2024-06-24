const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const run = async () => {
  // CRUD User model using prisma.user
  // CRUD Todo model using prisma.todo

  // CREATE single record (INSERT INTO) return new user object
  // const result = await prisma.user.create({
  //   data: {
  //     username: 'john',
  //     password: '123456',
  //     isMarried: true
  //   }
  // });

  // CREATE many record return { count: 2 }
  // const result = await prisma.user.createMany({
  //   data: [
  //     { username: 'jill', password: '12345678' },
  //     { username: 'ann', password: '654321' }
  //   ]
  // });

  // CREATE related record
  // const result = await prisma.user.create({
  //   data: {
  //     username: 'bob',
  //     password: '1234556',
  //     todos: {
  //       create: {
  //         title: 'Ski'
  //       }
  //     }
  //   }
  // });

  // const result = await prisma.user.create({
  //   data: {
  //     username: 'ben',
  //     password: '098765543',
  //     todos: {
  //       create: [{ title: 'Meeting' }, { title: 'Fitness' }]
  //     }
  //   }
  // });

  // const result = await prisma.todo.create({
  //   data: {
  //     title: 'Shopping',
  //     user: {
  //       create: {
  //         username: 'sam',
  //         password: '999999'
  //       }
  //     }
  //   }
  // });

  // UPDATE single record (where: unique field only) return updated object
  // const result = await prisma.user.update({
  //   data: {
  //     password: '000000'
  //   },
  //   where: {
  //     username: 'john',
  //     // isMarried: false // Error
  //   }
  // });

  // UPDATE many record return { count: 5 }
  // const result = await prisma.user.updateMany({
  //   data: {
  //     gender: 'UNKNOWN'
  //   },
  //   where: {
  //     isMarried: false
  //   }
  // });

  // DELETE single record (where: unique field only) return deleted user object
  // const result = await prisma.user.delete({
  //   where: {
  //     username: 'ann'
  //   }
  // });

  // DELETE many record return { count: 2 }
  const result = await prisma.todo.deleteMany({
    where: {
      userId: 5
    }
  });

  console.log(result);
};

run();
