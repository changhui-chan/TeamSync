'use client';
import { useAtom } from 'jotai';

import { accessTokenAtom, userAtom } from '@/store/userAtom';

const MyHistory = () => {
  const [accessToken] = useAtom(accessTokenAtom);
  const [user] = useAtom(userAtom);

  return accessToken ? (
    <p>환영합니다, {user.nickname}님!</p>
  ) : (
    <p>로그인이 필요합니다.</p>
  );
};

export default MyHistory;
