import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { UseMutationResult } from '@tanstack/react-query';

interface UseFormControl<T> {
  Fn : (data: T) => UseMutationResult<any, Error, void, void>;
  bookId: number;
  option ?:  string | number | boolean;
  onClick: () => void;
}

function useFormControl<T>( {Fn , bookId, option, onClick }: UseFormControl<T>) {
  const { control, handleSubmit, watch, getValues } = useForm({ mode: 'onChange' });
  const [isButtonActive, setIsButtonActive] = useState(false);
  const value = Object.values(watch()).every((el) => el);

  const formData = {
    option,
    bookId,
    content : getValues('content')
  }
  //@ts-ignore
  const mutation = Fn(formData);
  
  const onSubmit = () => {
    mutation.mutate()
    onClick();
  };

  useEffect(() => {
    setIsButtonActive(option ? value && !!option : value);
  }, [option, value])

  return { control, handleSubmit, isButtonActive, onSubmit}
}

export default useFormControl