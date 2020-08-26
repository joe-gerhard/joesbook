import { Schema, model, Document } from 'mongoose';
import { IUser } from '../@types';

export interface Post {
    author: IUser | string;
    content: string;
    likes: string[];
    comments: string[];
}

export interface PostDocument extends Document, Post {}

const userSchema: Schema = new Schema<Post>(
    {
        author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        likes: { type: [String], default: [], required: true },
        comments: { type: [{ type: Schema.Types.ObjectId, ref: 'Comment' }], default: [] },
    },
    { timestamps: true },
);

export default model<PostDocument>('Post', userSchema);
