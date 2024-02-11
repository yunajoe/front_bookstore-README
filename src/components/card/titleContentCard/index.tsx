import TitleContent from "@/components/card/titleContentCard/titleContent";

interface TitleContentCardProps {
  title: string;
  titleData: string[];
  contentData: string[];
}

function TitleContentCard({ title, titleData, contentData }: TitleContentCardProps) {
  const newData = titleData.map((title, index) => {return {[title] : contentData[index]}});
  return (
    <div >
      {title}
      <div className="flex flex-col gap-22 p-30">
        {newData.map((data) => (
          <TitleContent title={data.title} content={data.content} />
        ))}
      </div>
    </div>
  )
}

export default TitleContentCard