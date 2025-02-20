import { useState } from 'react';
import { useRouter } from 'next/router';

import { useIsMobile } from '@/hook/useDevice';

import Forum from './components/Forum';
import Logo from './components/Logo';
import Menu from './components/Menu';
import TeamNav from './components/TeamNav';
import UserProfile from './components/UserProfile';

const Header = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const isMobile = useIsMobile();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <header className="sticky top-0 flex h-60 w-max justify-between">
      {router.pathname === '/' ? (
        <Logo />
      ) : (
        <div>
          {isMobile ? (
            <div>
              <Menu />
              <Logo />
            </div>
          ) : (
            <div>
              <Logo />
              <TeamNav />
              <Forum />
            </div>
          )}
          {isLogin ? <UserProfile /> : <div></div>}
        </div>
      )}
    </header>
  );
};

export default Header;
