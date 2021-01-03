import Head from 'next/head'
import WebGL from  '../WebGL/index'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WebGL tutorial</title>
      </Head>

      <main>
        <WebGL/>
      </main>
    </div>
  )
}