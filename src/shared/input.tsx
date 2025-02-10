interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  isError: boolean;
  noneBorder: string;
  errorBorder: string;
  errorMessage?: string;
}

const Input = ({
  name,
  type,
  placeholder,
  className,
  value,
  onChange,
  onBlur,
  isError,
  errorBorder,
  noneBorder,
  errorMessage,
}: InputProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        className={`${className} ${isError ? errorBorder : noneBorder}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isError && errorMessage && (
        <p className="text-sm text-error">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
