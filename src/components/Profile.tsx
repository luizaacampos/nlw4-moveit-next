import { useContext } from 'react'
import { ChallengesContext } from '../contexts/challengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/luizaacampos.png" alt="Luiza Campos" />
            <div>
                <strong>Luiza Campos</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}