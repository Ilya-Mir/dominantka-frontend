import styles from './styles.module.scss';

const Component = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Заголовок</h1>
        <button className={styles.button}>Кнопка</button>
      </div>
    </div>
  );
};

export default Component;