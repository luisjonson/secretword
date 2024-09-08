import { useState, useRef } from "react"
import "./Game.css"

export const Game = ({ 
  verifyLetter,
  pickedword,
  pickedCategory,
  letters,
  guessedLtLetters,
  wrongletters,
  guesses,
  score 
  }) => {
    const [letter,setLetter] = useState("")
    const letterInputRef = useRef(null)

    const handleSubmit = (e) =>{
      e.preventDefault();
      verifyLetter(letter)
      setLetter("")
      letterInputRef.current.focus();
    }
  return (
    <div className="game">
      <p className="ponts">
        <span>Pontuação:{score}</span>
      </p>
      <h1>Adivinhe a palavra </h1>
      <h3 className="tip">
        Dica sobre a palavra : <span>{pickedCategory}</span>
      </h3>
      <p>Vovê ainda tem {guesses} tentativas(s).</p>
      <div className="worContainer">

        {letters.map((letter, i) => (
          guessedLtLetters.includes(letter) ? (
            <span key={i} className="letter">{letter}</span>

          ) : (
            <span key={i} className="blankSquare"></span>
          )
        ))}
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinha uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name="letter"
            maxLength="1" 
            required 
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="divwrongLttersContainer">
        <p>Letras já ultilizadas:</p>
        {wrongletters.map((letter) => (
          <span key={i}>{letter}, </span>
        )) }
      </div>
    </div>
  )
}
