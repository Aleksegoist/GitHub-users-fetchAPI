import React, { useEffect, useState } from 'react';
import UsersContainer from '../components/UsersContainer';

const Users = () => {
    const [users, setUsers] = useState([]);
    let BaseURL = 'https://api.github.com/users';

    async function AllUsers() {
        const res = await fetch(BaseURL);
        const data = await res.json();
        setUsers(data);
    }

    useEffect(() => {
        AllUsers();
    }, [setUsers]);

    return (
        <div>
            <UsersContainer users={users} />
        </div>
    );
};

export default Users;
