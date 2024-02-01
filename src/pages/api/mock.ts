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
