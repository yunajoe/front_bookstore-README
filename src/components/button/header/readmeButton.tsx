import Link from 'next/link';

function ReadMeButton() {
  return (
    <Link
      className="text-primary text-18 font-bold tablet:text-24 pc:text-24"
      href="/">
      Read Me
    </Link>
  );
}
export default ReadMeButton;
