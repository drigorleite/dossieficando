import { useEffect, useRef } from 'react';

/**
 * Comportamento padrão de overlay/modal em tela cheia:
 *  - trava o scroll do body enquanto aberto (sem "vazar" para o fundo);
 *  - fecha com a tecla Escape;
 *  - move o foco para o elemento inicial ao abrir e o restaura ao fechar.
 *
 * @param {() => void} onClose        chamado ao pressionar Escape
 * @param {React.RefObject} initialFocusRef  elemento que recebe foco ao abrir
 */
export function useModalBehavior(onClose, initialFocusRef) {
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const { body } = document;
    const prevOverflow = body.style.overflow;
    body.style.overflow = 'hidden';

    const handleKey = (e) => {
      if (e.key === 'Escape') onCloseRef.current?.();
    };
    document.addEventListener('keydown', handleKey);

    const focusFrame = requestAnimationFrame(() => {
      initialFocusRef?.current?.focus?.();
    });

    return () => {
      body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', handleKey);
      cancelAnimationFrame(focusFrame);
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus();
      }
    };
  }, [initialFocusRef]);
}
