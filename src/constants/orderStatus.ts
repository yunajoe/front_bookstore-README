import { OrderOverViewItem } from '@/types/deliveryType';

// Score와 동일한 역할
type ScoreRecord = Record<string, keyof OrderOverViewItem>;

export const ORDERSTATUS: ScoreRecord = {
  READY: '배송 준비중',
  DELIVERING: '배송중',
  COMPLETE: '배송완료',
  EXCHANGE_AND_REFUND: '교환/환불',
  CONFIRM: '구매확정',
};
