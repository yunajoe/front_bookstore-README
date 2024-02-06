import RegisterButton from '@/components/button/register/registerButton';
import { useForm } from 'react-hook-form';
import Textarea from '@/components/input/textarea';
import ModalSearchInput from '@/components/input/modalSearchInput';

function AddCommunityCardForm() {
  const { register, watch, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      book: '',
      content: '',
    },
  });

  const onSubmit = () => {};

  return (
    <form
      className="flex flex-col w-full gap-40 mobile:gap-20"
      onSubmit={handleSubmit(onSubmit)}>
      <ModalSearchInput placeholder="책 제목, 작가 등을 검색해주세요" />
      <div>책내용</div>
      <Textarea height="h-100" />
      <RegisterButton>글쓰기</RegisterButton>
    </form>
  );
}

export default AddCommunityCardForm;
