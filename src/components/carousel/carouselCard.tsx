import React from 'react';

export default function CarouselCard(props) {
  const { imageUrl, title, authorname } = props;
  return (
    <div>
      <div className="min-w-163 bg-black m-10 text-white">
        <img src={imageUrl} alt="이미지" />
        {title}
        {authorname}
      </div>
    </div>
  );
}
