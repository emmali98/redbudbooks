import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Redbud Books | Collections</title>
            </Head>
            <section className="content">
                <h1>Our Collections</h1>
                <p>Visit our <a href="https://bookshop.org/shop/redbudbooks" target="_blank">Bookshop.org</a> site to browse our books!</p>
            </section>
        </Layout>
    )
}