
//css
import './App.css';

//React
import { useCallback, useEffect, useState } from "react";

//data
import { wordsList } from "./data/wordsList";

//Components
import { StartScreen } from './components/StartScreen';
import { Game } from './components/Game';
import { GameOver } from "./components/GameOver"

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "and" },
]


function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  //starts the secret word game
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  //restarts the game 
  const retry = () =>{
    setGameStage(stages[0].name)
  }

  return (
    < div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'and' && <GameOver retry={retry} />}
    </div>
  )
}

export default App
