import React, { useState } from 'react'
import * as BS from 'react-icons/bs'

function Question({ question }) {
    const [showAnswer, setShowAnswer] = useState(false)
    return (
        <div className='question col-10 col-sm-8 col-md-6 col-lg-5 d-flex flex-column gap-3'>
            <div className='quTitle d-flex align-items-center justify-content-between'>
                <h4 className='m-0 p-0'>{question.title}</h4>
                <button className='quBtn d-flex align-items-center justify-content-center' onClick={() => setShowAnswer(!showAnswer)}>
                    {
                        showAnswer && showAnswer ?
                            <BS.BsDash />
                            :
                            <BS.BsPlus />
                    }
                </button>
            </div>
            {
                showAnswer &&
                <div className="answer">
                    <p className='m-0 p-0'>{question.answer}</p>
                </div>
            }

        </div>
    )
}

export default Question
