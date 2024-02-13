import { useState } from 'react';
import AddressInput from '@/components/input/delivery/addressInput';
import PhoneNumberInput from '@/components/input/delivery/phoneNumberInput';
import RecipientInput from '@/components/input/delivery/receiptInput';
import ShippingOptionRadio from '@/components/button/delivery/shippingOptionRadio';
import SetDefaultAddressButton from '@/components/button/delivery/setDefaultAddressButton';
import DeliveryDropDown from '@/components/dropDown/deliveryDropDown';
import { MOCK_ADDRESS } from '@/constants/address';

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
    <div className="flex w-5/6 flex-col gap-y-12 text-16 pc:mx-93 pc:w-1/2">
      <div className="mb-28  mt-40 text-20 font-bold">결제</div>
      <ShippingOptionRadio
        isDefault={isDefault}
        handleOptionChange={handleOptionChange}
      />
      <RecipientInput
        isDefault={isDefault}
        value={isDefault ? MOCK_ADDRESS.recipient : ''}
        handleChange={handleRecipientChange}
      />
      <PhoneNumberInput
        isDefault={isDefault}
        value={isDefault ? MOCK_ADDRESS.phoneNumber : ''}
        handleChange={handlePhoneNumberChange}
      />
      <AddressInput
        isDefault={isDefault}
        addressLines={[
          MOCK_ADDRESS.addressLine1,
          MOCK_ADDRESS.addressLine2,
          MOCK_ADDRESS.addressLine3,
        ]}
        onClick={handleFindAddressModalOpen}
      />
      <SetDefaultAddressButton />
      <DeliveryDropDown />
    </div>
  );
}

export default ShippingAddressSection;
