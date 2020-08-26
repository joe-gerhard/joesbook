import { Schema, model, Document } from 'mongoose';
import { IUser } from '../@types';
import { Post } from './Post';

export interface Comment {
    author: string | IUser;
    post: string | Post;
    content: string;
}

export interface CommentDocument extends Document, Comment {}

const userSchema: Schema = new Schema<Comment>(
    {
        author: { type: Schema.Types.ObjectId, ref: 'User' },
        post: { type: Schema.Types.ObjectId, ref: 'Post' },
        content: { type: String, required: true },
    },
    { timestamps: true },
);

export default model<CommentDocument>('Comment', userSchema);
