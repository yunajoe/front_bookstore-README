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
  // console.log(height);
  return (
    <div>
      <div
        className={`mr-20 bg-black text-white overflow-hidden relative select-none h-200 w-180
          overflow-hidden`}>
        <img src={imageUrl} />
        {title}
        {/* <PreviewBookInfo size="md" title={title} authorList={[authorname]} /> */}
      </div>
    </div>
  );
}
