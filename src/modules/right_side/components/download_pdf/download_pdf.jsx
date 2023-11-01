import React from 'react'
import styles from './styles.module.scss'

export default function DownloadPDF({ localization }) {
    return (
        <a
            href={localization.link}
            target='_blanc'
            className={styles.download}>
            {localization.title}
        </a>
    )
}
