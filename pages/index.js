import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Punchlords</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Join the discord rn" />
        <p className="description">
          <a href= discord.gg/xn3K28W9eu><button>Punchlords</button></a> </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
