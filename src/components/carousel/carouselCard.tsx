import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { ImageSize } from '@/types/carouselType';
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

  const sizeVariant = `w-${width} h-${height}`;
  // 첫번째 div없애면은 완전꺠짐
  return (
    <div>
      <div
        className={`bg-black mr-20 text-white ${sizeVariant} overflow-hidden relative select-none`}>
        <img src={imageUrl} alt="이미지" />
        {title}
        {authorname}
      </div>
    </div>
  );
}
