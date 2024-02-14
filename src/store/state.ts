import { CartItem } from '@/types/cartType';
import { atom } from 'jotai';

export const countAtom = atom(0);

export const pointVisibleAtom = atom(true);

export const CurrentPageStateAtom = atom(1);





// 장바구니 money Atom 
export const basketItemList= atom<CartItem[]>([])



