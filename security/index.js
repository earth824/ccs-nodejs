const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const run = async () => {
  // const password = '12345678';
  // const hashedPassword = await bcrypt.hash(password, 18);
  // console.log(hashedPassword);
  // const isCorrect = await bcrypt.compare(
  //   password,
  //   '$2a$12$CpFdRP14EtCT.RoK/XxzAemoPMlN5bGQaGdJ4X5Ab9hXivHNFlEAu'
  // );
  // console.log(isCorrect);

  const secretKey = 'poiuytrewqasdfghjklmnbvcxz';
  // const payload = { id: 9, username: 'ronnie', email: 'ronnie@yahoo.com' };
  // const token = jwt.sign(payload, secretKey, {
  //   algorithm: 'HS256',
  //   expiresIn: '1'
  // });
  // console.log(token);

  const tokenToVerify =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwidXNlcm5hbWUiOiJyb25uaWUiLCJlbWFpbCI6InJvbm5pZUB5YWhvby5jb20iLCJpYXQiOjE3MTkzMDIxNDUsImV4cCI6MTcxOTMwMjE0NX0.I1u4vLy7agJq92gh2JH0l3H9k7mZnQ5uSHa_G1-o14Y';
  try {
    const result = jwt.verify(tokenToVerify, secretKey); // if valid signature return payload, if invalid signature throw error
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

run();
