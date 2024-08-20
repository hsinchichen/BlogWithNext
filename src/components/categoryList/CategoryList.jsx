import Link from 'next/link';
import styles from './categoryList.module.css';
import Image from 'next/image';

function CategoryList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image src="/style.png" alt="img_1" width={32} height={32} />
          style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image src="/fashion.png" alt="img_1" width={32} height={32} />
          Fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.food}`}
        >
          <Image src="/food.png" alt="img_1" width={32} height={32} />
          Food
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image src="/travel.png" alt="img_1" width={32} height={32} />
          Travel
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image src="/style.png" alt="img_1" width={32} height={32} />
          culture
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.codeing}`}
        >
          <Image src="/coding.png" alt="img_1" width={32} height={32} />
          codeing
        </Link>
      </div>
    </div>
  );
}

export default CategoryList;
