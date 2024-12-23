// Write your code here.
import './index.css'

const NavBar = props => {
  const {topscore, currentscore, isgame} = props
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="logo-size"
          alt="emoji logo"
        />
        <h1 className="para-logo">Emoji Game</h1>
      </div>

      {isgame && (
        <div className="score-container">
          <p className="para">Score:{currentscore}</p>
          <p className="para">Top Score:{topscore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
