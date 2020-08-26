import { AuthProvider } from '../@types';
import {
    faFacebookF,
    faGoogle,
    faLinkedinIn,
    IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

export const cleanFacebookHash = () => {
    if (window.location.hash === '#_=_') {
        // Check if the browser supports history.replaceState.
        // eslint-disable-next-line no-restricted-globals
        if (history.replaceState) {
            // Keep the exact URL up to the hash.
            var cleanHref = window.location.href.split('#')[0];
            // Replace the URL in the address bar without messing with the back button.
            // eslint-disable-next-line no-restricted-globals
            history.replaceState(null, '', cleanHref);
        } else {
            // Well, you're on an old browser, we can get rid of the _=_ but not the #.
            window.location.hash = '';
        }
    }
};

export interface AuthConstant {
    color: string;
    string: string;
    icon: IconDefinition;
}

export const authConstants = {
    facebook: {
        color: '#4267b2',
        string: 'Facebook',
        icon: faFacebookF,
    },
    google: {
        color: '#db4437',
        string: 'Google',
        icon: faGoogle,
    },
    linkedin: {
        color: '#0072b1',
        string: 'LinkedIn',
        icon: faLinkedinIn,
    },
};

export const getAuthConstants = (
    provider: AuthProvider,
): AuthConstant => {
    return authConstants[provider];
};

export const calculateCommentAge = (date: Date): string => {
    const commentAgeMilliseconds = Math.abs(
        new Date().getTime() - new Date(date).getTime(),
    );

    const years = Math.floor(
        commentAgeMilliseconds /
            (1000 * 60 * 60 * 24 * 7 * 4.345 * 12),
    );
    const months = Math.floor(
        commentAgeMilliseconds / (1000 * 60 * 60 * 24 * 7 * 4.345),
    );
    const weeks = Math.floor(
        commentAgeMilliseconds / (1000 * 60 * 60 * 24 * 7),
    );
    const days = Math.floor(
        commentAgeMilliseconds / (1000 * 60 * 60 * 24),
    );
    const hours = Math.floor(
        commentAgeMilliseconds / (1000 * 60 * 60),
    );
    const minutes = Math.floor(commentAgeMilliseconds / (1000 * 60));
    const seconds = Math.floor(commentAgeMilliseconds / 1000);

    if (years >= 1) return `${years}y`;
    if (months >= 1) return `${months}m`;
    if (weeks >= 1) return `${weeks}w`;
    if (days >= 1) return `${days}d`;
    if (hours >= 1) return `${hours}h`;
    if (minutes >= 1) return `${minutes}m`;
    if (seconds >= 1) return `${seconds}s`;
    return '1s';
};
