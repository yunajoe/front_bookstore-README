import React, { useState } from 'react';
import TabButton from '../button/header/TabButton';
import SettingTab from '@/components/header/settingTab';
import CommunityCard from '@/components/card/communityCard/communityCard';
import BookReviewCard from '@/components/card/bookReviewCard/bookReviewCard';
import OrderOverView from '@/components/container/orderDate/orderOverView';
function MyPageTab() {
  const [selectedTab, setSelectedTab] = useState(''); // 현재 선택된 탭 추가

  const handleButtonClick = (tabName: React.SetStateAction<string>) => {
    setSelectedTab(tabName);
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
      {selectedTab === 'myCommunity' && (
        <CommunityCard
          profileImg={''}
          userNickname={''}
          createAt={''}
          bookCover={''}
          bookTitle={''}
          review={''}
        />
      )}
      {selectedTab === 'order' && (
        <OrderOverView
          orderView={{
            processing: 1,
            shipping: 1,
            completed: 1,
            exchangeCompleted: 0,
            purchased: 0,
          }}
        />
      )}
      {selectedTab === 'setting' && <SettingTab />}
      {selectedTab === 'myReview' && (
        <BookReviewCard
          book={{
            productId: 0,
            title: '',
            imageUrl: undefined,
            authors: null,
          }}
          review={{
            reviewId: 0,
            createdAt: '',
            updatedAt: '',
            reviewTitle: '',
            reviewImgUrl: undefined,
            reviewContent: '',
            reviewRating: 0,
          }}
        />
      )}
    </div>
  );
}

export default MyPageTab;
