import Link from 'next/link';
import Head from "next/head";
import Layout from '../coponents/Layout';

const Index = () => (
    <Layout
        mainTitle={'My home page build with Next JS'}
        footer={`Copyright ${new Date().getFullYear()}`}
    >
        <Head>
            <title>About page</title>
        </Head>
        <h2>hELLO FROM NEXT JS</h2>
        <Link href="/about">About page</Link>
    </Layout>
);

export default Index;