'use client';

import { type ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';

import { useEscapeKey } from '@/hook/useEscapeKey';
import { useReset } from '@/hook/useReset';
import { useTrapFocus } from '@/hook/useTrapFocus';
import { handleBackdropClick } from '@/util/clickHandlers';

import { useModal } from './hook/useModal';

export const Modal = ({ children }: { children: ReactNode }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { modalState, close } = useModal();

  useTrapFocus(modalRef);

  useEscapeKey(close);
  useReset(close);

  if (!modalState) return null;

  return createPortal(
    <div
      className="modal-overlay"
      onClick={(e) => handleBackdropClick(e, close)}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      ref={modalRef}
    >
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
};
