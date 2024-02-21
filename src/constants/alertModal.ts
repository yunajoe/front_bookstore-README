interface AlertModalConfig {
  [key: string]: {
    title: string;
    description: string;
  };
}

export const ALERT_MODAL: AlertModalConfig = {
  삭제하기: {
    title: '정말 삭제하시겠습니까?',
    description: '삭제한 글은 복구할 수 없습니다.',
  },
};
