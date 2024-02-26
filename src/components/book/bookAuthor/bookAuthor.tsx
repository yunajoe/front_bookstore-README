/* string 배열형 author 값을 받아 author 리스트를 출력하는 컴포넌트
 */
import useEditAuthorsName from '@/hooks/common/useEditAutorsName';
interface BookAuthorProps {
  authorList?: string[] | null;
  publisher?: string;
  fontSize?: number;
  classNames?: string;
}

function BookAuthor({
  authorList,
  publisher,
  fontSize,
  classNames,
}: BookAuthorProps) {
  let nameList = authorList?.join(', ');
  nameList += publisher ? ` | ${publisher}` : '';
  const authors = useEditAuthorsName(nameList);
  return (
    <div
      className={`${classNames ?? ``} text-14 text-gray-3`}
      style={{ fontSize: fontSize }}>
      {authors}
    </div>
  );
}

export default BookAuthor;
