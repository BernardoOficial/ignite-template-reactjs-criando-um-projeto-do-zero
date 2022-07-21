import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const routeIsIndex = router.pathname === '/';

  return (
    <>
      {routeIsIndex ? <Header isExtended /> : <Header isExtended={false} />}
      <Component {...pageProps} />
    </>
  );
}
