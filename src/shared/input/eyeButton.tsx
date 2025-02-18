import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface EyeButtonProps {
  isVisible: boolean;
  onClick: () => void;
}
const EyeButton = ({ isVisible, onClick }: EyeButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>
        {isVisible ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};
export default EyeButton;
