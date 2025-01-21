'use client';

import React, { useLayoutEffect, useState } from 'react';
import Modal from 'react-modal';
import styles from './AgeVerificationModal.module.scss';

interface AgeVerificationModalProps {
  onReady: () => void;
}

Modal.setAppElement('#app-root');

const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({
  onReady,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useLayoutEffect(() => {
    const hasVerifiedAge = sessionStorage.getItem('ageVerified');
    if (!hasVerifiedAge) {
      setIsOpen(true);
    } else {
      onReady();
    }
  }, [onReady]);

  const handleConfirm = (): void => {
    sessionStorage.setItem('ageVerified', 'true');
    setIsOpen(false);
    onReady();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.content}>
        <h1>Подтвердите ваш возраст</h1>
        <p>Вам должно быть 18 лет или больше для входа на сайт.</p>
        <button className={styles.button} onClick={handleConfirm}>
          Мне есть 18
        </button>
      </div>
    </Modal>
  );
};

export default AgeVerificationModal;
