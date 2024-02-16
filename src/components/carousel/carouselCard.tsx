import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { ImageSize } from '@/types/carouselType';
import React from 'react';

export type CarouselCardProps = {
  size: 'sm' | 'md' | 'lg';
  imageUrl: string;
  title: string;
  authorList: string[];
  imageSize: ImageSize;
  marginRight: number;
};

function CarouselCard({
  size,
  imageUrl,
  title,
  authorList,
  imageSize,
  marginRight,
}: CarouselCardProps) {
  const { width } = imageSize;
  console.log('title', title);
  return (
    <div>
      <div
        className={`relative select-none text-white`}
        style={{ width, marginRight }}>
        <PreviewBookInfo
          size={size}
          title={title}
          authorList={authorList}
          image={imageUrl}
        />
      </div>
    </div>
  );
}

export default CarouselCard;
