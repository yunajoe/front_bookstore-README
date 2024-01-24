import EmojiButton from "@/components/communityCard/emoji/emojiButton";
import RedHeartEmojiImg from "@/public/images/RedHeartEmoji.png";
import HappyEmojiImg from "@/public/images/HappyEmoji.png";
import ExitedEmojiImg from "@/public/images/ExitedEmoji.png";
import AngryEmojiImg from "@/public/images/AngryEmoji.png";
import CryEmojiImg from "@/public/images/CryEmoji.png";

function EmojiButtonContainer() {
  return (
    <div className="flex-center gap-8">
      <EmojiButton emoji={RedHeartEmojiImg} count={0}/>
      <EmojiButton emoji={HappyEmojiImg} count={0}/>
      <EmojiButton emoji={ExitedEmojiImg} count={0}/>
      <EmojiButton emoji={AngryEmojiImg} count={0}/>
      <EmojiButton emoji={CryEmojiImg} count={0}/>
    </div>
  )
}

export default EmojiButtonContainer;
