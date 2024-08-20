import Image from 'next/image';
import Link from 'next/link';
import styles from './menuPosts.module.css';

function MenuPosts({ withImage }) {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="123" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h4 className={styles.postTitle}>
            Lorem ipsum dolor sit amet adipisicing elit.
          </h4>
          <div className={styles.detail}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="123" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            culture
          </span>
          <h4 className={styles.postTitle}>
            Lorem ipsum dolor sit amet adipisicing elit.
          </h4>
          <div className={styles.detail}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="123" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>food</span>
          <h4 className={styles.postTitle}>
            Lorem ipsum dolor sit amet adipisicing elit.
          </h4>
          <div className={styles.detail}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="123" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            fashion
          </span>
          <h4 className={styles.postTitle}>
            Lorem ipsum dolor sit amet adipisicing elit.
          </h4>
          <div className={styles.detail}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuPosts;
