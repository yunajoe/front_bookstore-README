import SearchInput from "@/components/input/searchInput"
import DoFindAddress from "./doFindAddress"
import NotFindAddress from "./notFindAddress"
import FindAddressPagination from "./findAddressPagination"

function FindAddressForm() {
  return (
    <div className="flex flex-col w-full gap-20">
      <SearchInput width="full" height="48" rounded="5" placeholder="도로명, 지명, 건물명 검색"/>
      <FindAddressPagination />
    </div>
  )
}

export default FindAddressForm