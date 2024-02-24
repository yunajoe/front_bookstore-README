import RegisterButton from '@/components/button/register/registerButton';
import useFormControl from '@/hooks/useFormControl';
import ModalSearchInput from '@/components/input/modalSearchInput';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { CurrentPageStateAtom } from '@/store/state';
import PreviewBookInfoPagination from '@/components/modal/addCommunityCard/previewBookInfoPagination';
import Input from '@/components/input/input';
import { usePostCommunity, usePutCommunity } from '@/api/community';
import { useSession } from 'next-auth/react';
import { AddCommunityCardProps } from '.';

function AddCommunityCardForm({
  onClick,
  edit,
  communityId,
  bookId,
  review,
}: AddCommunityCardProps) {
  const { data: session } = useSession();
  const { control, handleSubmit, isButtonActive, onSubmit } = useFormControl({
    postFn: usePostCommunity,
    putFn: usePutCommunity,
    edit: edit,
    bookId: 35,
    option: {required : session?.memberId, optional : communityId},
    onClick: onClick,
    initialValue: { content: review },
  });
  const [search, setSearch] = useState('');
  const [_, setCurrentPage] = useAtom(CurrentPageStateAtom);

  //TODO:pagination데이터 필요
  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };
  console.log(isButtonActive)

  return (
    <form
      className="flex w-full flex-col gap-40 mobile:gap-20"
      onSubmit={handleSubmit(onSubmit)}>
      <ModalSearchInput
        placeholder="책 제목, 작가 등을 검색해주세요"
        onSearch={handleSearch}
      />
      <div className="flex-center h-323 w-full flex-col gap-22">
        {search && <PreviewBookInfoPagination search={search} />}
      </div>
      <Input
        type="text"
        title="내용"
        height="h-100"
        control={control}
        name="content"
      />
      <RegisterButton type="submit" disabled={isButtonActive ? true : false}>
        {edit ? '수정하기' : '글쓰기'}
      </RegisterButton>
    </form>
  );
}

export default AddCommunityCardForm;
