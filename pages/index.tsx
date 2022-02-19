import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Provider } from '@self.id/framework'
import Connection from '../components/Connection'

const Home: NextPage = () => {
  return (
    <Provider client={{ ceramic: 'testnet-clay' }}>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to Hashchat
          </h1>
          <Connection/>
        </main>
      </div>
    </Provider>
  )
}

export default Home
