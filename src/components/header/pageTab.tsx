import Link from 'next/link';

interface PageTabProps {
  origin: string;
  originHref: string;
  add: string;
  addHref: string;
}

const linkStyle = 'font-bold text-20 text-gray-2'

//본문 container내에서 이동할 때 사용
function PageTab({ origin, originHref, add, addHref }: PageTabProps) {
  return (
    <div className="flex items-center justify-between w-169 h-27 mb-40">
      <Link href={originHref} className={linkStyle}>{origin}</Link>
      <div className="inline-block border-r w-1 h-14 mt-4 border-gray-1" />
      <Link href={addHref} className={linkStyle}>{add}</Link>
    </div>
  );
}

export default PageTab;
