import { ImageSize } from '@/types/carouselType';
import { twMerge } from 'tailwind-merge';
import React from 'react';

export type CarouselCardProps = {
  imageUrl: string;
  title: string;
  authorname: string;
  imageSize: ImageSize;
};

export default function CarouselCard(props: CarouselCardProps) {
  const { imageUrl, title, authorname, imageSize } = props;
  const { width, height } = imageSize;

  const sizeVariant = `h-${height}`;
  // 첫번째 div없애면은 완전꺠짐
  // console.log(height);

  return (
    <div>
      <div
        className={twMerge(
          `mr-20 bg-black text-white relative select-none overflow-hidden`,
          sizeVariant,
        )}>
        <img src={imageUrl} />
        {title}
        {/* <PreviewBookInfo size="md" title={title} authorList={[authorname]} /> */}
      </div>
    </div>
  );
}
