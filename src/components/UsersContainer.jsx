import React from 'react';

const UsersContainer = ({ users }) => {
    return (
        <div>
            {users &&
                users.map((user, idx) => (
                    <div key={idx}>
                        <img src={user?.avatar_url} />
                    </div>
                ))}
        </div>
    );
};

export default UsersContainer;
