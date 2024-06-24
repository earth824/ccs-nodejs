const { Router } = require('express');

const postController = require('../controllers/post-controller');
const commentController = require('../controllers/comment-controller');

const postRouter = Router();

postRouter.get('/', postController.getAllPost);
postRouter.post('/', postController.createPost);
postRouter.patch('/:postId', postController.updatePost);
postRouter.delete('/:postId', postController.deletePost);

postRouter.get('/:postId/comments', commentController.getCommentByPostId);
postRouter.post('/:postId/comments', commentController.createComment);
postRouter.patch(
  '/:postId/comments/:commentId',
  commentController.updateComment
);
postRouter.delete(
  '/:postId/comments/:commentId',
  commentController.deleteComment
);

module.exports = postRouter;
