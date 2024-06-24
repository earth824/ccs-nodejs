const pool = require('./pool');

const createComment = async (postId, commenter, comment) => {
  const sql = `INSERT INTO comments (post_id, commenter, comment) VALUES (?, ?, ?)`;
  await pool.execute(sql, [postId, commenter, comment]);
};

module.exports = {
  createComment
};
