import { useState } from 'react';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLandingPage, setIsLandingPage] = useState(false);

  return (
    <header className="sticky top-0 flex h-60 w-max justify-between">
      {isLandingPage ? (
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
