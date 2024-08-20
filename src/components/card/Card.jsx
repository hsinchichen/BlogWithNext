import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

function Card() {
  return (
    <Link href="/">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="p1" fill quality={80} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.data}>11.02.2024 - </span>
            <span className={styles.category}>CULTURE</span>
          </div>
          <h1>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <Link className={styles.link} href="/">
            Read More
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default Card;
