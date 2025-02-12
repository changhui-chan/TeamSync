interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className: string;
  isError: boolean;
  noneBorder: string;
  errorBorder: string;
  errorMessage?: string;
  errorColor?: string;
}

const Input = ({
  name,
  className,
  isError,
  errorBorder,
  noneBorder,
  errorMessage,
  errorColor,
  ...rest
}: InputProps) => {
  return (
    <div>
      <input
        name={name}
        className={`${className} ${isError ? errorBorder : noneBorder}`}
        {...rest}
      />
      {isError && errorMessage && <p className={errorColor}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
