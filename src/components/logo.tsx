import { useContext } from "react";
import { navIsOpenContext } from "components/header";
import styles from "styles/logo.module.css";

const Logo = () => {
  // @ts-ignore
  const { navIsOpen } = useContext(navIsOpenContext);
  console.log(useContext(navIsOpenContext));
  return (
    <button className={`${styles.flexContainer} ${navIsOpen && styles.open}`}>
      <span className={styles.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43.811"
          height="30"
          viewBox="0 0 43.811 30"
        >
          <defs>
            <clipPath id="clip-path">
              <rect width="43.811" height="30" fill="none" />
            </clipPath>
          </defs>
          <g id="logo" clip-path="url(#clip-path)">
            <path
              id="パス_754"
              data-name="パス 754"
              d="M449.36,347.419a12.143,12.143,0,0,0-2.516-4.394,9.522,9.522,0,0,0-4.41-2.76,20.408,20.408,0,0,0-6.118-.855H423.14l-5.855,8.483-5.69-8.483h-5.361l8.387,12.2-8.387,12.14H411.6l5.69-8.42,5.855,8.42h5.2l-8.42-12.14,5.515-7.993h10.884q4.773,0,7.072,2.5a8.073,8.073,0,0,1,1.6,2.582,8.311,8.311,0,0,1,.543,2.946,9.016,9.016,0,0,1-.493,2.859,7.024,7.024,0,0,1-1.582,2.631q-2.236,2.4-7,2.4H435V349.069h-4.506V363.75h5.857a18.568,18.568,0,0,0,6.282-.891,10.743,10.743,0,0,0,4.24-2.826,11.783,11.783,0,0,0,2.322-3.8,13.534,13.534,0,0,0,.836-4.882A14.041,14.041,0,0,0,449.36,347.419Z"
              transform="translate(-406.234 -339.41)"
              fill="#004bb1"
            />
          </g>
        </svg>
      </span>
      <span className={styles.logoText}>
        株式会社FLAT
        <span className={styles.logoSubText}>
          渋谷のコーディング専門プロダクション
        </span>
      </span>
    </button>
  );
};

export default Logo;
