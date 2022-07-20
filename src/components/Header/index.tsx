import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.scss';

interface HeaderProps {
  isExtended?: boolean;
}

export function Header({ isExtended = false }: HeaderProps): JSX.Element {
  return (
    <header className={styles.container}>
      <div className={`${styles.wrapper} ${isExtended ? styles.extended : ''}`}>
        <Link href="/">
          <figure className={styles['container-logo']}>
            <Image
              title="space traveling"
              src="/assets/icons/logo.svg"
              alt="logo"
              width="238"
              height="25"
            />
          </figure>
        </Link>
      </div>
    </header>
  );
}
