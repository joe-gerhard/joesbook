import { Request, Response } from 'express';
import { IUserDocument } from '../../models/User';

const getUser = (req: Request, res: Response): void => {
    let user;
    if (req.user) {
        user = req.user as IUserDocument;
        res.json(user);
    } else {
        res.json(user);
    }
};

export default {
    getUser,
};
