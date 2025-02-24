'use client';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useSetAtom } from 'jotai';
import { useCookies } from 'react-cookie';

import { postRefreshToken } from '@/api/index';
import type { Auth } from '@/api/type';
import { accessTokenAtom } from '@/store/userAtom';

export const useRefreshAccessToken = () => {
  const [cookies, removeCookie] = useCookies(['refreshToken']);
  const setAccessToken = useSetAtom(accessTokenAtom);

  const { mutateAsync } = useMutation<
    Auth.RefreshTokenResponse,
    AxiosError,
    Auth.RefreshTokenRequest
  >({
    mutationFn: postRefreshToken,
    onSuccess: (data) => {
      sessionStorage.setItem('accessToken', data.accessToken);
      setAccessToken(data.accessToken);
      console.log('리프래시 토큰 갱신', data.accessToken);
    },
  });

  useEffect(() => {
    const refreshAccessToken = async () => {
      const refreshToken = cookies.refreshToken;
      if (!refreshToken) {
        return;
      }
      try {
        await mutateAsync({ refreshToken });
      } catch (error) {
        console.error('갱신 오류', error);
      }
    };

    const intervalId = setInterval(refreshAccessToken, 10 * 1000);

    return () => clearInterval(intervalId);
  }, [mutateAsync]);

  return mutateAsync;
};
