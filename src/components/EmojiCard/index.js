// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachemojidetails, clickEmoji} = props
  const {id, emojiUrl, emojiName} = eachemojidetails
  const emojiimageclick = () => {
    clickEmoji(id)
  }
  return (
    <li className="eachemoji-list">
      <button type="button" onClick={emojiimageclick}>
        <img src={emojiUrl} className="emoji-size" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
