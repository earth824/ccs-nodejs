const mysql = require('mysql2/promise');

const run = async () => {
  // const connection = await mysql.createConnection({
  //   host: 'localhost',
  //   user: 'root',
  //   password: '123456',
  //   database: 'nodejs_mysql'
  // });

  // const result = await connection.query(`
  //   CREATE TABLE IF NOT EXISTS todo (
  //     id INT PRIMARY KEY AUTO_INCREMENT,
  //     title VARCHAR(255) NOT NULL
  //   )
  // `);

  // console.log(result);

  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'nodejs_mysql',
    connectionLimit: 20
  });

  // const result = await pool.execute(`
  //   CREATE TABLE IF NOT EXISTS user (
  //     id INT PRIMARY KEY AUTO_INCREMENT,
  //     username VARCHAR(40) NOT NULL UNIQUE,
  //     password VARCHAR(255) NOT NULL,
  //     isActive BOOLEAN NOT NULL DEFAULT false
  //   )
  //   `);

  // const result = await pool.execute(`SELECT * FROM user`);
  // console.log(result);

  // result from method execute is array with fixed length (2)

  // RESULT FROM INSERT INTO, UPDATE, DELETE
  // result = [ ResultSetHeader, undefined ]
  // ResultSetHeader {
  //   fieldCount: 0,
  //   affectedRows: 1, *** INSERT INTO, UPDATE, DELETE
  //   insertId: 1, *** INSERT INTO
  //   info: '',
  //   serverStatus: 2,
  //   warningStatus: 0,
  //   changedRows: 0 *** UPDATE
  // }

  // const result = await pool.execute(`
  //   INSERT INTO user (username, password) VALUES ("john", "123456")
  // `);
  // const result = await pool.execute(`
  //   INSERT INTO user (username, password) VALUES ("jack", "123456"), ("jim", "123456"), ("joe", "123456")
  // `);
  // const result = await pool.execute(`
  //   UPDATE user SET password = "654321" WHERE id > 3
  //   `);
  // const result = await pool.execute(`
  //   DELETE FROM user WHERE id > 10000
  //   `);

  // console.log(result);

  // RESULT FROM SELECT
  // result = [ rows, fields ]
  // example row from workbench
  // id       name    createdAt                   updatedAt
  // 1        Apple   2023-08-31 08:17:17.873    2023-08-31 08:17:17.873   ====> { id: 1, name: 'Apple', createdAt: '2023-08-31T08:17:17.873Z', updatedAt: '2023-08-31T08:17:17.873Z'  }
  // 2        Samsung 2023-08-31 15:17:17.873    2023-08-31 15:17:17.873   ====> { id: 2, name: 'Samsung', createdAt: '2023-08-31T08:17:17.873Z', updatedAt: '2023-08-31T08:17:17.873Z'  }
  // rows = [ object, object, ... ]
  // [
  //     {
  //       id: 1,
  //       name: 'Apple',
  //       createdAt: 2023-08-31T08:17:17.873Z,
  //       updatedAt: 2023-08-31T08:17:17.873Z
  //     },
  //     {
  //       id: 2,
  //       name: 'Samsung',
  //       createdAt: 2023-08-31T08:17:17.873Z,
  //       updatedAt: 2023-08-31T08:17:17.873Z
  //     },
  //     {
  //       id: 3,
  //       name: 'Oppo',
  //       createdAt: 2023-08-31T08:17:17.873Z,
  //       updatedAt: 2023-08-31T08:17:17.873Z
  //     },
  //   ]
  // fields ==> row object description
  // [
  //   `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  //   `name` VARCHAR(191) NOT NULL UNIQUE_KEY,
  //   `createdAt` DATETIME(23) NOT NULL,
  //   `updatedAt` DATETIME(23) NOT NULL
  // ]

  // const result = await pool.execute(`
  //   SELECT * FROM brand WHERE name LIKE "A%"
  // `);

  // const result = await pool.execute(`
  //     SELECT id, name FROM brand
  //   `);

  // const result = await pool.execute(`
  //   SELECT p.name AS productName, p.price, b.name AS brandName FROM product AS p LEFT JOIN brand AS b ON p.brandId = b.id
  //   `);
  // productName        price               brandName
  // Oppo Reno10 Pro+   27990.00            Oppo    ====> { productName: 'Oppo Reno10 Pro+', price: '27990.00 ', brandName: 'Oppo' }

  // const result = await pool.execute(`
  //   SELECT COUNT(*) AS totalProduct FROM product
  //   `);
  // COUNT(*)
  // 18         ====> { COUNT(*): 18 }
  // result = [ { COUNT(*): 18 } ]

  // const result = await pool.execute(`
  //   SELECT brandId, COUNT(*) AS totalProduct FROM product GROUP BY brandId ORDER BY totalProduct DESC
  //   `);

  // assume usernaem type username 'aaa' and password = 'bbb'
  const u = 'jim';
  const p = '654321'; // hash password
  // const sql = `SELECT * FROM user WHERE username = "${u}" AND password = "${p}"`;
  // console.log(sql);

  // const result = await pool.execute(sql);

  const sql = `SELECT * FROM user WHERE username = ? AND password = ?`;
  const result = await pool.execute(sql, [u, p]);

  console.log(result);
};

run();

// connection
//   .then(() => {
//     console.log('connect to mysql server successfully');
//   })
//   .catch(err => console.log(err));

// CREATE TABLE todo(id, title)
