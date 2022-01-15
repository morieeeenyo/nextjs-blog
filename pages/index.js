import Head from "next/head";
import Link from "next/link";
import Alert from "../components/alert";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className="title">
        Read{" "}
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>
      <Alert type={"error"}>
        <h1>hello</h1>
      </Alert>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
