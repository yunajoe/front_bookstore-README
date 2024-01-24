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
      className={`gap-40 flex min-h-screen flex-col items-center  p-24 ${inter.className}`}>
      <button onClick={handleAddCount}>count++</button>
      <button onClick={handleMinusCount}>count--</button>
      {count}

      <CommunityCard profileImg='' userNickname='리드미' createAt='2024.01.25' bookCover='' bookTitle='책이름' review='삶을 포기한 순간 새로운 목표가 생겼다 삶의 목표와 단기목표가 사람의 인생에 미치는 영향이란 감히 한계를 매길수도 없는 듯 하다. 몇글자를 최대로 해야 안넘을까' />
    </main>
  );
}
