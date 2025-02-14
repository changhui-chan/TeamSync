export const handleBackdropClick = (
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  close: () => void
) => {
  if (e.target === e.currentTarget) {
    close();
  }
};
