import ScrollToTopButtonImg from '@/public/icons/ScrollToTopButton.svg';
import Image from 'next/image';

function ScrollToTopButton() {
  return (
    <div>
      <Image
        className="fixed right-50 bottom-80"
        src={ScrollToTopButtonImg}
        alt="페이지 상단으로 이동"
      />
    </div>
  );
}

export default ScrollToTopButton;
