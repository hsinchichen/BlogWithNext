import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Comments() {
  const status = "authenticalted";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticalted" ? (
        <div className={styles.write}>
          <textarea
            name=""
            id=""
            placeholder="write a comment..."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt=""
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.des}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt=""
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.des}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt=""
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.des}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
        </div>
      </div>
    </div>
  );
}
