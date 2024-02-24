import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { usePostCommunityEmoji } from '@/api/community';
interface EmojiButtonProps {
  emoji: StaticImport;
  emojiType: string;
  count: number;
  status: boolean;
  communityId: number;
}

function EmojiButton({ emoji, emojiType, count, status, communityId }: EmojiButtonProps) {
  const [isCount, setIsCount] = useState(count);
  const [isClick, setIsClick] = useState(status);
  const queryClient = useQueryClient();

  const { mutate, isPending } = usePostCommunityEmoji(
    {
      type: emojiType,
      check: isClick,
      communityId: communityId,
    },
    {
      onMutate: () => {
        queryClient.cancelQueries();
      },
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: ['community', communityId],
        });
      },
    },
  );

  const handleCountToggle = () => {
    if (isPending) return;

    setIsClick(!isClick);
    setIsCount(isClick ? isCount - 1 : isCount + 1);

    if (isClick) {
      mutate();
    } else {
      mutate();
    }
  };

  return (
    <div
      className={`flex-center h-25 w-45 gap-6 rounded-[12px] border-[1px] border-solid px-10 py-5 hover:border-primary tablet:h-24 ${
        isClick ? 'border-primary' : 'border-[#dbdbdb]'
      }`}
      onClick={handleCountToggle}>
      <Image
        src={emoji}
        alt="이모지"
        className="w-12 mobile:h-12 tablet:h-12"
      />
      <p className="text-12 font-normal">{isCount}</p>
    </div>
  );
}

export default EmojiButton;
