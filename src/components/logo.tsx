import styles from "styles/logo.module.css";

const Logo = () => {
  return (
    <div>
      <button className={styles.flexContainer}>
        <span className={styles.logo}>
          <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="" />
        </span>
        <span className={styles.logoText}>
          株式会社FLAT
          <span className={styles.logoSubText}>
            渋谷のコーディング専門プロダクション
          </span>
        </span>
      </button>
    </div>
  );
};

export default Logo;
