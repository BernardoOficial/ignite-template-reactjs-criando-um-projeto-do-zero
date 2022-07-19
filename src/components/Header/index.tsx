import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.scss';

export function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <figure className={styles['container-logo']}>
          <Link href="/">
            <Image
              title="space traveling"
              src="/assets/icons/logo.svg"
              alt="space traveling"
              width="238"
              height="25"
            />
          </Link>
        </figure>
      </div>
    </header>
  );
}
