import React from 'react'
import './Header.css'
import * as S1 from 'react-icons/sl'
function Header() {
    return (
        <section className='header py-3'>
            <div className="container d-flex align-items-center">
                <div className="row col-12 d-flex flex-column-reverse flex-md-row gap-3 gap-md-0">
                    <div className="right col-md-4 text-white d-flex flex-column gap-3 justify-content-center">
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
                    <div className="left col-md-8 d-flex justify-content-center h-25">
                        <img src="./imgs/header.png" alt="" srcset=""  />
                    </div>
                </div>

                <div className="mouseIcon col-12 text-white position-absolute d-flex justify-content-center align-items-center" role='button'>
                    <S1.SlMouse size={22} className='m-icon' />
                </div>
            </div>
        </section>
    )
}

export default Header
