import { useAtom } from 'jotai';

import { modalAtom } from '../atom/modalAtom';

export const useModal = (id: string) => {
  const [modal, setModal] = useAtom(modalAtom);

  return {
    modalState: modal[id] ?? false,
    open: () => setModal((prev) => ({ ...prev, [id]: true })),
    close: () => setModal((prev) => ({ ...prev, [id]: false })),
  };
};
