import { Schema, model, Document } from 'mongoose';

import { IUser } from '../@types';
import { Post } from './Post';

export interface IUserDocument extends Document, IUser {
    posts?: string[] | Post[];
}

const userSchema: Schema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    picture: { type: String },
    posts: { type: [{ type: Schema.Types.ObjectId, ref: 'Post' }], default: [] },
});

export default model<IUserDocument>('User', userSchema);
