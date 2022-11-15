import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#012801] lg:h[140vh]">
      <Head>
        <title>Rick and Morty Website</title>
        <link rel="icon" href="/rick.ico" />
      </Head>
      <Header/>
      <main className=''>
          <Banner/>
      </main>
    </div>
  )
}

export default Home
