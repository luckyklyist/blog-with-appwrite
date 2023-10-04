import React, { useId } from "react";

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  className?: string;
}

function Input(
  { name, label, type, placeholder, className, ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const id = useId();
  return (
    <div className={`form-group m-5 flex flex-col`}>
      {label && (
        <label className="text-xl my-2 px-3" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        ref={ref}
        type={type}
        name={name}
        className={`input input-bordered w-full max-w-xs`}
        placeholder={placeholder}
        id={id}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(Input);
