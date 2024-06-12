import React from 'react'
import * as IO5 from 'react-icons/io5'
import * as BS from 'react-icons/bs'
import * as FA from 'react-icons/fa'
import * as SI from 'react-icons/si'
import * as MD from 'react-icons/md'
import './Features.css'

function Features() {
  return (
    <section id='features' className='py-5'>

        <div className="container d-flex flex-column gap-2 align-items-center justify-content-center">
            <div className="title d-flex align-items-center gap-1">
                <IO5.IoDiamond className='icon' size={24} />
                <h5 className='m-0 p-0'>ویژگی های اصلی</h5>
            </div>
            <small className='under-title' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</small>

            <div className='features-list col-12 d-flex'>
                <div className="col-6 d-flex justify-content-end align-items-center">
                  <img src="./imgs/phone-features.png" alt="" className='mt-4' />
                </div>
                <div className="col-6 pt-4">
                    <ul className='p-0 m-0 list-unstyled d-flex flex-column gap-2 w-75'>
                        <li className=' d-flex align-items-start gap-3'>
                            <div className="iconBox position-relative d-flex justify-content-center align-items-center">
                                <BS.BsHexagon size={32} className='position-absolute' />
                                <BS.BsPersonStanding />
                            </div>
                            <div className="textBox">
                                <h6 className='m-0 p-0'>برای شما طراحی شده است.</h6>
                                <p className='text-muted mt-1'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>
                        </li>
                        <li className=' d-flex align-items-start gap-3'>
                            <div className="iconBox position-relative d-flex justify-content-center align-items-center">
                                <BS.BsHexagon size={32} className='position-absolute' />
                                <SI.SiDatabricks />
                            </div>
                            <div className="textBox">
                                <h6 className='m-0 p-0'>برای شما طراحی شده است.</h6>
                                <p className='text-muted mt-1'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>
                        </li>
                        <li className=' d-flex align-items-start gap-3'>
                            <div className="iconBox position-relative d-flex justify-content-center align-items-center">
                                <BS.BsHexagon size={32} className='position-absolute' />
                                <MD.MdConnectWithoutContact />
                            </div>
                            <div className="textBox">
                                <h6 className='m-0 p-0'>برای شما طراحی شده است.</h6>
                                <p className='text-muted mt-1'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>
                        </li>
                        <li className=' d-flex align-items-start gap-3'>
                            <div className="iconBox position-relative d-flex justify-content-center align-items-center">
                                <BS.BsHexagon size={32} className='position-absolute' />
                                <FA.FaGg />
                            </div>
                            <div className="textBox">
                                <h6 className='m-0 p-0'>برای شما طراحی شده است.</h6>
                                <p className='text-muted mt-1'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Features
