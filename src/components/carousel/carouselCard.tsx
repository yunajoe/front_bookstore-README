import { EnvType } from '@/types/carouselType';
import Image from 'next/image';
import React from 'react';

export type CarouselCardProps = {
  imageUrl: string;
  title: string;
  authorname: string;
  env: EnvType;
};

export default function CarouselCard(props: CarouselCardProps) {
  const { imageUrl, title, authorname, env } = props;
  const sizeVariants = {
    desktop: 'w-163 h-246',
    tablet: 'w-157 h-237',
    mobile: 'w-142 h-202',
  };

  const sizeVariantsmodal = {
    desktop: 'w-137 h-208',
    tablet: 'w-137 h-198',
    mobile: 'w-128 h-174',
  };

  return (
    <div>
      <div
        className={`bg-black mr-20 text-white ${sizeVariantsmodal[env]} overflow-hidden relative
          select-none`}>
        <Image src={imageUrl} alt="이미지" fill />
        {title}
        {authorname}
      </div>
    </div>
  );
}
