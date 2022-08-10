import { useState } from "react";
import styles from "styles/nav.module.css";
const Nav = () => {
  const [navIsOpen, setNavIsOpen]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState<boolean>(false);

  const toggleNav = () => {
    setNavIsOpen((prev: boolean) => !prev);
  };

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className={styles.btnText}></span>
      </button>
      <ul className={styles.list}>
        <li>
          <button>会社紹介</button>
        </li>
        <li>
          <button>お知らせ</button>
        </li>
        <li>
          <button>サービス</button>
        </li>
        <li>
          <button>制作実績</button>
        </li>
        <li>
          <button>採用情報</button>
        </li>
        <li>
          <button className={styles.inquiry}>お問い合わせ</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
