import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
interface EmojiButtonProps {
  emoji: StaticImport;
  count: number;
}

function EmojiButton({ emoji, count }: EmojiButtonProps) {
  return (
    <div
      className="flex-center gap-6 border-solid border-[1px] border-[#dbdbdb] rounded-[12px]
        px-10 py-5 w-45 h-25 hover:border-green">
      <Image src={emoji} alt="이모지 w-12 h-13" />
      <p className="text-12 font-normal">{count}</p>
    </div>
  );
}

export default EmojiButton;
