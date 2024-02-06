import RegisterButton from '@/components/button/register/registerButton';
import useFormControl from '@/hooks/useFormControl';
import Textarea from '@/components/input/textarea';
import ModalSearchInput from '@/components/input/modalSearchInput';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { bookCurrentPageAtom } from '@/store/state';
import PreviewBookInfoWrapper from './previewBookInfoWrapper';
import Pagination from '@/components/button/pagination';

function AddCommunityCardForm() {
  const { control, handleSubmit, isButtonActive, onSubmit } = useFormControl();
  const [search, setSearch] = useState('')
  const [bookCurrentPage, setBookCurrentPage] = useAtom(bookCurrentPageAtom);

  const handleSearch = (value:string) => {
    setSearch(value);
    setBookCurrentPage(1);
  }
  
  return (
    <form
      className="flex flex-col w-full gap-40 mobile:gap-20"
      onSubmit={handleSubmit(onSubmit)}>
      <ModalSearchInput placeholder="책 제목, 작가 등을 검색해주세요" onSearch={handleSearch}/>
      <div className='flex-center flex-col gap-22 w-full h-323'>
        <PreviewBookInfoWrapper />
        <Pagination totalCount={30}/>
      </div>
      <Textarea height="h-100" control={control} name='description'/>
      <RegisterButton type='submit' disabled={isButtonActive ? true : false}>글쓰기</RegisterButton>
    </form>
  );
}

export default AddCommunityCardForm;
