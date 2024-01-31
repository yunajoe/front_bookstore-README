interface PreviewBookInfoProps {
  image?: string 
  title: string;
  alignCenter?: boolean;
  authorList?: string[];
  ranking: number;
  size: 'sm' | 'md' | 'lg';
  price: number;
  category?: string;
}
/** TodayBestCorner 컴포넌트 확인용 목업 데이터 */
const book1: PreviewBookInfoProps = {
  ranking: 1,
  image: '/images/SampleBookCover1.jpeg',
  title: 'The Great Gatsby',
  authorList: ['F. Scott Fitzgerald'],
  size: 'sm',
  category: 'Classic Fiction',
  price: 15.99,
};

const book2: PreviewBookInfoProps = {
  ranking: 2,
  image: '',
  title: 'To Kill a Mockingbird',
  authorList: ['Harper Lee'],
  size: 'sm',
  category: 'Classic Fiction',
  price: 12.49,
};

const book3: PreviewBookInfoProps = {
  ranking: 3,
  image: '',
  title: "Harry Potter and the Sorcerer's Stone",
  authorList: ['J.K. Rowling'],
  size: "lg",
  category: 'Fantasy',
  price: 18.99,
};

const book4: PreviewBookInfoProps = {
  ranking: 4,
  image: '/images/SampleBookCover2.jpeg',
  title: 'The Catcher in the Rye',
  authorList: ['J.D. Salinger'],
  size: "md",
  category: 'Classic Fiction',
  price: 11.99,
};

const book5: PreviewBookInfoProps = {
  ranking: 5,
  image: '/images/SampleBookCover3.jpeg',
  title: '1984',
  authorList: ['George Orwell'],
  size: "lg",
  category: 'Dystopian Fiction',
  price: 14.29,
};

const book6: PreviewBookInfoProps = {
  ranking: 6,
  image: '/images/SampleBookCover4.jpeg',
  title: 'The Lord of the Rings',
  authorList: ['J.R.R. Tolkien'],
  size: "md",
  category: 'Fantasy',
  price: 22.99,
};

const book7: PreviewBookInfoProps = {
  ranking: 7,
  image: '',
  title: "Harry Potter and the Sorcerer's Stone",
  authorList: ['J.K. Rowling'],
  size: "lg",
  category: 'Fantasy',
  price: 18.99,
};

const book8: PreviewBookInfoProps = {
  ranking: 8,
  image: '/images/SampleBookCover2.jpeg',
  title: 'The Catcher in the Rye',
  authorList: ['J.D. Salinger'],
  size: "md",
  category: 'Classic Fiction',
  price: 11.99,
};

const book9: PreviewBookInfoProps = {
  ranking: 9,
  image: '/images/SampleBookCover3.jpeg',
  title: '1984',
  authorList: ['George Orwell'],
  size: "lg",
  category: 'Dystopian Fiction',
  price: 14.29,
};

const book10: PreviewBookInfoProps = {
  ranking: 10,
  image: '/images/SampleBookCover4.jpeg',
  title: 'The Lord of the Rings',
  authorList: ['J.R.R. Tolkien'],
  size: "md",
  category: 'Fantasy',
  price: 22.99,
};

export const bestBookList = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];
