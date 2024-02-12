// mainId, subId를 넘겨주면 categoryId를 리턴하는 훅

import { useAtom } from "jotai"

import { CategoryListAtom } from "@/store/state"

function useGetCategoryId(mainId: number, subId?: number) {
  if (!subId) return mainId;

  const [categoryList,] = useAtom(CategoryListAtom);
  const requiredCategory = categoryList[mainId === 0 ? "domestic" : "foreign"][subId - 1];
  const requiredId = requiredCategory.categoryId;

  return requiredId;
}

export default useGetCategoryId