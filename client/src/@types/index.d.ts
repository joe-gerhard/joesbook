export interface IUser {
    _id: string;
    name: string;
    email: string;
    picture: string;
}

export interface IPost {
    _id: string;
    author: IUser;
    content: string;
    likes: string[];
    updatedAt: Date;
    comments: IComment[];
}

export interface IComment {
    _id: string;
    author: IUser;
    content: string;
    createdAt: Date;
}

export type AuthProvider = 'facebook' | 'google' | 'linkedin';
