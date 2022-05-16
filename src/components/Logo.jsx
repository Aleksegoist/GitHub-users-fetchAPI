import React from 'react';
import LogoGitHub from '../img/logo.png';

const Logo = () => {
    return (
        <div className='flex pb-2 justify-center items-center border-b border-gray-500'>
            <img className='w-24 rounded-full ' src={LogoGitHub} alt='logo' />
            <h1 className='text-3xl px-2 first-letter:text-5xl'>
                GitHub Users
            </h1>
        </div>
    );
};

export default Logo;
