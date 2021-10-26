import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
}

interface ChallengesContextData {
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    activeChallenge: Challenge;
}

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [activeChallenge, setActiveChallenge] = useState(null)

    // Notificação desktop
    useEffect(() => {
        Notification.requestPermission();
    }, [])

    function startNewChallenge() {
        //esse math.random retorna um num aleatório entre 0 e 1
        //se eu quiser que ele mostre um numero aleatório entre 0 e alguma coisa, preciso dizer qual multiplicando
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)

        // Notificação desktop
        if (Notification.permission === 'granted') {
            new Notification('Novo desafio!!')
        }
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }
    }

    return (
        <ChallengesContext.Provider value={{
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            completeChallenge
        }} >
            {children}
        </ChallengesContext.Provider >
    )
}