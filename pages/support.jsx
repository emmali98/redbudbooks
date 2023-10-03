import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Redbud Books | Support Us</title>
            </Head>
            <section className='content'>
                <h1>Support Us</h1>
                <p>Here are some ways to support us!</p>
            </section>
        </Layout>
    )
}