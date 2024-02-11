interface InfoCard {
  title: string;
  content: string;
}

function InfoCard({ title, content } : InfoCard) {
  return (
    <div className="flex-center bg-gary-5 gap-8 text-20 font-bold">
      {title}
      <span className="text-16 text-gray-2">{content}</span>
    </div>
  );

}

export default InfoCard