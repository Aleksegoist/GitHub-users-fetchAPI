import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Tabs from '../components/Tabs';

const UserInfo = () => {
    const [user, setUser] = useState([]);
    const [type, setType] = useState('repos');
    const { pathname } = useLocation();
    const navigate = useNavigate();
    let BaseURL = 'https://api.github.com/users';

    async function getUserInfo() {
        const res = await fetch(BaseURL + pathname);
        const data = await res.json();
        setUser(() => [data]);
    }

    useEffect(() => {
        getUserInfo();
    }, [pathname, type]);
    return (
        <div className='py-5'>
            <button
                onClick={() => navigate('/')}
                className='text-gray-200 bg-green-700 my-3 font-semibold block py-1 px-4 tracking-wide rounded-md'
            >
                BACK
            </button>
            {user &&
                user?.map((usinfo, i) => (
                    <div
                        key={i}
                        className='flex justify-center md:flex-row md:px-0 px-4 flex-col gap-10'
                    >
                        <img
                            src={usinfo.avatar_url}
                            alt='user'
                            className='w-[350px] border-4 border-green-700 md:mx-0 mx-auto rounded-full'
                        />
                        <div className='text-lg px-3 leading-8'>
                            <h1 className='text-3xl pb-4'>{usinfo?.name}</h1>
                            <h1>
                                <span className='text-green-400'>
                                    Login_name
                                </span>{' '}
                                : {usinfo?.login}
                            </h1>
                            <h1>
                                <span className='text-green-400'>
                                    Followers
                                </span>{' '}
                                : {usinfo?.followers}
                            </h1>
                            <h1>
                                <span className='text-green-400'>
                                    Following
                                </span>{' '}
                                : {usinfo?.following}
                            </h1>
                            <h1>
                                <span className='text-green-400'>
                                    Public Repositories
                                </span>{' '}
                                : {usinfo?.public_repos}
                            </h1>
                            <h1>
                                <span className='text-green-400'>Join</span> :{' '}
                                {new Date(
                                    usinfo?.created_at
                                ).toLocaleDateString()}
                            </h1>
                            <a
                                href={usinfo?.html_url}
                                target='_blank'
                                className='text-gray-200 bg-green-700 my-3 font-semibold py-1 px-4 tracking-wide rounded-md'
                            >
                                GO TA ACCOUNT
                            </a>
                        </div>
                    </div>
                ))}
            <div className='flex border-b pb-4 gap-6 mt-[10%] mb-6 justify-center md:text-xl'>
                <Tabs type={type} setType={setType} />
            </div>
        </div>
    );
};

export default UserInfo;
