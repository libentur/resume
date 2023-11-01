import React from 'react'
import styles from './styles.module.scss'

export default function Introduction({ localization }) {
    return (
        <div>
            <h2>{localization.title}</h2>
            <div className={styles.introduction}>
                {localization.content.map((element, index) => (
                    <p key={index}>{element}</p>
                ))}
            </div>
        </div>
    )
}
