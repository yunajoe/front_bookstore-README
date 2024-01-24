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

      <CommunityCard profileImg='' userNickname='리드미' createAt='2024.01.25' bookCover='' bookTitle='책이름' review='책 너무 재밌는것 같아 추천해용~~' />
    </main>
  );
}
