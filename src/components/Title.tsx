import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/title.module.css'

export function Title() {

    return (

        <div className={styles.titleContainer}>

            <h2>
                POMODOREM
            </h2>

        </div >
    )
}