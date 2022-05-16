import React from 'react';

const Tabs = ({ type, setType }) => {
    return (
        <>
            <button
                className={`${type === 'repos' && 'text-green-400'}`}
                onClick={() => setType('repos')}
            >
                REPOSITORIES
            </button>
            <button
                className={`${type === 'received_events' && 'text-green-400'}`}
                onClick={() => setType('received_events')}
            >
                ACTIVITY
            </button>
            <button
                className={`${type === 'followers' && 'text-green-400'}`}
                onClick={() => setType('followers')}
            >
                FOLLOWERS
            </button>
        </>
    );
};

export default Tabs;
