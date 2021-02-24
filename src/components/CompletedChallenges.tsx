import { useContext } from 'react'
import { ChallengesContext } from '../contexts/challengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
    const { completedChallenges } = useContext(ChallengesContext)

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{completedChallenges}</span>
        </div>
    )
}