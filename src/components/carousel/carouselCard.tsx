import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { ImageSize } from '@/types/carouselType';
import React from 'react';

export type CarouselCardProps = {
  imageUrl: string;
  title: string;
  authorname: string;
  imageSize: ImageSize;
  marginRight: number;
};

function CarouselCard(props: CarouselCardProps) {
  const { imageUrl, title, authorname, imageSize, marginRight } = props;
  const { width, height } = imageSize;
  return (
    <div>
      <div
        className={'bg-black text-white relative select-none overflow-hidden'}
        style={{ width, height, marginRight }}>
        <PreviewBookInfo size="md" title={title} authorList={[authorname]} />
      </div>
    </div>
  );
}

export default CarouselCard;
