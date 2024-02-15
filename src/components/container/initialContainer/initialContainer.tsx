import useCheckCategoryUrl from "@/hooks/useCheckCategoryUrl";
import useGetCategory from "@/hooks/useGetCategory"

function InitialContainer() {
  useGetCategory();
  useCheckCategoryUrl();
  return (<></>)
}

export default InitialContainer