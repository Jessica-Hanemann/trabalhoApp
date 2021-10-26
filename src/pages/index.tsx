import { Toptext } from "../components/toptext";
import { Title } from "../components/Title";
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Início | pomodorem </title>
      </Head>

      <CountdownProvider>
        <section>

          <div>
            <Toptext />
            <Title />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />
          </div>

        </section>
      </CountdownProvider>

    </div>
  )
}
