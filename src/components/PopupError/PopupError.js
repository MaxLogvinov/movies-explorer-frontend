import React from 'react';
import './PopupError.css';
import Inform from '../../images/Inform.svg';

function PopupError({ isOpen, onClose, message }) {
  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onClose);
      return () => document.removeEventListener('keydown', onClose);
    }
  }, [isOpen, onClose]);

  return (
    <section
      className={`popup   ${isOpen ? 'popup_opened' : ''}`}
      onClick={onClose}
    >
      <div
        className="popup__container"
        onClick={(evt) => evt.stopPropagation()}
      >
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <img src={Inform} alt="знак уведомления" className="popup__image" />
        <h2 className="popup__title">{message}</h2>
      </div>
    </section>
  );
}

export default PopupError;
