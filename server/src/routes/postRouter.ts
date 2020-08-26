import express from 'express';
import postController from '../controllers/postController';

const postRouter = express.Router();

postRouter.post('/', postController.create);
postRouter.get('/', postController.getAll);
postRouter.delete('/:id', postController.delete);
postRouter.put('/:id/like', postController.like);
postRouter.put('/:id/unlike', postController.unlike);
postRouter.put('/:id/comment', postController.addComment);

export default postRouter;
