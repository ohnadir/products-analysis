import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='bg-neutral-700 p-4'>
            <nav className='flex gap-8 justify-center items-center'>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/reviews'>Reviews</CustomLink>
                <CustomLink to='/dashboard'>DashBoard</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;