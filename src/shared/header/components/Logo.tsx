import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex flex-row gap-[2] text-[20px] text-[#10B981]">
      <Image src="/icon/ic-logo.svg" alt="로고" width={16} height={16} />
      <p>TeamSync</p>
    </Link>
  );
};

export default Logo;
