import React from 'react'
import styles from './styles.module.scss'

export default function Hobby({ localization }) {
    return (
        <div>
            <h2>{localization.title}</h2>
            <div className={styles.hobby}>
                {localization.content.map((element, index) => (
                    <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: element }}
                    />
                ))}
            </div>
        </div>
    )
}
