// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {onclickplaybtn, score, iswon} = props
  const headingtext = iswon ? 'You Won' : 'You Lose'
  const labeltext = iswon ? 'Best Score' : 'Score'
  const imgUrl = iswon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="final">
      <div className="card-container">
        <div className="text-container">
          <h1 className="para-color">{headingtext}</h1>
          <p className="para">{labeltext}</p>
          <p className="score-color">{score}/12</p>
          <button type="button" className="btn" onClick={onclickplaybtn}>
            Play Again
          </button>
        </div>
        <div>
          <img src={imgUrl} className="img-size" alt="win or lose" />
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
