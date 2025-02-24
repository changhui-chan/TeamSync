import { useAtom } from 'jotai';

import { modalAtomFamily } from '../atom/modalAtom';

export const useModal = (id: string) => {
  const [isOpen, setIsOpen] = useAtom(modalAtomFamily(id));

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
  };
};
