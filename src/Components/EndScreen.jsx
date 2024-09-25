import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Context';
import { questions } from '../Helpers/QuestionBank';
import { performanceEmoji } from '../Helpers/EmojisPerformance';

export default function EndScreen() {
    const { setScore, score, setGameState, setOptionChosen } = useContext(QuizContext);

    // Function to get the appropriate performance emoji based on score
    function getPerformanceEmoji(score, maxScore) {
        const scoreThresholds = maxScore / 5;

        if (score > scoreThresholds * 4) {
            return performanceEmoji.excellent;  // Top 20% of the score
        } else if (score > scoreThresholds * 3) {
            return performanceEmoji.good;       // 60%-80% of the score
        } else if (score > scoreThresholds * 2) {
            return performanceEmoji.average;    // 40%-60% of the score
        } else if (score > scoreThresholds) {
            return performanceEmoji.bad;        // 20%-40% of the score
        } else {
            return performanceEmoji.terrible;   // Below 20% of the score
        }
    }

    function restartQuiz() {
        setScore(0)
        setOptionChosen("");
        setGameState("menu")

    }

    const appropriateEmoji = getPerformanceEmoji(score, questions.length);

    return (
        <div className="w-[500px] h-[500px] rounded-box shadow-lg bg-blend-multiply indicator card image-full card-compact">
            <figure>
                <img
                    src="https://cdn.dribbble.com/users/8666/screenshots/2319059/partypop_02.gif"
                    alt="Celebration of quiz results"
                    className="rounded-t-box"
                />
            </figure>
            <div className="card-body">
                <h2 className="mx-auto text-3xl text-center card-title">Quiz Results</h2>
                <div className="flex flex-col mt-2">
                    <p className="mb-3 text-5xl text-center">{appropriateEmoji.emoji}</p>
                    <p className="max-w-[85%] text-center mx-auto">{appropriateEmoji.text}</p>
                    <div
                        className="mx-auto mt-8 shadow-lg radial-progress text-info bg-base-300"
                        role="progressbar"
                        style={{ "--value": (score * 100) / questions.length }}
                    >
                        <span className="font-semibold">{score}/{questions.length}</span>
                    </div>
                </div>
                <div className="card-actions indicator-item indicator-bottom">
                    <button
                        type="button"
                        onClick={restartQuiz}
                        className="btn btn-sm btn-accent"
                    >
                        Restart Quiz
                    </button>
                </div>
            </div>
        </div>
    );
}
