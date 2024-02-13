import { useState } from 'react';
import AddressInput from '@/components/input/delivery/addressInput';
import PhoneNumberInput from '@/components/input/delivery/phoneNumberInput';
import RecipientInput from '@/components/input/delivery/receiptInput';
import ShippingOptionRadio from '@/components/button/delivery/shippingOptionRadio';
import SetDefaultAddressButton from '@/components/button/delivery/setDefaultAddressButton';
import DropDown from '@/components/dropDown/dropDown';
import DeliveryDropDown from '@/components/dropDown/deliveryDropDown';
// 기본 배송지에 해당하는 mock 데이터
const defaultAddress = {
  recipient: '안윤진',
  phoneNumber: '01048487676',
  addressLine1: '07027',
  addressLine2: '서울특별시 동작구 사당로 46 (상도동)',
  addressLine3: '120동 1406호',
};
/*
TODO
기본 배송지 선택 시 api get 요청 연결
*/
function ShippingAddressSection() {
  const [isDefault, setIsDefault] = useState(true);
  const [isFindAddressModalOpen, setIsFindAddressModalOpen] = useState(false);
  const handleOptionChange = (event: { target: { value: string } }) => {
    setIsDefault(event.target.value === 'default');
  };

  const handleRecipientChange = (event) => {
    setIsDefault ? '' : event.target.value;
  };

  const handlePhoneNumberChange = (event) => {
    setIsDefault ? '' : event.target.value;
  };

  const handleAddressChange = (event) => {
    setIsDefault ? '' : event.target.value;
  };

  const handleFindAddressModalOpen = () => {
    setIsFindAddressModalOpen(!isFindAddressModalOpen);
  };

  return (
    <div className="flex flex-col justify-center gap-y-12 text-16">
      <div className="mb-28 mt-40 text-20 font-bold">결제</div>
      <ShippingOptionRadio
        isDefault={isDefault}
        handleOptionChange={handleOptionChange}
      />
      <RecipientInput
        isDefault={isDefault}
        value={isDefault ? defaultAddress.recipient : ''}
        handleChange={handleRecipientChange}
      />
      <PhoneNumberInput
        isDefault={isDefault}
        value={isDefault ? defaultAddress.phoneNumber : ''}
        handleChange={handlePhoneNumberChange}
      />
      <AddressInput
        isDefault={isDefault}
        addressLines={[
          defaultAddress.addressLine1,
          defaultAddress.addressLine2,
          defaultAddress.addressLine3,
        ]}
        onClick={handleFindAddressModalOpen}
      />
      <SetDefaultAddressButton />
      <DeliveryDropDown />
    </div>
  );
}

export default ShippingAddressSection;
