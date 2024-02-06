interface TextareaProps {
  height: number;
}

function Textarea({ height = 101 } : TextareaProps) {
  return (
    <div className="flex flex-col w-full gap-12">
      <label htmlFor="content" className="text-16 text-b-b">
        내용
      </label>
      <textarea
        id="content"
        // {...register('content', { required: true })}
        className={`w-full h-${height} border border-gray-1 rounded-[10px] px-20 py-15`}
        placeholder="내용을 작성해주세요"></textarea>
    </div>
  );
}

export default Textarea;
