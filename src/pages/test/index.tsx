import DropDown from '@/components/dropDown/dropDown';

function TestPage() {
  const person1 = {
    id: 1,
    name: 'yuna',
    isPurchased: true,
    firstPurchasedDate: '2019.12.12',
  };
  // const person2 = {
  //   id: 2,
  //   name: 'yuna2',
  //   isPurchased: false,
  //   firstPurchasedDate: null,
  // };

  return (
    <>
      <DropDown person={person1} />
    </>
  );
}

export default TestPage;
