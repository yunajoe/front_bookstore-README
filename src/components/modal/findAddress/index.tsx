import { OnClickProps } from '@/types/onClickType';
import ModalContainer from '../modalContainer';
import ModalLayout from '../modalLayout';
import FindAddressForm from './findAddressForm';

function FindAddress({ onClick }: OnClickProps) {
  return (
    <ModalLayout onClick={onClick}>
      <ModalContainer onClick={onClick} title='주소 검색하기'>
        <FindAddressForm />
      </ModalContainer>
    </ModalLayout>
  );
}

export default FindAddress;
