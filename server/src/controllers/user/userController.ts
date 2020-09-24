import { Request, Response } from 'express';
import User, { IUserDocument } from '../../models/User';

const getUser = (req: Request, res: Response): void => {
    let user;
    if (req.user) {
        user = req.user as IUserDocument;
        res.json(user);
    } else {
        res.json(user);
    }
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);

    res.json(updatedUser);
};

export default {
    getUser,
    updateUser,
};
