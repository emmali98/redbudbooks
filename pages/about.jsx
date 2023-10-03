import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Redbud Books | About Us</title>
            </Head>
            <section className='content'>
                <h1>About Us</h1>
                <p>Our small collective is in the midst of transforming the wreckage of an abandoned strip mall into a world-making commons for thinking and dreaming. Redbud Books is a community-oriented, nonprofit, volunteer-run bookstore that strives to foster creative and intellectual resources for a better collective future. Through our intentional approach to curation, Redbud Books offers a distinctive and evolving selection of books that aim to inspire common thought in dialogue with contemporary debates and struggles over the future of our city and our world. 
                </p>
            </section>
        </Layout>
    )
}