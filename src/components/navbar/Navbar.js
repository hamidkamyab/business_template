import React, { useState } from 'react';
import * as SI from 'react-icons/si'
import * as FA6 from 'react-icons/fa6'
import './Navbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMobileMenu =()=>{
        setShowMenu(()=>!showMenu)
    }

    return (
        <section className='navbar container-md d-flex flex-column-reverse flex-md-row align-items-center justify-content-between pt-0 pt-md-4 gap-3 gap-md-0'>
            <nav className={`mobile ${showMenu?'show':''} col-12  col-md-8 col-lg-6 d-flex flex-md-row flex-column align-items-center gap-3 px-2 py-3 py-md-0`}>
                <span><a href="#" className='d-block p-2 rounded-2'>آموزش بیشتر</a></span>
                <ul className='list-unstyled d-flex flex-md-row flex-column align-items-center gap-3 gap-md-2 p-0 m-0'>
                    <li><a href="#" className='p-2 p-md-0 px-md-2'>خانه</a></li>
                    <li><a href="#" className='p-2 p-md-0 px-md-2'>امکانات</a></li>
                    <li><a href="#" className='p-2 p-md-0 px-md-2'>دانلود</a></li>
                    <li><a href="#" className='p-2 p-md-0 px-md-2'>مشترک شوید</a></li>
                </ul>
            </nav>

            <div className="left col-12 col-md-4 col-lg-6 px-2 d-flex justify-content-center justify-content-md-end position-relative py-2 pt-md-0">
                <div className="logo d-flex align-items-center flex-row-reverse">
                    <span>Social</span>
                    <strong>X</strong>
                    <SI.SiAnaconda />
                </div>

                <button className='btn d-block d-md-none bg-transparent p-0 position-absolute start-0 ms-3' onClick={handleMobileMenu} >
                    {
                        showMenu?
                        <FA6.FaX size={20} />
                        :
                        <FA6.FaBars size={20} />
                    }
                </button>
            </div>
        </section>
    );
}

export default Navbar;
