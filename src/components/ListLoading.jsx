import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../components/ListLoading.module.css';

const ListLoading = () => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index}>
          <Skeleton className={styles.title} />
          <Skeleton className={styles.content} />
          <Skeleton className={styles.manufacturer} />
          <Skeleton className={styles.price} />
        </div>
      ))}
    </div>
  );
};

export default ListLoading;
