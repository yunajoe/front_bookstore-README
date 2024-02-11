function TotalPrice({ title, price } : { title: string; price: string; }) {
  return (
    <div className="flex justify-between items-center text-15">
      <span className="font-light">
        {title}
      </span>
      <span className="font-bold">
        {price}
      </span>
    </div>
  )
}

export default TotalPrice