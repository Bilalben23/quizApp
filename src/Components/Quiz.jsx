import React, { useState } from 'react'
import { questions } from '../Helpers/QuestionBank'

export default function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0)

    return (
        <div className='w-[500px] h-[470px] rounded-box bg-[#141E46] shadow-lg p-3'>
            <h1 className='text-lg text-center capitalize'>{questions[currentQuestion].prompt}</h1>
            <div className='flex flex-col my-5 space-y-2'>
                <button type="button" className='btn btn-outline btn-neutral'>{questions[currentQuestion].optionA}</button>
                <button type="button" className='btn btn-outline btn-neutral'>{questions[currentQuestion].optionB}</button>
                <button type="button" className='btn btn-outline btn-neutral'>{questions[currentQuestion].optionC}</button>
                <button type="button" className='btn btn-outline btn-neutral'>{questions[currentQuestion].optionD}</button>
            </div>
            <button type="button" className="btn btn-info btn-sm">Next Question</button>

        </div>
    )
}
