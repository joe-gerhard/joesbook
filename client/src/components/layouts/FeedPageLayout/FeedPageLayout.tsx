import React from 'react';
import MainBody from '../../organisms/MainBody';
import NewPostWidget from '../../organisms/NewPostWidget';
import NewsFeed from '../../organisms/NewsFeed';

const FeedPageLayout = () => {
    return (
        <MainBody>
            <NewPostWidget />
            <NewsFeed />
        </MainBody>
    );
};

export default FeedPageLayout;
