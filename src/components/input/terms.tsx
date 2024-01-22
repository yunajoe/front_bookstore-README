import React, { FormEvent, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const TERMS_TITLES = [
  '만 14세이상 입니다',
  '이용약관',
  '개인정보 수집 및 이용동의',
];

export default function TermsCheckbox() {
  const { register, setValue } = useFormContext();
  const [checkedStates, setCheckedStates] = useState<CheckedStates>(
    TERMS_TITLES.reduce((acc, title) => ({ ...acc, [title]: false }), {}),
  );
  console.log(checkedStates);
  interface CheckedStates {
    [key: string]: boolean;
  }

  const handleSelectAll = (e: FormEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    setCheckedStates(
      TERMS_TITLES.reduce(
        (acc, termsTitle) => ({ ...acc, [termsTitle]: isChecked }),
        {},
      ),
    );
  };

  const handleIndividualCheck = (termsTitle: string) => {
    setCheckedStates((prev) => ({ ...prev, [termsTitle]: !prev[termsTitle] }));
  };

  const handleOpenModal = () => {
    //모달을 열거예용
  };

  useEffect(() => {
    const isAllChecked = Object.values(checkedStates).every(Boolean);
    setValue('selectAll', isAllChecked);
  }, [checkedStates, setValue]);

  return (
    <div className="w-[360px] mobile:w-[330px] ">
      <label className="font-bold inline-block pb-1">약관동의</label>
      <div className="h-[48px] flex items-center border-0 border-b-2 border-b-[#DBDBDB]">
        <input
          type="checkbox"
          {...register('selectAll')}
          checked={Object.values(checkedStates).every(Boolean)}
          onChange={handleSelectAll}
          className="w-4 h-4 rounded-full border border-[#DBDBDB] appearance-none cursor-pointer transition-colors duration-200 checked:bg-green-600 checked:border-[3.5px] checked:border-[#DBDBDB] mr-2"
        />
        <label htmlFor="selectAll">{'전체 동의'}</label>
      </div>
      <div>
        {TERMS_TITLES.map((termsTitle) => (
          <div key={termsTitle} className="h-[48px] flex items-center">
            <input
              {...register(`id.${termsTitle}`)}
              type="checkbox"
              checked={checkedStates[termsTitle]}
              onChange={() => handleIndividualCheck(termsTitle)}
              className="w-4 h-4 rounded-full border border-[#DBDBDB] appearance-none cursor-pointer transition-colors duration-200 checked:bg-green-600 checked:border-[3.5px] checked:border-[#DBDBDB] mr-2"
            />
            <label
              htmlFor={`id.${termsTitle}`}
              className="text-[#767676] text-sm">
              {termsTitle}
            </label>
            <button className="pl-2" onClick={handleOpenModal}>
              {'👉'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
