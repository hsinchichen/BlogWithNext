import Image from 'next/image';
import style from './navbar.module.css';
import facebookImg from '/public/facebook.png';
import instagramImg from '/public/instagram.png';
import tiktokImg from '/public/tiktok.png';
import youtubeImg from '/public/youtube.png';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image
          src={facebookImg}
          alt="facebookImg"
          width={24}
          height={24}
          quality={80}
        />
        <Image
          src={instagramImg}
          alt="instagramkImg"
          width={24}
          height={24}
          quality={80}
        />
        <Image
          src={tiktokImg}
          alt="tiktokImg"
          width={24}
          height={24}
          quality={80}
        />
        <Image
          src={youtubeImg}
          alt="youtubeImg"
          width={24}
          height={24}
          quality={80}
        />
      </div>
      <div className={style.logo}>lamablog</div>
      <div className={style.links}>
        <ThemeToggle />
        <Link href="/" className={style.link}>
          HomePage
        </Link>
        <Link href="/" className={style.link}>
          Contact
        </Link>
        <Link href="/" className={style.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
}

export default Navbar;
