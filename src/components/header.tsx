import { createContext, useState } from "react";
import Logo from "components/logo";
import Nav from "components/nav";
import styles from "styles/header.module.css";
// @ts-ignore
export const navIsOpenContext = createContext();
const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const toggleNav = () => {
    setNavIsOpen((prev: boolean) => !prev);
  };
  return (
    <header className={styles.header}>
      <div className={styles.flexContainer}>
        <navIsOpenContext.Provider value={{ navIsOpen, toggleNav }}>
          <Logo />
          <Nav />
        </navIsOpenContext.Provider>
      </div>
    </header>
  );
};

export default Header;
