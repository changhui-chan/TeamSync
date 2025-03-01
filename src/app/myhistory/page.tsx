'use client';

import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import { useRefreshAccessToken } from '@/hook/useRefresh';
import { accessTokenAtom } from '@/store/userAtom';

const MyHistory = () => {
  const refreshAccessToken = useRefreshAccessToken();
  const [accessToken] = useAtom(accessTokenAtom);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const checkRefresh = async () => {
      if (isRefreshing) return;
      setIsRefreshing(true);

      try {
        const result = await refreshAccessToken({
          refreshToken: '리프레시',
        });
        console.log(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsRefreshing(false);
        console.log(accessToken);
      }
    };

    checkRefresh();
  }, [refreshAccessToken, accessToken, isRefreshing]);

  return (
    <div className="p-4">
      <p>{accessToken}</p>
    </div>
  );
};

export default MyHistory;
