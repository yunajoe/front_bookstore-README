import { Inter } from 'next/font/google';
import { countAtom } from '@/store/count';
import { useAtom } from 'jotai';
import CommunityCard from '@/components/communityCard/communityCard';

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  const [count, setCount] = useAtom(countAtom);

  const handleAddCount = () => {
    setCount((prev) => prev + 1);
  };
  const handleMinusCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center  p-24 ${inter.className}`}>
      <button onClick={handleAddCount}>count++</button>
      <button onClick={handleMinusCount}>count--</button>
      {count}

      <CommunityCard userNickname='리드미' createAt='2024.01.25' bookTitle='푸바오, 언제나 사랑해' review='글자가 제대로 나오는지 확인해볼까요. 색깔이 잘 적용되는 중인지 모르겠어요'/>
    </main>
  );
}
