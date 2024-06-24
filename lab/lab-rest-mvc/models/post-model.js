const pool = require('./pool');

const createTablePost = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS posts (
      id INT PRIMARY KEY AUTO_INCREMENT,
      author VARCHAR(40) NOT NULL,
      title VARCHAR(191) NOT NULL,
      body TEXT NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
      updated_at DATETIME NOT NULL
    )
  `;

  pool.execute(sql);

  const createTableCommentSql = `
    CREATE TABLE IF NOT EXISTS comments (
      id INT PRIMARY KEY AUTO_INCREMENT,
      post_id INT NOT NULL,
      commenter VARCHAR(191) NOT NULL,
      comment TEXT NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
      FOREIGN KEY (post_id) REFERENCES posts (id)
    )
  `;

  const result = await pool.execute(createTableCommentSql);
  console.log(result);
};

const createPost = (author, title, body) => {
  const sql = `
    INSERT INTO posts (author, title, body, updated_at) VALUES (?, ?, ?, ?)
  `;
  return pool.execute(sql, [author, title, body, new Date()]);
};

const deletePost = async postId => {
  const sql = `
    DELETE FROM posts WHERE id = ?
  `;
  await pool.execute(sql, [postId]);
};

const getAllPost = async () => {
  const sql = `SELECT p.id AS postId, p.author AS postAuthor, p.title, p.body, 
  c.id AS commentId, c.commenter, c.comment
  FROM posts AS p LEFT JOIN comments AS c ON p.id = c.post_id`;
  const result = await pool.execute(sql);
  return result[0];
};

module.exports = {
  createTablePost,
  createPost,
  deletePost,
  getAllPost
};
