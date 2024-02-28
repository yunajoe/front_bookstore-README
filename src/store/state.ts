import { PayMentAtom } from '@/types/api/cart';
import { atom } from 'jotai';
import { CategoryAtomType, CategoryType } from '@/types/api/category';
import { SocialType } from '@/api/social';

export const countAtom = atom(0);

export const pointVisibleAtom = atom(true);

export const CurrentPageArrayIndexAtom = atom(0);

export const CurrentPageStateAtom = atom(1);

export const chooseBookIdAtom = atom(0);

// 장바구니 money Atom
export const basketItemList = atom<PayMentAtom[]>([]);

// 맨 처음 카테고리 리스트 데이터를 받아와 저장하는 전역상태
export const CategoryListAtom = atom<CategoryAtomType>({
  domestic: [],
  foreign: [],
});

// 내가 현재 위치한 카테고리 mainId, subId를 알려주는 전역상태
export const LocatedCategoryAtom = atom<CategoryType>({
  mainId: 0,
});

// 사용자가 로그인했을 때 소셜로 한 건지, 일반으로 한 건지 체크하는 전역상태
export const SigninMethodAtom = atom<SocialType | undefined | null>(null);