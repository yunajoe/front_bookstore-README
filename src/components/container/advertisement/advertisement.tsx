import Image from 'next/image';

interface AdvertisementProps {
  adImg?: string;
  eventImg?: string;
}

function Advertisement({ adImg, eventImg }: AdvertisementProps) {
  return (
    <section className="flex-center gap-20 mobile:gap-10 mobile:flex-col text-[#ababab]">
      <article
        className="relative rounded-[10px] bg-gray-5 w-[525px] h-[483px] tablet:w-297 tablet:h-275
          mobile:w-330 mobile:h-178 flex-center">
        {adImg ? (
          <Image src={adImg} alt="광고 이미지" layout="fill" />
        ) : (
          <>광고</>
        )}
      </article>
      <article
        className="relative rounded-[10px] bg-gray-5 w-[340px] h-[483px] tablet:w-194 tablet:h-275
          mobile:w-330 mobile:h-90 flex-center">
        {eventImg ? (
          <Image src={eventImg} alt="이벤트 이미지" layout="fill" />
        ) : (
          <>이벤트</>
        )}
      </article>
    </section>
  );
}

export default Advertisement;
