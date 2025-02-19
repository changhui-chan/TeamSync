'use client';

import { type ReactNode, useRef } from 'react';
import { useId } from 'react';
import { createPortal } from 'react-dom';

import { useEscapeKey } from '@/hook/useEscapeKey';
import { useReset } from '@/hook/useReset';
import { useTrapFocus } from '@/hook/useTrapFocus';
import { handleBackdropClick } from '@/util/clickHandlers';

import { useModal } from './hook/useModal';

export const Modal = ({
  title,
  children,
  overlay = 'modal-overlay',
  modal = 'modal',
}: {
  title: string;
  children: ReactNode;
  overlay?: string;
  modal?: string;
}) => {
  const generatedId = useId();
  const modalRef = useRef<HTMLDivElement>(null);

  const { modalState, close, open } = useModal(generatedId);

  useTrapFocus(modalRef);

  useEscapeKey(close);
  useReset(close);

  const modalView = modalState && (
    <div
      className={overlay}
      onClick={(e) => handleBackdropClick(e, close)}
      tabIndex={-1}
      role="dialog" //상호작용을 필요로 하는 UI임을 의미
      aria-modal="true" //모달이 열려 있을 때 다른 콘텐츠와 상호작용을 차단함을 의미
      ref={modalRef}
      id={generatedId}
    >
      <div className={modal}>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );

  return (
    <>
      <button onClick={open}>{title}</button>
      {modalView &&
        createPortal(modalView, document.getElementById('modal-root')!)}
    </>
  );
};
