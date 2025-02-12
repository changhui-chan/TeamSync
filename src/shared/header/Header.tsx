import { useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="sticky top-0 flex h-60 w-max justify-between">
      {router.pathname === '/' ? (
        <div>
          <div>Logo 이미지</div>
          <div></div>
        </div>
      ) : (
        <div>
          {isMobile ? (
            <div>
              <div>메뉴 버튼</div>
              <div>Logo 이미지</div>
            </div>
          ) : (
            <div>
              <div>Logo 이미지</div>
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
