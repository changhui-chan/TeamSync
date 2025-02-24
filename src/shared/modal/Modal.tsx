'use client';

import { type ReactNode, useRef } from 'react';
import { useId } from 'react';
import React from 'react';
import { createPortal } from 'react-dom';
import { CgClose } from 'react-icons/cg';

import { useEscapeKey } from '@/hook/useEscapeKey';
import { useReset } from '@/hook/useReset';
import { useTrapFocus } from '@/hook/useTrapFocus';
import { handleBackdropClick } from '@/util/clickHandlers';

import { useModal } from './hook/useModal';

export const Modal = React.memo(
  ({
    title,
    children,
    withCloseButton = false,
    overlay = 'modal-overlay',
    modal = 'modal',
  }: {
    title: string;
    children: ReactNode;
    withCloseButton?: boolean;
    overlay?: string;
    modal?: string;
  }) => {
    const generatedId = useId();

    const modalRef = useRef<HTMLDivElement>(null);

    const { isOpen, close, open } = useModal(generatedId);

    useTrapFocus(modalRef, isOpen);
    useEscapeKey(close, isOpen);
    useReset(close);

    const modalView = isOpen && (
      <div
        className={overlay}
        onClick={(e) => handleBackdropClick(e, close)}
        role="dialog" //상호작용을 필요로 하는 UI임을 의미
        aria-modal="true" //모달이 열려 있을 때 다른 콘텐츠와 상호작용을 차단함을 의미
        ref={modalRef}
        id={generatedId}
        tabIndex={-1}
      >
        <div className={modal}>
          {withCloseButton && (
            <button className="ml-auto block" onClick={close}>
              <CgClose />
            </button>
          )}
          <div className="modal-content">{children}</div>
        </div>
      </div>
    );

    return (
      <>
        <button onClick={open} id={generatedId} tabIndex={-1}>
          {title}
        </button>
        {modalView &&
          createPortal(modalView, document.getElementById('modal-root')!)}
      </>
    );
  }
);

Modal.displayName = 'Modal';
