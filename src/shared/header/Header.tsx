import { useState } from 'react';
import { useRouter } from 'next/router';

import Logo from './components/Logo';

const Header = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
              <div>메뉴 버튼</div>
              <Logo />
            </div>
          ) : (
            <div>
              <Logo />
              <div>
                <div>경영관리팀</div>
                <div>드롭다운 아이콘</div>
              </div>
              <div>자유게시판</div>
            </div>
          )}
          {isLogin ? (
            <div>
              <div>아바타 이미지</div>
              <div>Username</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
