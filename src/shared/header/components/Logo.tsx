import Image from 'next/image';
import { useRouter } from 'next/router';

const Logo = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div onClick={() => navigateTo('/')}>
      <Image src="/ic-logo.svg" alt="로고" width={16} height={16} />
      <p>TeamSync</p>
    </div>
  );
};

export default Logo;
