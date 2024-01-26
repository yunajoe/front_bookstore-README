import Carousel from '@/components/carousel/carousel';
// mobile: { min: '375px', max: '767px' },
// tablet: { min: '768px', max: '1199px' },
// 데스크탑 6개  카드 이미지 163
// tablet  4개  카드 이미지 157
// mobile  2개   카드 이미지 142
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
      title: '책6',
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
      title: '책6',
      authorname: 'yuna',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2023/12/19/20/23/hazelnut-8458335_1280.jpg',
      title: '책6',
      authorname: 'yuna',
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { min: 1200, max: 3000 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 768, min: 1199 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 375, min: 767 },
      items: 2,
    },
  };

  const responsiveImageSize = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        data={data}
        responsive={responsive}
        responsiveImages={responsiveImageSize}
      />
    </>
  );
}

export default TestPage;
