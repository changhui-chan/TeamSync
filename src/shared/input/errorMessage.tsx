interface ErrorMessagesProps {
  errorClass?: string;
  errorMessage?: string;
}

const ErrorMessages: React.FC<ErrorMessagesProps> = ({
  errorClass,
  errorMessage,
}) => {
  return errorMessage ? <p className={errorClass}>{errorMessage}</p> : null;
};

export default ErrorMessages;
