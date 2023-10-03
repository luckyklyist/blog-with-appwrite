import React from "react";

interface InputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  className?: string;
}

const Input = React.forwardRef(function Input(
  { name, label, type, placeholder, className }: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <div className={`form-group ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input
        ref={ref}
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
      />
    </div>
  );
});

export default Input;
