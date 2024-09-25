import { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'

export default function MainMenu() {

    const { setGameState } = useContext(QuizContext)


    return (
        <div className='w-[500px] h-[470px] glass rounded-box bg-[#141E46] shadow-lg flex flex-col items-center justify-center skeleton'>
            <button
                type="button"
                className='btn btn-secondary'
                onClick={() => setGameState("quiz")}>Start Quiz</button>
        </div >
    )
}
