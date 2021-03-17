import Link from 'next/link';
import Head from 'next/head';
import Layout from "../coponents/Layout";


const About = () => (
    <Layout
        mainTitle={'My about build with Next JS'}
        footer={`Copyright ${new Date().getFullYear()}`}
    >
        <Head>
            <title>About page</title>
        </Head>
        <h2>About page</h2>
        <Link href="/">Home page</Link>
    </Layout>
);

export default About;