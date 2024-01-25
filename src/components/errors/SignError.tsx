import React from 'react'

type SignErrorProps =  {
  errors: any
  id: string;
}  

export default function SignError({errors, id}:SignErrorProps) {  

  return (
    <div>
      {errors[id]?.message && (
          <p className="text-14 text-red w-full text-left">{errors[id].message}</p>
      )}
    </div>
  )
}
