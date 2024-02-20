import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { useDeleteBookmark, usePostBookmark } from "@/api/bookmark";

function useClickLikeButton({ bookId = "-1", bookmarkId = -1, isBookmarked = false }) {
  //옵티미스틱 상태
  const [bookmarkState, setBookmarkState] = useState(isBookmarked);
  const queryClient = useQueryClient();
  
  // 북마크하는 함수
  const { mutate: handleCheckBookmarkMutate } = usePostBookmark({
    bookId: Number(bookId),
    onSettle: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmark', bookId] });
    },
  });
  
  // 북마크 삭제하는 함수
  const { mutate: handleRemoveBookmarkMutate } = useDeleteBookmark({
    bookmarkId: String(bookmarkId),
    onSettle: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmark', bookId] });
    },
  });

  const handleBookmarkClick = () => {
    setBookmarkState(!isBookmarked);
    if (isBookmarked) {
      handleRemoveBookmarkMutate();
    } else {
      handleCheckBookmarkMutate();
    }
  }

  return { bookmarkState, handleBookmarkClick };
}

export default useClickLikeButton