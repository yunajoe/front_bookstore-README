import React from 'react';
import TabButton from '../button/header/TabButton';

interface Props {
  selectedTab: string;
  setSelectedTab: (tabName: string) => void;
}

function SettingTab({ selectedTab, setSelectedTab }: Props) {
  const handleButtonLocalClick = (buttonName: string) => {
    setSelectedTab(buttonName); // 선택된 탭 상태 변경
  };

  return (
    <div className="flex-center flex-col">
      <div className="flex-center h-70 w-full gap-48 border-b border-gray-1 mobile:h-50">
        <TabButton
          selected={selectedTab === 'editProfile'}
          onClick={() => handleButtonLocalClick('editProfile')}
          title={'프로필 수정'}
          isSmall={true}
        />
        <TabButton
          selected={selectedTab === 'selectGenre'}
          onClick={() => handleButtonLocalClick('selectGenre')}
          title={'선호장르 선택'}
          isSmall={true}
        />
        <TabButton
          selected={selectedTab === 'editPassword'}
          onClick={() => handleButtonLocalClick('editPassword')}
          title={'비밀 번호 변경'}
          isSmall={true}
        />
      </div>
    </div>
  );
}

export default SettingTab;
