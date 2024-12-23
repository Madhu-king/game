import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    isclickedEmojis: [],
    topscore: 0,
    isgame: true,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onclickplaybtn = () => {
    this.setState({isclickedEmojis: [], isgame: true})
  }

  displayresultCard = () => {
    const {isclickedEmojis} = this.state
    const {emojisList} = this.props
    const iswon = isclickedEmojis.length === emojisList.length

    return (
      <WinOrLoseCard
        onclickplaybtn={this.onclickplaybtn}
        score={isclickedEmojis.length}
        iswon={iswon}
      />
    )
  }

  getscore = currentscore => {
    const {topscore} = this.state
    let newscore = topscore
    if (currentscore > topscore) {
      newscore = currentscore
    }
    this.setState({topscore: newscore, isgame: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {isclickedEmojis} = this.state

    const isemojipresent = isclickedEmojis.includes(id)
    const clickedemojilength = isclickedEmojis.length

    if (isemojipresent) {
      this.getscore(clickedemojilength)
    } else {
      if (emojisList.length === clickedemojilength) {
        this.getscore(emojisList.length)
      }
      this.setState(prev => ({isclickedEmojis: [...prev.isclickedEmojis, id]}))
    }
  }

  renderemojiList = () => {
    const emojisList = this.shuffledEmojisList()

    return (
      <ul className="unorder-container">
        {emojisList.map(eachemoji => (
          <EmojiCard
            key={eachemoji.id}
            eachemojidetails={eachemoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isgame, isclickedEmojis, topscore} = this.state
    console.log(isclickedEmojis)
    return (
      <div className="bg-container">
        <NavBar
          topscore={topscore}
          currentscore={isclickedEmojis.length}
          isgame={isgame}
        />

        {isgame ? this.renderemojiList() : this.displayresultCard()}
      </div>
    )
  }
}

export default EmojiGame
