import React from 'react';
import Facebook from '../../images/icons8-facebook-f.svg';
import Github from '../../images/icons8-github.svg';
import Twitter from '../../images/icons8-twitter.svg';
import Linkedin from '../../images/icons8-linkedin-2.svg';

const Footer = () => {
    return (
        <div className='bg-slate-700'>
            <div className='p-16 text-center text-white'>
                <h1 className='text-3xl mb-5'>EyeLiner Review Zone</h1>
                <p className='text-xl'>Long lasting, shocking color intensity infused with Kohl Britania. High intensity color for an instant impact that is ultra smooth.</p>
                <div className='icon  flex justify-center items-center gap-8 mt-6'>
                    <img className='text-white' src={Facebook} alt="" />
                    <img src={Github} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Linkedin} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;