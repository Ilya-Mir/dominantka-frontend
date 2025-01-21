'use client';

import React, { useState } from 'react';
import styles from './MainPage.module.scss';
import AgeVerificationModal from '@/components/AgeVerificationModal';

const MainPage = () => {
  const [isReady, setIsReady] = useState(false);

  const handleReady = () => {
    setIsReady(true);
  };

  return (
    <div className={`${styles.container} ${!isReady ? styles.hidden : ''}`}>
      <AgeVerificationModal onReady={handleReady} />
      {isReady && (
        <>
          <header className={styles.header}>Добро пожаловать</header>
          <main>{/* Контент главной страницы */}</main>
        </>
      )}
    </div>
  );
};

export default MainPage;
