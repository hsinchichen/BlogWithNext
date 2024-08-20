import Image from 'next/image';
import styles from './feature.module.css';
import image_1 from '/public/p1.jpeg';

function Feature() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey,lama dev here!</b>Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={image_1} alt="p1" fill quality={80} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTile}>
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h2>
          <p className={styles.postDes}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
