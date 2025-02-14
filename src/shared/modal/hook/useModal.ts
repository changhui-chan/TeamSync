import { atom, useAtom } from 'jotai';

const modalAtom = atom(false);

export const useModal = () => {
  const [modalState, setModalState] = useAtom(modalAtom);

  return {
    modalState,
    open: () => setModalState(true),
    close: () => setModalState(false),
  };
};
