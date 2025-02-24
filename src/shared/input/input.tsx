'use client';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className: string;
  isError: boolean;
  noneBorder: string;
  errorBorder: string;
  errorMessage?: string;
  errorClass?: string;
  isVisible?: boolean;
  onEyeClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  className,
  isError,
  errorBorder,
  noneBorder,
  isVisible = false,
  onEyeClick,
  onChange,
  ...rest
}: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="relative">
      <input
        name={name}
        className={`${className} ${isError ? errorBorder : noneBorder}`}
        type={name === 'password' && isVisible ? 'text' : 'password'}
        value={inputValue}
        onChange={handleChange}
        {...rest}
      />
      {name === 'password' && inputValue && onEyeClick && (
        <button
          type="button"
          onClick={onEyeClick}
          className="absolute right-3 top-1/2 -translate-y-1/2 transform"
        >
          {isVisible ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  );
};

export default Input;
