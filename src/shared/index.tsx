import { useForm } from 'react-hook-form';

interface FormProps {
  title: string;
  name: string;
  placeholder?: string;
  onSubmit: (data: Record<string, any>) => void;
}

const MyForm = ({ title, name, placeholder, onSubmit }: FormProps) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor={name}>{title}</label>
      <input id={name} {...register(name)} placeholder={placeholder} />
      <button type="submit">제출</button>
    </form>
  );
};

export default MyForm;
