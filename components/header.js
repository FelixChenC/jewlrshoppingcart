import Image from "next/image";
import styles from "./header.module.css";

export const Header = () => (
  <div className={styles.header}>
    <Image
      src="/images/jewlr_logo.png"
      alt="jewlr_logo"
      width="130%"
      height="50%"
    />
    <p className={styles.title}>Shopping Cart</p>
  </div>
);
