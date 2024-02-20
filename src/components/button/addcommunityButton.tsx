import AddCommunityButtonImg from '@/public/icons/AddCommunityButton.svg';
import { pointVisibleAtom } from '@/store/state';
import { useAtom } from 'jotai';
import Image from 'next/image';

function AddCommunityButton() {

  const handleAddCommunityButtonClick = () => {
    
  };

  return (
    <div onClick={handleAddCommunityButtonClick} className="pc:hidden tablet:hidden mobile:fixed mobile:bottom-60 mobile:right-15 cursor-pointer">
      <Image
        className="fixed bottom-80 right-20 mobile:bottom-124 mobile:right-20"
        src={AddCommunityButtonImg}
        alt="글쓰기 모달로 이동"
      />
    </div>
  );
}

export default AddCommunityButton;
