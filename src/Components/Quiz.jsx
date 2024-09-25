import { useState, useContext } from 'react'
import { questions } from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const { setScore, setGameState, optionChosen, setOptionChosen } = useContext(QuizContext);

    function nextQuestion() {
        if (questions[currentQuestion].answer === optionChosen) {
            setScore(prevScore => prevScore + 1)
            setCurrentQuestion(currentQuestion + 1)
            setOptionChosen("")
            dismissAllToasts()
        } else if (optionChosen !== "") {
            setCurrentQuestion(currentQuestion + 1)
            setOptionChosen("")
            dismissAllToasts()
        } else {
            notify()
        }
    }

    function finishQuiz() {

        if (questions[currentQuestion].answer === optionChosen) {
            setScore(prevScore => prevScore + 1)
            setCurrentQuestion(currentQuestion + 1)
            setOptionChosen("")
        } else if (optionChosen !== "") {
            setCurrentQuestion(currentQuestion + 1)
            setOptionChosen("")
        } else {
            notify()
        }
        setGameState("endScreen")
    }

    function notify() {
        dismissAllToasts()
        toast.warn("You must answer the question before proceeding!", {
            position: "top-center",
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            style: {
                fontSize: "0.9rem",
            },
        });
    }

    function dismissAllToasts() {
        toast.dismiss()
    }



    return (
        <div className='indicator'>
            <div className='w-[500px] h-[470px] rounded-box bg-[#141E46] shadow-lg p-3 '>
                <h1 className='text-lg text-center capitalize'>{questions[currentQuestion].prompt}</h1>
                <div className='flex flex-col my-5 space-y-2' >
                    <button onClick={() => setOptionChosen("optionA")} type="button" className='btn btn-outline btn-neutral focus:btn-secondary'>{questions[currentQuestion].optionA}</button>
                    <button onClick={() => setOptionChosen("optionB")} type="button" className='btn btn-outline btn-neutral focus:btn-secondary'>{questions[currentQuestion].optionB}</button>
                    <button onClick={() => setOptionChosen("optionC")} type="button" className='btn btn-outline btn-neutral focus:btn-secondary'>{questions[currentQuestion].optionC}</button>
                    <button onClick={() => setOptionChosen("optionD")} type="button" className='btn btn-outline btn-neutral focus:btn-secondary'>{questions[currentQuestion].optionD}</button>
                </div>
                <div className='indicator-item'>
                    <div className='shadow-lg radial-progress progress-accent text-info bg-base-300' role='progressbar' style={{
                        "--value": (currentQuestion + 1) * 10, "--size": "3rem", "--thickness": "0.3rem"
                    }}>
                        <span className='text-xs font-semibold'> {questions.length}/{currentQuestion + 1}</span>
                    </div>
                </div>
                <div className='indicator-bottom indicator-item'>
                    {
                        currentQuestion !== questions.length - 1 ? <button type="button" className="btn btn-info btn-sm" onClick={nextQuestion}>Next Question</button> : <button type="button" className="text-white btn btn-success btn-sm" onClick={finishQuiz}>Finish Quiz</button>
                    }
                </div>
            </div>
            <ToastContainer />

        </div>
    )
}
