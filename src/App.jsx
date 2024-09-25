import React, { useState, useContext } from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Helpers/Context';


export default function App() {


  const [gameState, setGameState] = useState("menu")
  const [score, setScore] = useState(0)
  const [optionChosen, setOptionChosen] = useState("");



  return (
    <div className='container grid min-h-screen place-content-center'>
      <div className='absolute px-6 py-2 -rotate-45 opacity-45 -left-5 top-10'>
        <h1 className='mb-5 text-3xl'>Quiz App</h1>
      </div>
      <div className='absolute px-6 py-2 rotate-45 opacity-45 right-5 top-10'>
        <h1 className='mb-5 text-3xl'>Quiz App</h1>
      </div>
      <QuizContext.Provider value={{ gameState, setGameState, optionChosen, setOptionChosen, score, setScore }}>
        {
          gameState === "menu" && <MainMenu />
        }
        {
          gameState === "quiz" && <Quiz />
        }
        {
          gameState === "endScreen" && <EndScreen />
        }
      </QuizContext.Provider>

    </div>
  )
}
