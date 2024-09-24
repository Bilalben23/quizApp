import React, { useState, useContext } from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Helpers/Context';


export default function App() {


  const [gameState, setGameState] = useState("menu")




  return (
    <div className='flex flex-col items-center justify-center p-2'>
      <h1 className='mb-5 text-3xl'>Quiz App</h1>

      <QuizContext.Provider value={{ gameState, setGameState }}>
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
