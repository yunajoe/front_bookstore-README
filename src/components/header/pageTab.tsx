import Link from 'next/link';

interface PageTabProps {
  basic: string;
  basicHref: string;
  add: string;
  addHref: string;
}

//본문 container내에서 이동할 때 사용
function PageTab({ basic, basicHref, add, addHref }: PageTabProps) {
  return (
    <div className="flex items-center justify-between w-169 h-27">
      <Link href={basicHref}>{basic}</Link>
      <div className="inline-block border-r w-1 h-14 mt-4 border-gray-1" />
      <Link href={addHref}>{add}</Link>
    </div>
  );
}

export default PageTab;
