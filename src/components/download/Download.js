import React from 'react'
import * as BI from 'react-icons/bi'
import './Download.css'

function Download() {
    return (
        <section id='download' className='py-5'>
            <div className="container d-flex align-items-center flex-column gap-4">
                <div className="titleBox d-flex flex-column">
                    <div className="title d-flex align-items-center gap-1 justify-content-center">
                        <BI.BiDownload className='icon' size={28} />
                        <h5 className='m-0 p-0'>دانلود اپلیکیشن ما</h5>
                    </div>
                    <small className='under-title' >اپلیکیشن ما در تمامی فروشگاه ها موجود است</small>
                </div>

                <div>
                    <ul className="list-unstyled m-0 p-0 d-flex gap-2 gap-sm-4 align-items-center">
                        <li>
                            <a href='#' className='btn btn-outline-light d-flex align-items-center gap-1 border-2'>
                                <BI.BiLogoApple />
                                <small>اپل</small>
                            </a>
                        </li>

                        <li>
                            <a href='#' className='btn btn-outline-light d-flex align-items-center gap-1 border-2'>
                                <BI.BiLogoAndroid />
                                <small>آندروید</small>
                            </a>
                        </li>

                        <li>
                            <a href='#' className='btn btn-outline-light d-flex align-items-center gap-1 border-2'>
                                <BI.BiLogoWindows />
                                <small>ویندوز</small>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Download
