import cls from '@/utils/cls';
import Image from 'next/image';
import { useState, MouseEvent, ReactNode } from 'react';

interface BookRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  onClick?: boolean;
  className?: string;
}

function BookRating({
  rating,
  size = 'sm',
  onClick,
  className,
}: BookRatingProps) {
  const iconSize = {
    sm: 15,
    md: 20,
    lg: 39,
  };

  const [isRating, setIsRating] = useState(rating);

  const handleChangeRating = (e: MouseEvent<HTMLImageElement>) => {
    console.log(e.currentTarget.id);
    const newRating = parseInt(e.currentTarget.id);
    setIsRating(newRating);
  };

  const viewRating = () => {
    const ratingImages = [];
    for (let i = 0; i < Math.round(isRating); i++) {
      ratingImages.push(
        <Image
          id={`${i}`}
          src="/icons/FilledStar.svg"
          key={`fill${i}`}
          alt="별점"
          width={iconSize[size]}
          height={iconSize[size]}
          onClick={onClick ? (e) => handleChangeRating(e) : undefined}
        />,
      );
    }
    for (let i = 0; i < 5 - Math.round(isRating); i++) {
      ratingImages.push(
        <Image
          id={`${isRating + i + 1}`}
          src="/icons/UnfilledStar.svg"
          key={`unfill${i}`}
          alt="별점"
          width={iconSize[size]}
          height={iconSize[size]}
          onClick={onClick ? (e) => handleChangeRating(e) : undefined}
        />,
      );
    }
    return ratingImages;
  };
  return (
    <div className={cls(`${className ? className : 'flex-center gap-3'}`)}>
      {viewRating()}
    </div>
  );
}

export default BookRating;
