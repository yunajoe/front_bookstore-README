import ScrollToTopButtonImg from '@/public/icons/ScrollToTopButton.svg';
import { headerVisibleAtom } from '@/store/state';
import { useAtom } from 'jotai';
import Image from 'next/image';

function ScrollToTopButton() {
  const [headerVisible] = useAtom(headerVisibleAtom);

  const handleClickScrollToTop = () => {
    if (!headerVisible) {
      window.scrollTo({top:0, behavior:'smooth'})
    }
  }

  return (
    headerVisible ? null :
    <div onClick={handleClickScrollToTop} className='cursor-pointer'>
      <Image
        className="fixed right-50 bottom-80"
        src={ScrollToTopButtonImg}
        alt="페이지 상단으로 이동"
      />
    </div> 
  );
}

export default ScrollToTopButton;
