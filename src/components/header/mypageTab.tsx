import React, { useState, useEffect } from 'react';
import TabButton from '../button/header/TabButton';
import SettingTab from '@/components/header/settingTab';
import { useRouter } from 'next/router';

// tabRoutes 객체의 타입 정의
interface TabRoutes {
  [key: string]: string;
}

const tabRoutes: TabRoutes = {
  myReview: '/mypage/review',
  setting: '/mypage/setting/editProfile',
  orderList: '/mypage/order',
  myCommunity: '/mypage/community',
};

function MyPageTab() {
  const [selectedTab, setSelectedTab] = useState('');
  const [selectedSettingTab, setSelectedSettingTab] = useState('editProfile'); // SettingTab의 선택된 탭 상태
  const router = useRouter();

  // 페이지 로드 시 라우터의 경로를 기반으로 선택된 탭을 설정
  useEffect(() => {
    const pathname = router.pathname;
    const tabName = Object.keys(tabRoutes).find(
      (key) => tabRoutes[key] === pathname,
    );
    if (tabName) {
      setSelectedTab(tabName);
    }
  }, [router.pathname]);

  const handleButtonClick = (tabName: string) => {
    if (tabRoutes[tabName]) {
      // 해당하는 키가 있는지 확인
      setSelectedTab(tabName);
      if (tabName === 'setting') {
        // SettingTab을 클릭한 경우
        setSelectedSettingTab('editProfile'); // 초기 탭을 설정
      }
      router.push(tabRoutes[tabName]);
    } else {
      console.error(`Tab route for '${tabName}' is not defined`);
    }
  };

  return (
    <div>
      <div className="flex-center h-70 gap-48 border border-gray-1 mobile:h-50">
        <TabButton
          selected={selectedTab === 'orderList'}
          onClick={() => handleButtonClick('orderList')}
          title={'주문 조회'}
          isSmall={false}
        />
        <TabButton
          selected={selectedTab === 'myReview'}
          onClick={() => handleButtonClick('myReview')}
          title={'나의 리뷰'}
        />
        <TabButton
          selected={selectedTab === 'myCommunity'}
          onClick={() => handleButtonClick('myCommunity')}
          title={'나의 커뮤니티 글'}
          isSmall={false}
        />
        <TabButton
          selected={selectedTab === 'setting'}
          onClick={() => handleButtonClick('setting')}
          title={'설정'}
          isSmall={false}
        />
      </div>
      {selectedTab === 'setting' && (
        <SettingTab
          selectedTab={selectedSettingTab}
          setSelectedTab={setSelectedSettingTab}
        />
      )}
    </div>
  );
}

export default MyPageTab;
