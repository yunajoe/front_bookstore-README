interface TitleContentTableProps {
  title1: string;
  content1: string;
  title2: string;
  content2: string;
  truncate?: boolean;
}

function TitleContentTable({ title1, content1, title2, content2, truncate = true } : TitleContentTableProps) {
  return (
    <div className="flex flex-col gap-20 text-16 mt-10">
      <div className="flex items-center justify-start">
        <p className="w-78 text-gray-3 font-normal">{title1}</p>
        <p className={`w-full text-gray-3 font-light ${truncate}`}>{content1}</p>
      </div>
      <div className="flex items-center justify-start">
        <p className="w-78 text-gray-3 font-normal">{title2}</p>
        <p className="w-full text-gray-3 font-light">{content2}</p>
      </div>
    </div>
  );
}

export default TitleContentTable;
