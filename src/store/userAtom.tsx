import { atom } from 'jotai';

import type { Auth } from '@/api/type';

export const userAtom = atom<Auth.User>({} as Auth.User);
export const accessTokenAtom = atom<string>('');
