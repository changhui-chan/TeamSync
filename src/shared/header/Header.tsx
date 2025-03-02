'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { useIsMobile } from '@/hook/useDevice';

import Forum from './components/Forum';
import Logo from './components/Logo';
import Menu from './components/Menu';
import TeamNav from './components/TeamNav';
import UserProfile from './components/UserProfile';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLogin, setIsLogin] = useState(true);
  //const isMobile = useIsMobile();
  const isMobile = false;

  const navigateTo = (path: string, scroll = true) => {
    router.push(path, { scroll: scroll });
  };

  return (
    <header className="sticky top-[0] flex h-[60px] w-screen items-center justify-center">
      {pathname === '/' ? (
        <Logo />
      ) : (
        <div className="flex h-[32px] w-[1200px] flex-row items-center justify-between">
          {isMobile ? (
            <div className="flex flex-row items-center gap-[16]">
              <Menu />
              <Logo />
            </div>
          ) : (
            <div className="flex flex-row items-center gap-[40]">
              <Logo />
              <TeamNav />
              <Forum />
            </div>
          )}
          {isLogin ? (
            <UserProfile />
          ) : (
            <div className="h-[16px] w-[16px]">&nbsp;</div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
