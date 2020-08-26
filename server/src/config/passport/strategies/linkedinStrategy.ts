import { Strategy as LinkedInStrategy, StrategyOption } from 'passport-linkedin-oauth2';
import keys from '../../keys';
import findOrCreateUser from '../../../services/user/userServices';

interface LinkedInOption extends StrategyOption {
    scope?: string[];
    state?: boolean;
}

const options: LinkedInOption = {
    clientID: keys.linkedIn.clientId,
    clientSecret: keys.linkedIn.clientSecret,
    callbackURL: keys.linkedIn.callbackURL,
    scope: ['r_emailaddress', 'r_liteprofile'],
    state: true,
};

export default new LinkedInStrategy(options, async (_accessToken, _refreshToken, profile, done) => {
    try {
        const [user] = await findOrCreateUser(profile);
        done(null, user);
    } catch (error) {
        done(error);
    }
});
