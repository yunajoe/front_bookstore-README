import Image from 'next/image';
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
      <label className="font-bold inline-block pb-2">약관동의</label>
      <div className="h-[48px] flex items-center border-0 border-b-[1px] border-b-[#DBDBDB] gap-2">
        <input
          type="checkbox"
          {...register('selectAll')}
          checked={Object.values(checkedStates).every(Boolean)}
          onChange={handleSelectAll}
          className="w-4 h-4 rounded-full border border-[#DBDBDB] appearance-none cursor-pointer transition-colors duration-200 checked:bg-[url('/icons/checkIcon.svg')] checked:bg-cover "
        />
        <label htmlFor="selectAll" className="text-[15px] font-medium">
          전체 동의
        </label>
      </div>
      <div>
        {TERMS_TITLES.map((termsTitle) => (
          <div
            key={termsTitle}
            className="h-[48px] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                {...register(`id.${termsTitle}`)}
                type="checkbox"
                checked={checkedStates[termsTitle]}
                onChange={() => handleIndividualCheck(termsTitle)}
                className="w-4 h-4 rounded-full border border-[#DBDBDB] appearance-none cursor-pointer transition-colors duration-200 checked:bg-green-600 checked:border-[3.5px] checked:border-[#DBDBDB]"
              />
              <label
                htmlFor={`id.${termsTitle}`}
                className="text-[#767676] text-[15px]">
                {termsTitle}
              </label>
            </div>
            <button className="pr-2" onClick={handleOpenModal}>
              <Image
                src="icons/rightArrow.svg"
                width={18}
                height={18}
                alt="약관내용 전체보기 버튼"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
