import React from 'react';

export default function CarouselCard(props) {
  const { imageUrl, title, authorname, env } = props;
  const sizeVariants = {
    desktop: 'w-160 h-246',
    tablet: 'w-157 h-237',
    mobile: 'w-142 h-202',
  };

  return (
    <div>
      <div
        className={`bg-black mr-20 text-white ${sizeVariants[env]} overflow-hidden relative`}>
        <img src={imageUrl} alt="이미지" />
        {title}
        {authorname}
      </div>
    </div>
  );
}
