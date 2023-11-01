import React from 'react'
import styles from './styles.module.scss'

export default function Competence({ localization }) {
    return (
        <div>
            <h2>{localization.title}</h2>
            <div className={styles.competence}>
                {localization.content.map((element, index) => (
                    <div key={index}>
                        <h3>{element.title}:</h3>
                        <span>{element.parts}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
