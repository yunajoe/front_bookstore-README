import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import CustomGenreButton from '@/components/button/genre/customGenreButton';
import Link from 'next/link';
import RecommendationContent from './recommendationContent';

interface CustomSectionProps {
  isLoggedIn: boolean;
  isGenreSelected: boolean;
}

function CustomSection({ isLoggedIn, isGenreSelected }: CustomSectionProps) {
  if (!isLoggedIn) {
    return (
      <div className="flex-col flex-center h-482 bg-gray-1 w-full">
        <RecommendationContent />
        <Link
          className="flex-center w-256 h-50 text-green text-14 bg-white border border-green
            rounded-[5px]"
          href="/signin">
          로그인하고 맞춤 도서 추천받기
        </Link>
      </div>
    );
  }

  if (isLoggedIn && !isGenreSelected) {
    return (
      <div className="flex-col flex-center h-482 bg-gray-1 w-full">
        <RecommendationContent />
        <Link
          className="flex-center w-256 h-50 text-green text-14 bg-white border border-green
            rounded-[5px]"
          href="/mypage">
          선호 장르 선택하러 가기
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-center w-full h-500 gap-x-76 relative bg-gray-1">
      <div className="absolute top-0 right-0 mt-60 mr-60">
        <div className="flex text-green text-16 mb-20">
          <Link href="/custom">더보기</Link>
        </div>
      </div>

      <div className="flex-col flex-center w-347">
        <div className="font-bold text-24 mb-8">
          <span className="text-green">맞춤도서</span>를 가져왔어요
        </div>
        <div className="mb-30 text-gray-4">
          선호 장르 분석을 통해 도서를 추천해요
        </div>
        <div className="flex-center flex-wrap w-260 gap-10">
          <CustomGenreButton title={'소설'} selected={false} />
          <CustomGenreButton title={'자기계발'} selected={false} />
          <CustomGenreButton title={'취미/실용/스포츠'} selected={false} />
        </div>
      </div>

      <div className="flex gap-x-20">
        <PreviewBookInfo
          size={'sm'}
          title="소설1"
          authorList={['작가1', '작가2']}
        />
        <PreviewBookInfo
          size={'sm'}
          title="소설1"
          authorList={['작가1', '작가2']}
        />
        <PreviewBookInfo
          size={'sm'}
          title="소설1"
          authorList={['작가1', '작가2']}
        />
        <PreviewBookInfo
          size={'sm'}
          title="소설1"
          authorList={['작가1', '작가2']}
        />
      </div>
    </div>
  );
}

export default CustomSection;
