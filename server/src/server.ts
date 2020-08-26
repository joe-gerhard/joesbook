import express from 'express';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import morgan from 'morgan';
import path from 'path';

import passport from './config/passport/passport';
import mongoose from './config/database';
import authRouter from './routes/auth/authRouter';
import userRouter from './routes/user/userRouter';
import postRouter from './routes/postRouter';
import keys from './config/keys';

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
app.use(express.static(path.join(__dirname, '../../client/build')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);

app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.listen(keys.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${keys.port}`);
});
