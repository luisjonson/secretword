import "./Game.css"

export const Game = ({ verifyLetter }) => {
  return (
    <div className="game">
      <p className="ponts">
        <span>Pontuação:000</span>
      </p>
      <h1>Adivinhe a palavra </h1>
      <h3 className="tip">
        Dica sobre a palavra : <span>Dica...</span>
      </h3>
      <div className="worContainer">
        <span className="letter">
          A
        </span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinha uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className="divwrongLttersContainer">
        <p>Letras já ultilizadas:</p>
        <span>a,</span>
        <span>b,</span>
      </div>
    </div>
  )
}
