import Link from 'next/link';
import styles from './header.module.scss';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Header = () => {
  return (
    <header className={styles.postHeader}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="logo" className={styles.logo} />
        </a>
      </Link>
    </header>
  );
};
export default Header;
