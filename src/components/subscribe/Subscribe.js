import React from 'react'
import './Subscribe.css'
import * as IO5 from 'react-icons/io5'

function Subscribe() {
    return (
        <section id='subscribe' className='py-5'>
            <div className="container d-flex flex-column gap-4 align-items-center justify-content-center">
                <div className="titleBox d-flex flex-column">
                    <div className="title d-flex align-items-center gap-1 justify-content-center">
                        <IO5.IoGolf className='icon' size={24} />
                        <h5 className='m-0 p-0'>حالا مشترک شوید</h5>
                    </div>
                    <small className='under-title' >همین الان از طریق فرم زیر به جمع بزرگ ما بپیوندید.</small>
                </div>

                <div className="d-flex flex-column gap-2 align-items-center">
                    <form action="" className='d-flex mt-3 flex-column flex-sm-row gap-2 gap-sm-0'>
                        <input type="text" className='subInput' placeholder='ایمیل خود را وارد کنید...' />
                        <button className='subBtn'>مشترک شدن</button>
                    </form>

                    <div className='social'>
                        <ul className='list-unstyled d-flex align-items-center gap-3 mt-5'>
                            <li>
                                <a href='#' className="social-icon d-flex align-items-center justify-content-center" role='button'>
                                    <IO5.IoLogoTwitter />
                                </a>
                            </li>
                            <li>
                                <a href='#' className="social-icon d-flex align-items-center justify-content-center" role='button'>
                                    <IO5.IoLogoFacebook />
                                </a>
                            </li>
                            <li>
                                <a href='#' className="social-icon d-flex align-items-center justify-content-center" role='button'>
                                    <IO5.IoLogoInstagram />
                                </a>
                            </li>
                            <li>
                                <a href='#' className="social-icon d-flex align-items-center justify-content-center" role='button'>
                                    <IO5.IoLogoLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe