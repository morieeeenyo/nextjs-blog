import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          // 直接scriptを書く
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}