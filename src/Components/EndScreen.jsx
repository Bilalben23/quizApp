import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'
import { questions } from '../Helpers/QuestionBank';
import { } from "react-icons/fa";
import { performanceEmoji } from '../Helpers/EmojisPerformance';


export default function EndScreen() {
    const { score, setGameState } = useContext(QuizContext);



    function getAppropriatePerformanceEmoji(score, maxScore) {
        const scoreFifth = maxScore / 5;  // Divide the total possible score into 5 equal parts
        // 20/5 = 4
        if (score > scoreFifth * 4) {
            return performanceEmoji.excellent;  // Top 20% of the score
        } else if (score > scoreFifth * 3) {
            return performanceEmoji.good;       // 60%-80% of the score
        } else if (score > scoreFifth * 2) {
            return performanceEmoji.average;    // 40%-60% of the score
        } else if (score > scoreFifth) {
            return performanceEmoji.bad;        // 20%-40% of the score
        } else {
            return performanceEmoji.terrible;   // Below 20% of the score
        }
    }

    const appropriateEmoji = getAppropriatePerformanceEmoji(score, questions.length)



    return (
        <div className='w-[500px] h-[500px] rounded-box shadow-lg bg-blend-multiply indicator  card image-full card-compact '>
            <figure>
                <img src="https://cdn.dribbble.com/users/8666/screenshots/2319059/partypop_02.gif" alt="congratulations" />
            </figure>
            <div className="card-body">
                <h2 className="justify-center text-3xl text-center card-title">Quiz Results</h2>
                <div className='flex flex-col mt-2'>
                    <p className='mb-3 text-5xl text-center'>{appropriateEmoji.emoji}</p>
                    <p className='max-w-[85%] text-center mx-auto'>{appropriateEmoji.text}</p>
                    <div className='mx-auto mt-8 shadow-lg radial-progress text-info bg-base-300' role='progressbar' style={{
                        "--value": (score * 100 / questions.length)
                    }}>
                        <span className='font-semibold'>{questions.length} / {score}</span>
                    </div>
                </div>
                <div className="card-actions indicator-item indicator-bottom">
                    <button type="button" onClick={() => setGameState("menu")} className='btn btn-sm btn-accent'>
                        Play again
                    </button>
                </div>
            </div>

        </div >
    )
}
