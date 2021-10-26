import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css'
import { CountdownContext } from '../contexts/CountdownContext';


export function Countdown() {
    const { minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)

    //split 25 '25' '2' '5'
    //padstart ve se tem 2 caracteres, se nao tiver ele preenche com 0
    //5 '05' '0' '5'
    //como ele devolve um array, posso dividir em minuteleft e minuteright

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                    <img src="icons/check.png" alt="check" />

                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                            <img src="icons/close.png" alt="close" />
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                            <img src="icons/start.png" alt="start" />

                        </button>
                    )}
                </>
            )}

        </div>
    )
}