import React, { useEffect, useState } from 'react'
import './Header.css'
import * as S1 from 'react-icons/sl'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Header() {
    AOS.init({
        duration:600,
        delay:2000
    });
    return (
        <section id='header' className='py-3'>
            <div className="container d-flex align-items-center flex-wrap">
                <div className="row col-12 d-flex flex-column-reverse flex-md-row gap-3 gap-md-0">
                    <div className="right col-md-4 text-white d-flex flex-column gap-3 justify-content-center" data-aos="fade-right">
                        <div className="d-flex flex-column align-items-center align-items-md-start">
                            <h4>پیشرو در سطح جهانی</h4>
                            <h5>امنیت در همه پلتفرم ها</h5>
                            <h5>سیستم پیام رسانی</h5>
                        </div>
                        <div className="d-flex flex-column align-items-center align-items-md-start">
                            <div className="hr hr-75 my-1 "></div>
                        </div>
                        <small className='d-block w-100'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</small>
                        <div className="button-box d-flex align-items-center justify-content-center justify-content-md-start gap-2 mt-3">
                            <button className='btn btn-outline-light'>بیا شروع کنیم</button>
                            <button className='btn btn-orange'>چجوری کار می کنیم</button>
                        </div>
                    </div>
                    <div className="left col-md-8 d-flex justify-content-center h-25" data-aos="fade-left">
                        <img src="./imgs/header.png" alt="" />
                    </div>
                </div>

                <div className="w-100 d-flex justify-content-center mt-5">
                    <a href='#features' className="mouseIcon text-white d-flex justify-content-center align-items-center" role='button'>
                        <S1.SlMouse size={22} className='m-icon' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Header
