import express from 'express';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import morgan from 'morgan';

import passport from './config/passport/passport';
import mongoose from './config/database';
import authRouter from './routes/auth/authRouter';
import userRouter from './routes/user/userRouter';
import postRouter from './routes/postRouter';

const app = express();

const MongoStore = connectMongo(session);

app.use(morgan('dev'));
app.use(
    session({
        secret: 'some secret',
        resave: false,
        saveUninitialized: false,
        name: 'mern.test',
        store: new MongoStore({
            mongooseConnection: mongoose.connection,
        }),
    }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);

app.listen(4000, () => {
    // eslint-disable-next-line no-console
    console.log('Listening on port 4000');
});
