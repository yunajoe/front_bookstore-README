import RegisterButton from '@/components/button/register/registerButton';
import useFormControl from '@/hooks/useFormControl';
import ModalSearchInput from '@/components/input/modalSearchInput';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { CurrentPageStateAtom } from '@/store/state';
import PreviewBookInfoPagination from '@/components/modal/addCommunityCard/previewBookInfoPagination';
import Input from '@/components/input/input';
import { usePostCommunity } from '@/api/community';
import { useSession } from 'next-auth/react';
import { PostCommunityData } from '@/types/api/community';
import { OnClickProps } from '@/types/onClickType';


function AddCommunityCardForm({onClick} : OnClickProps) {
  const {data:session} = useSession();
  const { control, handleSubmit, isButtonActive, onSubmit } = useFormControl<PostCommunityData>({Fn:usePostCommunity, bookId:35, option:session?.memberId, onClick: onClick});
  const [search, setSearch] = useState('');
  const [CurrentPage, setCurrentPage] = useAtom(CurrentPageStateAtom);

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  return (
    <form
      className="flex w-full flex-col gap-40 mobile:gap-20"
      onSubmit={handleSubmit(onSubmit)}>
      <ModalSearchInput
        placeholder="책 제목, 작가 등을 검색해주세요"
        onSearch={handleSearch}
      />
      <div className="flex-center h-323 w-full flex-col gap-22">
        {search && <PreviewBookInfoPagination search={search}/>}
      </div>
      <Input type='text' title='내용' height="h-100" control={control} name="content" />
      <RegisterButton type="submit" disabled={isButtonActive ? true : false} >
        글쓰기
      </RegisterButton>
    </form>
  );
}

export default AddCommunityCardForm;
