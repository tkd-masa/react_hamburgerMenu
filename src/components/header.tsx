import Logo from "components/logo";
import Nav from "components/nav";
import styles from "styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.flexContainer}>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
