'use client';

import React, { useLayoutEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  VStack,
} from '@chakra-ui/react';
import styles from './AgeVerificationModal.module.scss';

interface AgeVerificationModalProps {
  onReady: () => void;
}

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

  const handleDecline = (): void => {
    window.location.href = 'https://google.com';
  };

  return (
    <Modal isOpen={isOpen} onClose={handleDecline} isCentered>
      <ModalOverlay />
      <ModalContent className={styles.modal}>
        <ModalHeader>Подтвердите ваш возраст</ModalHeader>
        <ModalBody>
          <VStack spacing={4}>
            <Text>Вам должно быть 18 лет или больше для входа на сайт.</Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button className={styles.button} onClick={handleConfirm}>
            Мне есть 18
          </Button>
          <Button className={styles.buttonAlt} onClick={handleDecline}>
            Выйти
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AgeVerificationModal;
