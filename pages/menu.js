import Head from 'next/head'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
    <Head>
      <title>Menu</title>
    </Head>
     <Header />
     <main>
      <h1>This is Menu</h1>
     </main>
    </div>
  )
}
