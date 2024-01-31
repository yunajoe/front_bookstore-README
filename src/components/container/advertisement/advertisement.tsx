import Image from 'next/image';
import Link from 'next/link';

interface AdvertisementProps {
  adImg?: string;
  adLink?: string;
  eventImg?: string;
  eventLink?: string;
}

function Advertisement({
  adImg,
  adLink,
  eventImg,
  eventLink,
}: AdvertisementProps) {
  return (
    <section className="flex-center gap-20 mobile:gap-10 mobile:flex-col text-[#ababab]">
      <article
        className="relative rounded-[10px] bg-gray-5 w-[525px] h-[483px] tablet:w-297 tablet:h-275
          mobile:w-330 mobile:h-178 flex-center">
        <Link href={adLink ?? '/404'}>
          {adImg ? (
            <Image src={adImg} alt="광고 이미지" layout="fill" />
          ) : (
            <>광고</>
          )}
        </Link>
      </article>
      <article
        className="relative rounded-[10px] bg-gray-5 w-[340px] h-[483px] tablet:w-194 tablet:h-275
          mobile:w-330 mobile:h-90 flex-center">
        <Link href={eventLink ?? '/404'}>
          {eventImg ? (
            <Image src={eventImg} alt="이벤트 이미지" layout="fill" />
          ) : (
            <>이벤트</>
          )}
        </Link>
      </article>
    </section>
  );
}

export default Advertisement;
