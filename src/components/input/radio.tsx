import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form';

interface RadioProps {
  label: string;
  control: Control<FieldValues>;
  name: FieldPath<FieldValues>;
  title1: string;
  title2: string;
}

function Radio({ label, control, name, title1, title2 }: RadioProps) {
  const { field } = useController({ control, name });

  return (
    <div className="flex flex-col w-full gap-12">
      <label htmlFor={field.name} className="text-16 text-b-b">
        {label}
      </label>
      <input type='radio' name={field.name}>{title1}</input>
      <input type='radio' name={field.name}>{title2}</input>
    </div>
  )
}

export default Radio