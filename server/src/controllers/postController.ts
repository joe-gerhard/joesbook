import { Request, Response } from 'express';
import Post from '../models/Post';
import { IUserDocument } from '../models/User';
import Comment from '../models/Comment';

const create = async (req: Request, res: Response) => {
    const user = req.user as IUserDocument;
    try {
        const post = await Post.create({
            author: user.id,
            content: req.body.content,
            likes: [],
            comments: [],
        });
        res.send(post);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getAll = async (_req: Request, res: Response) => {
    try {
        const posts = await Post.find({})
            .populate('author')
            .populate({
                path: 'comments',
                populate: { path: 'author' },
                options: { sort: '-createdAt' },
            })
            .sort('-createdAt');
        res.send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deletePost = async (req: Request, res: Response) => {
    const postId = req.params.id;
    try {
        const deletedPost = await Post.findByIdAndDelete(postId);

        await Comment.deleteMany({ post: postId });

        res.send(deletedPost);
    } catch (error) {
        res.status(500).send(error);
    }
};

const like = async (req: Request, res: Response) => {
    let user: IUserDocument;
    if (req.user) {
        user = req.user as IUserDocument;
        try {
            const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                $push: { likes: user.id },
            });
            res.send(updatedPost);
        } catch (error) {
            res.status(500).send('Error updating the user');
        }
    }
};

const unlike = async (req: Request, res: Response) => {
    let currentUser: IUserDocument;

    if (req.user) {
        currentUser = req.user as IUserDocument;
        try {
            const postToUpdate = await Post.findById(req.params.id);

            if (postToUpdate) {
                const likes = [...postToUpdate.likes];
                likes.splice(likes.indexOf(currentUser.id), 1);

                const updatedPost = await Post.findByIdAndUpdate(req.params.id, { likes });

                res.send(updatedPost);
            } else {
                res.status(500).send('Post not found');
            }
        } catch (error) {
            res.status(500).send('Error updating the post');
        }
    }
};

const addComment = async (req: Request, res: Response) => {
    let currentUser: IUserDocument;
    const { content } = req.body;
    const postId = req.params.id;

    if (req.user) {
        try {
            currentUser = req.user as IUserDocument;

            const comment = await Comment.create({
                author: currentUser.id,
                content,
                post: postId,
            });

            const updatedPost = await Post.findByIdAndUpdate(postId, {
                $push: { comments: comment.id },
            });
            res.send(updatedPost);
        } catch (error) {
            res.status(500).send('Error adding comment');
        }
    }
};

export default {
    create,
    getAll,
    delete: deletePost,
    like,
    unlike,
    addComment,
};
