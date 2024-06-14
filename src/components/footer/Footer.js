import React, { useState } from 'react'
import './Footer.css'
import * as BS from 'react-icons/bs'
import * as IO5 from 'react-icons/io5'
import * as MD from 'react-icons/md'
function Footer() {
    const [open, setOpen] = useState(false)
    return (
        <section id="footer" className='py-5 position-relative'>
            <div className="footerBox container d-flex flex-wrap align-items-start pt-3">
                <div className="col-12 col-md-6 col-lg-4 py-4 d-flex flex-column justify-content-start about-us position-relative">
                    <h6 className='text-white p-0 mb-2'>اپلیکیشن پیام رسان الکی :)</h6>
                    <p className={`m-0 px-0 text-white w-75 ${open ? 'open' : ''}`}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>

                    <button className={`w-75 btnLoadAbout position-absolute bottom-0 ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                        {
                            open ?
                                <span>بسـتن</span>
                                :
                                <span>مشاهده بیشتر</span>
                        }
                        <IO5.IoChevronBackSharp size={14} />
                    </button>
                </div>

                <div className="col-12 col-md-6 col-lg-4 py-4">
                    <h6 className='text-white ps-3'>منو سایت</h6>
                    <ul className="footer-menu footer-list d-flex flex-column gap-1">
                        <li className='footer-item'>
                            <BS.BsDot size={26} className='dot-icon' />
                            <a href="" className='d-block'>
                                پشتیبانی
                            </a>
                        </li>
                        <li className='footer-item'>
                            <BS.BsDot size={26} className='dot-icon' />
                            <a href="" className='d-block'>
                                تماس با ما
                            </a>
                        </li>
                        <li className='footer-item'>
                            <BS.BsDot size={26} className='dot-icon' />
                            <a href="" className='d-block'>
                                درباره ما
                            </a>
                        </li>
                        <li className='footer-item'>
                            <BS.BsDot size={26} className='dot-icon' />
                            <a href="" className='d-block'>
                                آموزش
                            </a>
                        </li>
                        <li className='footer-item'>
                            <BS.BsDot size={26} className='dot-icon' />
                            <a href="" className='d-block'>
                                قوانین و مقررات
                            </a>
                        </li>

                    </ul>
                </div>

                <div className="col-12 col-md-6 col-lg-4 py-4">
                    <h6 className='text-white ps-2'>راه های ارتباطی</h6>
                    <ul className="footer-menu footer-list d-flex flex-column gap-0 contact">
                        <li className='footer-item'>
                            <MD.MdLocationOn size={16} />
                            <span className='item-title'>
                                آدرس:
                            </span>
                            <span className='item-content'>
                                تهران، خیابان تست، پلاک 7، طبقه 2، واحد 4
                            </span>
                        </li>
                        <li className='footer-item'>
                            <MD.MdPhone size={16} />
                            <span className='item-title'>
                                تلفن:
                            </span>
                            <span className='item-content'>
                                021-60608080
                            </span>
                        </li>
                        <li className='footer-item'>
                            <MD.MdFax size={16} />
                            <span className='item-title'>
                                فکس:
                            </span>
                            <span className='item-content'>
                                021-60608080
                            </span>
                        </li>
                        <li className='footer-item'>
                            <IO5.IoEarth size={16} />
                            <span className='item-title'>
                                وبسایت:
                            </span>
                            <a href='#' target='_blank' className='item-content'>
                                www.test.com
                            </a>
                        </li>
                        <li className='footer-item'>
                            <IO5.IoMail size={16} />
                            <span className='item-title'>
                                ایمیل:
                            </span>
                            <a href='mailto:test@yahoo.com' target='_blank' className='item-content'>
                                test@info.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-12 text-center py-3 text-white position-absolute bottom-0">
                <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-info">حمید کامیاب</a></small>
            </div>

            <div className="footer-logo position-absolute">
                <img src="./imgs/footer-logo.png" alt="" width={'100%'} />
            </div>
        </section>
    )
}

export default Footer
