import React from 'react';
import { Link } from 'react-router-dom';

const UsersContainer = ({ users }) => {
    return (
        <div className='flex gap-5 flex-wrap justify-center py-5'>
            {users &&
                users.map(
                    (user, idx) =>
                        user?.login && (
                            <div
                                key={idx}
                                className='flex w-[200px] border border-gray-500 bg-slate-800 p-3 flex-col items-center'
                            >
                                <img
                                    src={user?.avatar_url}
                                    className='w-36 mb-4 border-4 border-white-400 rounded-full hover:border-green-700'
                                    alt='avatar'
                                />
                                <h1 className='text-xl'>{user?.login}</h1>
                                <h1 className='text-xs text-green-700'>
                                    {user?.name}
                                </h1>
                                <Link to={`/${user?.login}`}>
                                    <span className='text-gray-200 bg-green-700 my-3 font-semibold block py-1 px-4 tracking-wide rounded-md'>
                                        SHOW
                                    </span>
                                </Link>
                            </div>
                        )
                )}
        </div>
    );
};

export default UsersContainer;
