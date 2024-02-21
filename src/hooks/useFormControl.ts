import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { UseMutationResult } from '@tanstack/react-query';

interface UseFormControl<T, S> {
  postFn : (data: T) => UseMutationResult<any, Error, void, void>;
  putFn ?:  (putFormData: S) => UseMutationResult<any, Error, void, void>;
  edit?: boolean;
  bookId: number;
  option ?:  {required ?: number, optional ?: number }
  onClick: () => void;
  initialValue?: {};
}

function useFormControl<T, S>({postFn, putFn, edit, bookId, option, onClick, initialValue }: UseFormControl<T, S>) {
  const { control, handleSubmit, watch, getValues } = useForm({ mode: 'onChange', defaultValues: initialValue || {} });
  const [isButtonActive, setIsButtonActive] = useState(false);
  const value = Object.values(watch()).every((el) => el);
  const content = getValues();

  const postFormData = {
    option : option?.required,
    bookId,
    ...content,
  }
  const putFormData = {
    option: option?.optional,
    ...content,
  }
 
  const mutation = (edit && putFn) ? putFn(putFormData) : postFn(postFormData);
  
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