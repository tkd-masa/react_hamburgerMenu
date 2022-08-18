//@ts-nocheck
import { useState, useEffect, useRef, useContext } from "react";
import styles from "styles/nav.module.css";
import { navIsOpenContext } from "components/header";
const Nav = () => {
  // headerコンポーネントからstateの値をuseContextで取得
  const { navIsOpen, toggleNav } = useContext(navIsOpenContext);
  // スクロールのstate管理
  const [activeScroll, setActiveScroll] = useState(false);
  // スクロール量の保持
  const beforePos = useRef(0);
  // PCスクロール時にヘッダーを入れ替える処理
  const changeHeadNav = () => {
    if (window.pageYOffset < beforePos.current) {
      setActiveScroll(false);
    } else {
      setActiveScroll(true);
    }
    beforePos.current = window.pageYOffset;
  };

  useEffect(() => {
    // イベントリスナーを登録
    window.addEventListener("scroll", changeHeadNav);
  }, []);

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      <button
        className={`${styles.btn} ${activeScroll && styles.showBtn} ${
          navIsOpen && styles.showBtn
        }`}
        onClick={toggleNav}
      >
        <span className={styles.bar}></span>
        <span className={styles.btnText}></span>
      </button>
      <ul className={`${styles.list} ${activeScroll && styles.hideList}`}>
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
