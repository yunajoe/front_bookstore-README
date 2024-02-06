import React, { SetStateAction, useState } from 'react';
import TabButton from '../button/header/TabButton';
import EditPassword from '@/components/profile/editPassword/editPassword';
import EditProfile from '@/components/profile/editProfile/editProfile';

function SettingTab() {
  const [selectedButton, setSelectedButton] = useState('');

  const handleButtonClick = (buttonName: SetStateAction<string>) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="flex-center flex-col">
      <div className="flex-center h-70 w-full gap-48 border-b border-gray-1 mobile:h-50">
        <TabButton
          selected={selectedButton === 'editProfile'}
          onClick={() => handleButtonClick('editProfile')}
          title={'프로필 수정'}
          isSmall={true}
        />
        <TabButton
          selected={selectedButton === 'selectGenre'}
          onClick={() => handleButtonClick('selectGenre')}
          title={'선호장르 선택'}
          isSmall={true}
        />
        <TabButton
          selected={selectedButton === 'editPassword'}
          onClick={() => handleButtonClick('editPassword')}
          title={'비밀 번호 변경'}
          isSmall={true}
        />
      </div>
      <div className="mt-40">
        {selectedButton === 'editProfile' && (
          <EditProfile initialNickname={''} email={''} />
        )}
        {/* {selectedButton === 'editPassword' && <EditPassword />}
        {selectedButton === 'selectGenre' && <GenreContainer />} */}
      </div>
    </div>
  );
}

export default SettingTab;
