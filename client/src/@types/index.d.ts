export interface IUser {
    _id: string;
    name: string;
    email: string;
    picture: string;
    bio: string;
}

export interface IPost {
    _id: string;
    author: IUser;
    content: string;
    likes: string[];
    updatedAt: Date;
    createdAt: Date;
    comments: IComment[];
}

export interface IComment {
    _id: string;
    author: IUser;
    content: string;
    createdAt: Date;
}

export type AuthProvider = 'facebook' | 'google' | 'linkedin';
