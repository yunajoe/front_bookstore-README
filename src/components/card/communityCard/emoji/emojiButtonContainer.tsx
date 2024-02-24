import EmojiButton from '@/components/card/communityCard/emoji/emojiButton';
import { EMOJI_ICON } from '@/constants/communityEmoji';
import { CommunityEmojiInfo } from '@/types/api/community';

type EmojiType = keyof typeof EMOJI_ICON;

function EmojiButtonContainer({ emojiId, emojis }: CommunityEmojiInfo) {
  return (
    <div className="flex items-center justify-start gap-8 px-20">
      {emojis.map((emoji, index) => (
        <EmojiButton
          key={index}
          emoji={EMOJI_ICON[emoji.emojiType as EmojiType]}
          count={emoji.emojiNum}
          status={emoji.emojiCheck}
        />
      ))}
    </div>
  );
}

export default EmojiButtonContainer;
