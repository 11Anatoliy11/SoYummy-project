import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as Cross } from '../../images/svg/cross.svg';
import { Overlay, ModalWindow, CloseButton} from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");
export default function Modal({ children, onClose, className, overlayClassName }) {

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleCloseClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay className={overlayClassName} onClick={handleCloseClick}>
      <ModalWindow className={className}>
        {children}
        <CloseButton onClick={onClose}>
        <Cross className="closeBtn"/>
        </CloseButton>
        </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

