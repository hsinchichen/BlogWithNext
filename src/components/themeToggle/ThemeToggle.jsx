'use client';

import Image from 'next/image';
import styles from './themeToggle.module.css';

import sun from '/public/sun.png';
import moon from '/public/moon.png';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);

  console.log(theme, toggle);

  return (
    <div
      className={styles.container}
      style={theme === 'dark' ? { background: '#fff' } : { background: '#000' }}
      onClick={toggle}
    >
      <Image src={moon} alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === 'dark'
            ? { left: 1, background: '#0f172a' }
            : { right: 1, background: 'white' }
        }
      ></div>
      <Image src={sun} alt="sun" width={14} height={14} />
    </div>
  );
}

export default ThemeToggle;
