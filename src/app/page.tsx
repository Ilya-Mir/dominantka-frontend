import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        Добро пожаловать
      </header>
      <main>
        {/* Контент главной страницы */}
      </main>
    </div>
  );
};

export default MainPage;