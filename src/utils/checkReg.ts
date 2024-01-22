const emailReg =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/i;

const nicknameReg = /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]{3,8}$/i;

export { emailReg, passwordReg, nicknameReg };
