import { SigninMethodAtom } from '@/store/state';
import { useAtom } from 'jotai';
import { signOut } from 'next-auth/react';

function SignOutButton() {
  const [_, setSigninMethod] = useAtom(SigninMethodAtom);

  const handleLogoutClick = () => {
    setSigninMethod(null);
    signOut({ callbackUrl: '/signin' });
  };

  return (
    <button className="text-15 mobile:hidden" onClick={handleLogoutClick}>
      로그아웃
    </button>
  );
}

export default SignOutButton;
