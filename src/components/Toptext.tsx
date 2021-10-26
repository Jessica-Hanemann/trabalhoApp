import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/top.module.css'

export function Toptext() {

    return (

        <div className={styles.topContainer}>

            <p>
                Bem vindo ao <strong>POMODOREM!</strong><br /><br />
                Para iniciar um ciclo de 30 minutos basta iniciar o contador no botão"Iniciar um ciclo",<br />
                ao zerar, será lançado um desafio de alongamento ao lado, e ao realizá-lo basta recomeçar o ciclo.
                <br /><br />
                Bom trabalho!!

            </p>

        </div >
    )
}