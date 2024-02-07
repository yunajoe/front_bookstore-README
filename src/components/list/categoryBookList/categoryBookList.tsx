function CategoryBookList() {
  return (
      <article className="flex flex-col gap-50 mobile:gap-20 tablet:gap-40">
        <div className="flex items-center justify-between">
          <h1 className="text-20 text-black">모든 도서</h1>
        </div>
        <div
          role="temp"
          className="h-[708px] w-[895px] bg-gray-1 mobile:h-[1735px] mobile:w-[330px]
          tablet:h-[1464px] tablet:w-[511px]"></div>
      </article>  )
}

export default CategoryBookList