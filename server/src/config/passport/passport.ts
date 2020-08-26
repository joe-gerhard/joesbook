import passport from 'passport';

import User, { IUserDocument } from '../../models/User';
import facebookStrategy from './strategies/facebookStrategy';
import googleStrategy from './strategies/googleStrategy';
import linkedinStrategy from './strategies/linkedinStrategy';

passport.use(facebookStrategy);
passport.use(googleStrategy);
passport.use(linkedinStrategy);

passport.serializeUser((user: IUserDocument, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
    const user = await User.findById(id).exec();

    if (user) {
        done(null, user);
    } else {
        done('User not found');
    }
});

export default passport;
