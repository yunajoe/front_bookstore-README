import RegisterButton from "@/components/button/register/registerButton";
import ModalLayout from "@/components/modal/modalLayout";
import SearchIcon from '@/public/icons/SearchIcon.svg';
import Image from "next/image";

interface AddCommunityCardProps {
  onClick: () => void;
}

function AddCommunityCard({ onClick } : AddCommunityCardProps) {
  return (
    <ModalLayout onClick={onClick}>
      <div className="relative flex-center flex-col w-[688px] h-[851px] bg-white px-40 pt-60 pb-40 gap-40">
        <p className="text-20 text-b-b">글쓰기</p>
        <div className="flex flex-col w-full">
          <span className="text-16 text-b-b">도서</span>
          <div  className="flex items-center justify-between w-full">
            <input placeholder="책 제목, 작가 등을 검색해주세요" className="h-48 flex grow"></input>
            <Image src={SearchIcon} alt="검색" width={32} height={32} />
          </div>
        </div>
        <div className="w-608 h-283">캐러샐</div>
        <div className="flex flex-col w-full">
          <span>
            내용
          </span>
          <input type="textarea" placeholder="내용을 작성해주세요" className="w-full h-101"></input>
        </div>
        <RegisterButton>글쓰기</RegisterButton>
      </div>
    </ModalLayout>
  )
}

export default AddCommunityCard