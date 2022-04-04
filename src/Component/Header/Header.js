import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-slate-700'>

            <div className=''>
                <div  className=' md:hidden p-4  text-right'>
                    <button onClick={()=> setOpen(!open)} className=' text-white '>
                            { open ? <FontAwesomeIcon icon={faX}/>: <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}
                    </button>
                </div>
                <nav className={`md:flex p-4 text-center bg-slate-700 w-full gap-8 justify-center absolute md:static duration-500 ease-in ${open ? 'top-10': 'top-[-130px]'}`}>
                    <CustomLink to='/home'>Home</CustomLink>
                    <CustomLink to='/reviews'>Reviews</CustomLink>
                    <CustomLink to='/dashboard'>DashBoard</CustomLink>
                    <CustomLink to='/blogs'>Blogs</CustomLink>
                </nav>
                
            </div>
            
        </div>
    );
};

export default Header;