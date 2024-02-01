export interface HeaderProps {
  isLoggedIn: boolean;
  numItemsOfCart?: number;
}

export interface GenreProps {
  title: string;
  selected: boolean;
}

export interface GenreList {
  genreList: GenreProps[];
}

export interface CategoryProps {
  title: string;
  link: string;
  categoryType?: string;
}

export interface CategoryList {
  categoryList: CategoryProps[];
}

const createReadMeGenre = (
  title: string,
  selected: boolean = false,
): GenreProps => ({ title, selected });

export const ReadMeGenreList: GenreList = {
  genreList: [
    createReadMeGenre('건강/취미'),
    createReadMeGenre('만화'),
    createReadMeGenre('고전'),
    createReadMeGenre('공무원 수험서'),
    createReadMeGenre('과학'),
    createReadMeGenre('유아'),
    createReadMeGenre('어린이'),
    createReadMeGenre('청소년'),
    createReadMeGenre('대학교재/전문서적'),
    createReadMeGenre('만화'),
    createReadMeGenre('사회과학'),
    createReadMeGenre('수험서/자격증'),
    createReadMeGenre('소설/시/희곡', true),
    createReadMeGenre('에세이'),
    createReadMeGenre('여행', true),
    createReadMeGenre('역사'),
    createReadMeGenre('경제경영'),
    createReadMeGenre('예술/대중문화'),
    createReadMeGenre('요리/살림'),
    createReadMeGenre('외국어'),
    createReadMeGenre('인문학'),
    createReadMeGenre('자기계발'),
    createReadMeGenre('장르소설'),
    createReadMeGenre('잡지'),
    createReadMeGenre('전집'),
    createReadMeGenre('종교/역학'),
    createReadMeGenre('좋은 부모'),
    createReadMeGenre('컴퓨터/모바일'),
    createReadMeGenre('초등학교참고서'),
    createReadMeGenre('중학교참고서'),
    createReadMeGenre('고등학교참고서'),
  ],
};

// wish데이터


export const myWishListData = {
  id: 1,
  name: 'yuna',
  wishListArray: [
    {
      id: 1,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title:
        '나는긴이름우아아아아ㅏㅇ아아아아아아아아아앙아아아아아아아아아아앙아아아아아아아앙아아아아앙아아',
      author:
        '작가 이름 1아아아아아앙아아아아아아아앙아아아아아앙아아아아아앙아아아아아아',
      rating: 4.5,
      genre: '소설',
      price: 20000,
    },
    {
      id: 2,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 2',
      author: '작가 이름 2',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 3,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 3',
      author: '작가 이름 3',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 4,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 4',
      author: '작가 이름 4',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 5,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 5',
      author: '작가 이름 5',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 6,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 6',
      author: '작가 이름 6',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 7,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 7',
      author: '작가 이름 7',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 8,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 9,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 9',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 10,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 11,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 12,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 13,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 14,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 15,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 16,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 17,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 18,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 19,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 20,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 21,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 22,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 23,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 24,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 25,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
    {
      id: 26,
      image:
        'https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775_640.jpg',
      title: '책 제목 8',
      author: '작가 이름 8',
      rating: 3.8,
      genre: '비평',
      price: 18000,
    },
  ],
};
