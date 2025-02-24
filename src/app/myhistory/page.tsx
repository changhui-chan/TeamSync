'use client';
import { useAtom } from 'jotai';

import { accessTokenAtom, userAtom } from '@/store/userAtom';

const MyHistory = () => {
  const [accessToken] = useAtom(accessTokenAtom);
  const [user] = useAtom(userAtom);

  return accessToken ? (
    <p>{user.nickname}님! 안녕하세요</p>
  ) : (
    <p>로그인이 필요합니다.</p>
  );
};

export default MyHistory;
