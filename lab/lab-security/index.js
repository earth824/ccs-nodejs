const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

const register = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  await prisma.user.create({
    data: {
      username,
      password: hashedPassword
    }
  });
};

// register('john', '123456');

const secretKey = 'codecamp';

const login = async (username, password) => {
  // if found return founded user object, otherwise return null
  // { id: string, username: string, password: string }
  const searchUser = await prisma.user.findUnique({
    where: {
      username
    }
  });

  if (!searchUser) {
    return false;
  }

  const isCorrect = await bcrypt.compare(password, searchUser.password);
  if (!isCorrect) {
    return false;
  }

  const token = jwt.sign(
    { id: searchUser.id, username: searchUser.username },
    secretKey,
    {
      algorithm: 'HS384',
      expiresIn: 90 * 60
    }
  );

  return token;
};

const verifyToken = tokenToVerify => {
  try {
    const payload = jwt.verify(tokenToVerify, secretKey);
    return payload;
  } catch (err) {
    return false;
  }
};

const run = async () => {
  // const isSuccess = await login('john', '123456');
  // console.log(isSuccess);
  const result = verifyToken(
    'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJqb2huIiwiaWF0IjoxNzE5MzA4MDcwLCJleHAiOjE3MTkzMTM0NzB9.jYRHFp4n7rThKpSNh0PeRwiDsKWg3BRpWSrfZdLPJsfmomT18C3fkyVLxdQzetpk'
  );
  console.log(result);
};

run();
