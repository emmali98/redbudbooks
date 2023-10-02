import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Redbud Books</title>
            </Head>
            <section className={styles.opener}>
                <div className={styles.card}>
                    <div className={styles.logo}><Image
                        src="/images/redbud logo red.png"
                        alt="Redbud Books Logo"
                        layout='fill'
                        objectFit='contain'
                    /></div>
                    <div className={styles.text}>
                        <p>Bloomington, IN</p>
                        <h1>Redbud Books</h1>
                        <h2>W Kirkwood Ave</h2>
                        <p>Opening Fall 2023!</p>
                    </div>
                </div>
            </section>
            <section className={styles.intro}>
                <p>We're creating a beautiful, welcoming, volunteer-run community bookstore in Bloomington, Indiana.</p>
            </section>
        </Layout>
    )
}