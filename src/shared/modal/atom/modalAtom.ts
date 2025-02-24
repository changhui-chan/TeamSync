import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

export const modalAtomFamily = atomFamily((id: string) => atom(false));
