import Head from 'next/head';
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
                    <div className={styles.logo}>
                        <img
                            src="/images/redbudlogo-circlewordless.svg"
                        ></img>
                    </div>
                    <div className={styles.text}>
                        <h1>Redbud Books</h1>
                        <p>W Kirkwood Ave</p>
                        <p>Bloomington, IN</p>
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