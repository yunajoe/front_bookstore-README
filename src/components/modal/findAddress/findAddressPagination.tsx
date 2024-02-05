import AddressItem from './AddressItem';

const Adr = [
  {
    number: '13616',
    address: '경기도 성남시 정자일로 1(금곡동, 코오롱트리폴리스 1)',
    type: '지번',
    detail: '경기도 성남시 분당구 금곡동 210 코오롱트리폴리스1',
  },
  {
    number: '13616',
    address: '경기도 성남시 정자일로 21 (금곡동, 삼라마이다스빌)',
    type: '도로명',
    detail: '경기도 성남시 분당구 금곡동 208 삼라마이다스빌',
  },
  {
    number: '13616',
    address:
      '경기도 성남시 정자일로 21 (금곡동, 삼라마이다스빌) 경기도 성남시 정자일로 21 (금곡동, 삼라마이다스빌)',
    type: '지번',
    detail: '경기도 성남시 분당구 금곡동 208 삼라마이다스빌',
  },
  {
    number: '13616',
    address:
      '경기도 성남시 정자일로 21 (금곡동, 삼라마이다스빌) 경기도 성남시 정자일로 21 (금곡동, 삼라마이다스빌)',
    type: '지번',
    detail:
      '경기도 성남시 분당구 금곡동 208 삼라마이다스빌 경기도 성남시 분당구 금곡동 208',
  },
];

function FindAddressPagination() {
  return (
    <div>
      {Adr.map((adr) => (
         <AddressItem adr={adr} />
      ))}
    </div>
  );
}

export default FindAddressPagination;
