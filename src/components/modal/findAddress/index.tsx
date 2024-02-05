import { OnClickProps } from '@/types/onClickType';
import ModalContainer from '../modalContainer';
import ModalLayout from '../modalLayout';

function FindAddress({ onClick }: OnClickProps) {
  return (
    <ModalLayout onClick={onClick}>
      <ModalContainer onClick={onClick}>

      </ModalContainer>
    </ModalLayout>
  );
}

export default FindAddress;
