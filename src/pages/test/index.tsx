import DropDown from '@/components/dropDown/dropDown';
import Header from '@/components/header';
function TestPage() {
  return (
    <>
      <DropDown />
      <Header isLoggedIn={false} />
      <Header isLoggedIn={true} numItemsOfCart={3} />
    </>
  );
}

export default TestPage;
