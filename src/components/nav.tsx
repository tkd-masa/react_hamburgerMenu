import styles from "styles/nav.module.css";
const Nav = () => {
  return (
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
        <button>お問い合わせ</button>
      </li>
    </ul>
  );
};

export default Nav;
