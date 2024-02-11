interface TitleContentProps {
  title: string;
  content: string;
}

function TitleContent({title, content} : TitleContentProps) {
  return (
    <div className="text-16">
      <span className="text-gray-2">{title}</span>
      <span className="text-black">{content}</span>
    </div>
  )
}

export default TitleContent