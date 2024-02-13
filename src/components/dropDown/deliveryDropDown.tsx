import DropDown from '@/components/dropDown/dropDown';
import DeliveryRequestInput from '@/components/input/delivery/deliveryRequestInput';
import { useState } from 'react';
import { DELIVERY_MENU } from '@/constants/deliveryMenu';

function DeliveryDropDown() {
  const [selectedItem, setSelectedItem] =
    useState('배송 요청사항을 선택해주세요');
  const [customDelivery, setCustomDelivery] = useState('');

  const onSelectedItem = (menu: string) => {
    setSelectedItem(menu);
  };

  const onCustomDeliveryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = event.target.value;
    setCustomDelivery(inputValue);

    if (inputValue) {
      setSelectedItem('직접 입력');
    }
  };

  return (
    <div className="pc:w-555 tablet:w-688 flex-col mobile:w-330">
      <DropDown
        menus={DELIVERY_MENU}
        selectedItem={selectedItem}
        onSelectedItem={onSelectedItem}
      />

      <DeliveryRequestInput
        placeholder="직접 입력"
        value={customDelivery}
        onChange={onCustomDeliveryChange}
        className="mt-2 h-42 w-full min-w-fit max-w-full rounded-[5px] border border-gray-1 bg-gray-5 pl-12 text-14 text-gray-2" // Input의 너비를 상위 요소의 너비와 동일하게 설정합니다.
      />
    </div>
  );
}

export default DeliveryDropDown;
