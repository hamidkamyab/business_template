import React from 'react'
import './Faq.css'
import questions from './data'
import Question from './Question'
import * as BS from 'react-icons/bs'


function Faq() {
    return (
        <section id='faq' className='py-5'>
            <div className="container d-flex align-items-center flex-column gap-4">
                <div className="titleBox d-flex flex-column">
                    <div className="title d-flex align-items-center gap-1 justify-content-center">
                        <BS.BsChatRightText className='icon' size={20} />
                        <h5 className='m-0 p-0'>سوالات متداول</h5>
                    </div>
                    <small className='under-title' >گزیده ای از سوالات شما از تیم ما</small>
                </div>
                <div className="questions d-flex flex-column gap-3 col-12 align-items-center">
                    {
                        questions && questions.map((question, index) => (
                            <Question key={index} question={question} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Faq