export interface CommunityCardsProps {
  bookInfo: CommunityCardBookInfo;
  communityId: number;
  content: string;
  createDate: string;
  updateDate: string;
  emojiInfo: CommunityEmojiInfo;
  writer: CommunityWriter;
  kebab?: boolean;
}

export interface CommunityPagesProps {
  cards: CommunityCardsProps[];
  cursorId: number;
  limit: number;
  total: number;
}

export interface CommunityCardProps {
  communityId: number;
  profileImg: string;
  userNickname: string;
  createAt: string;
  bookId: number;
  bookCover: string;
  bookTitle: string;
  review: string;
  emojiInfo: CommunityEmojiInfo;
  kebab?: boolean;
}

interface CommunityCardBookInfo {
  bookId: number;
  bookImgUrl: string;
  bookTitle: string;
}

export interface CommunityEmojiInfo {
  emojiId: number;
  emojis: Emojis[];
}

interface Emojis {
  emojiNum: number;
  emojiType: string;
  emojiCheck: boolean;
}

interface CommunityWriter {
  numberId: number;
  nickname: string;
  profileImg: string;
}
