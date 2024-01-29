import Carousel from '@/components/carousel/carousel';
import { responsive } from '@/utils/checkRespinsiveEnv';

// 데스크탑 6개  카드 이미지 163
// tablet  4개  카드 이미지 157
// mobile  2개   카드 이미지 142

// 데스크탑 1200px  padding이 60   즉, container 1080px;  //  6.62576687117 개
// 태블릿  768px  padding이 40, 즉 container  688px   // 4.328 개
// 모바일 360px padding 15, 즉 container 330px // 2.32... 개

function TestPage() {
  const data = [
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2024/01/21/18/46/succulent-8523664_1280.jpg',
      title: '책1',
      authorname: 'yuna',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2022/11/08/06/05/read-7577787_1280.jpg',
      title: '책2',
      authorname: 'yuna',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_1280.jpg',
      title: '책3',
      authorname: 'yuna',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2024/01/16/19/40/trees-8512979_1280.jpg',
      title: '책4',
      authorname: 'yuna',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2024/01/13/00/46/raccoon-8504925_1280.png',
      title: '책5',
      authorname: 'yuna',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/12/19/20/23/hazelnut-8458335_1280.jpg',
      title: '책6',
      authorname: 'yuna',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/12/19/20/23/hazelnut-8458335_1280.jpg',
      title: '책7',
      authorname: 'yuna',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/12/19/20/23/hazelnut-8458335_1280.jpg',
      title: '책8',
      authorname: 'yuna',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/12/19/20/23/hazelnut-8458335_1280.jpg',
      title: '책9',
      authorname: 'yuna',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/12/19/20/23/hazelnut-8458335_1280.jpg',
      title: '마지막이다',
      authorname: 'yuna',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/12/19/20/23/hazelnut-8458335_1280.jpg',
      title: '마지막2222222',
      authorname: 'yuna',
    },
  ];

  return (
    <>
      <Carousel data={data} responsive={responsive} />
    </>
  );
}

export default TestPage;
