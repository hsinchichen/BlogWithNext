import Link from 'next/link';
import styles from './menu.module.css';
import Image from 'next/image';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategories from '../menuCategories/MenuCategories';

function Menu() {
  return (
    <div className={styles.container}>
      <h3 className={styles.subTitle}>What is hot</h3>
      <h2 className={styles.title}>Most Popular</h2>
      <MenuPosts withImage={true} />
      <h3 className={styles.subTitle}>Discover by topic</h3>
      <h2 className={styles.title}>Categories</h2>
      <MenuCategories />
      <h3 className={styles.subTitle}>Chosen by the editor</h3>
      <h2 className={styles.title}>Editors Pick</h2>
      <MenuPosts withImage={false} />
    </div>
  );
}

export default Menu;
