import { TodayBestBookCardType } from '@/types/cardType';

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

const createReadMeGenre = (title: string, selected: boolean = false): GenreProps => ({ title, selected });

export const ReadMeGenreList: GenreList = {
  genreList: [
    createReadMeGenre('건강취미'),
    createReadMeGenre('경제경영'),
    createReadMeGenre('고전'),
    createReadMeGenre('공무원 수험서'),
    createReadMeGenre('과학'),
    createReadMeGenre('대학교재/전문서적'),
    createReadMeGenre('만화'),
    createReadMeGenre('사회과학'),
    createReadMeGenre('수험서/자격증'),
    createReadMeGenre('소설/시/희곡', true),
    createReadMeGenre('어린이'),
    createReadMeGenre('에세이'),
    createReadMeGenre('여행', true),
    createReadMeGenre('역사'),
    createReadMeGenre('예술/대중문화'),
    createReadMeGenre('요리/살림'),
    createReadMeGenre('외국어'),
    createReadMeGenre('유아'),
    createReadMeGenre('인문학'),
    createReadMeGenre('자기계발'),
    createReadMeGenre('장르소설'),
    createReadMeGenre('잡지'),
    createReadMeGenre('전집'),
    createReadMeGenre('종교/역학'),
    createReadMeGenre('좋은 부모'),
    createReadMeGenre('청소년'),
    createReadMeGenre('컴퓨터/모바일'),
    createReadMeGenre('초등학교참고서'),
    createReadMeGenre('중학교참고서'),
    createReadMeGenre('고등학교참고서'),
  ],
};

/** TodayBestCorner 컴포넌트 확인용 목업 데이터 */
const book1: TodayBestBookCardType = {
  productId: 1,
  bookImg: '/images/SampleBookCover1.jpeg',
  title: 'The Great Gatsby',
  author: ['F. Scott Fitzgerald'],
  rating: 3.5,
  genre: 'Classic Fiction',
  price: 15.99,
};

const book2: TodayBestBookCardType = {
  productId: 2,
  bookImg: '',
  title: 'To Kill a Mockingbird',
  author: ['Harper Lee'],
  rating: 4.8,
  genre: 'Classic Fiction',
  price: 12.49,
};

const book3: TodayBestBookCardType = {
  productId: 3,
  bookImg: '',
  title: "Harry Potter and the Sorcerer's Stone",
  author: ['J.K. Rowling'],
  rating: 5,
  genre: 'Fantasy',
  price: 18.99,
};

const book4: TodayBestBookCardType = {
  productId: 4,
  bookImg: '/images/SampleBookCover2.jpeg',
  title: 'The Catcher in the Rye',
  author: ['J.D. Salinger'],
  rating: 3,
  genre: 'Classic Fiction',
  price: 11.99,
};

const book5: TodayBestBookCardType = {
  productId: 5,
  bookImg: '/images/SampleBookCover3.jpeg',
  title: '1984',
  author: ['George Orwell'],
  rating: 4,
  genre: 'Dystopian Fiction',
  price: 14.29,
};

const book6: TodayBestBookCardType = {
  productId: 6,
  bookImg: '/images/SampleBookCover4.jpeg',
  title: 'The Lord of the Rings',
  author: ['J.R.R. Tolkien'],
  rating: 4,
  genre: 'Fantasy',
  price: 22.99,
};

export const bookListMock = [book1, book2, book3, book4, book5, book6];