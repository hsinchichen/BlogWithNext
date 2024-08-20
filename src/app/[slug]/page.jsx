import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Memu";
import Comments from "@/components/comments/Comments";

export default function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Discover my stories and creative ideas.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImage}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>01.01.2024 </span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.des}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate, quam nisi magni ea laborum inventore voluptatum
              laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
              quisquam! Harum unde sit culpa debitis.
            </p>
            <h2>Lorem ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate, quam nisi magni ea laborum inventore voluptatum
              laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
              quisquam! Harum unde sit culpa debitis.
            </p>
            <h2>Lorem ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate, quam nisi magni ea laborum inventore voluptatum
              laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
              quisquam! Harum unde sit culpa debitis.
            </p>
            <h2>Lorem ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate, quam nisi magni ea laborum inventore voluptatum
              laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
              quisquam! Harum unde sit culpa debitis.
            </p>
            <h2>Lorem ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate, quam nisi magni ea laborum inventore voluptatum
              laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
              quisquam! Harum unde sit culpa debitis.
            </p>
            <h2>Lorem ipsum dolor</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate, quam nisi magni ea laborum inventore voluptatum
              laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
              quisquam! Harum unde sit culpa debitis.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
