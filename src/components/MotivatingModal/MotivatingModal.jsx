import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { Overlay, ModalWindow } from './MotivatingModal.styled';
import PropTypes from 'prop-types';

export default function Modal({ onClose, children, isMenu }) {
  useEffect(() => {
    const escapeListener = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    document.querySelector('html').style.overflow = 'hidden';
    window.addEventListener('keydown', escapeListener);

    return () => {
      document.querySelector('html').style.overflow = 'visible';
      window.removeEventListener('keydown', escapeListener);
    };
  }, [onClose]);

  const handleOverlayClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalWindow isMenu={isMenu}>{children}</ModalWindow>
    </Overlay>,
    document.querySelector('#modal-root')
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};