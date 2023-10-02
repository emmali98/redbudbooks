import Head from 'next/head';
import Link from 'next/link';
import structure from '../styles/structure.module.scss';

export default function Layout({ children, styles }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href={styles} />
        <meta
          name="description"
          content="Redbud Books, an independent bookstore"
        />
        <meta name="og:title" content="Redbud Books" />
      </Head>
      <header className={structure.header}>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/collections">Collections</Link></li>
            <li><Link href="/support">Support Us</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
      </header>
      <main id="redbudbooks">{children}</main>
      <footer className={structure.footer}>
        <div className={structure.newsletter}>
            Subscribe to our newsletter:
        </div>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/collections">Collections</Link></li>
            <li><Link href="/support">Support Us</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
        <ul className={structure.socials}>
            <li><Link href="https://www.instagram.com/redbudbooks/">Instagram</Link></li>
            <li><Link href="/">Paypal (TBD)</Link></li>
        </ul>
      </footer>
    </div>
  );
}
