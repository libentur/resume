import React from 'react'
import styles from './styles.module.scss'

export default function SocialLinks() {
    const DATA = {
        GITHUB: {
            LINK: 'https://github.com/libentur',
            SVG: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'>
                    <path d='m24,0C10.74,0,0,10.74,0,24s10.74,24,24,24,24-10.74,24-24S37.26,0,24,0Zm11.59,19.96c0,6.66-3.96,8.13-7.71,8.54.71.75,1.15,1.77,1.15,2.9,0,.11,0,.21-.01.32h0c0,2.3-.02,4.17-.02,4.74,0,.12.02.23.06.34-1.34.34-2.75.52-4.2.52s-2.89-.19-4.25-.53c.03-.11.05-.21.05-.32,0-.41-.01-1.5-.02-2.94-4.7,1.05-5.7-2.33-5.7-2.33-.32-1.07-.99-1.95-1.87-2.53h-.01c-1.54-1.09.12-1.07.12-1.07,1.11.16,2.05.83,2.58,1.77h0c.63,1.16,1.81,1.93,3.17,1.93.65,0,1.26-.18,1.78-.49h-.01c.09-.91.47-1.71,1.07-2.31-3.75-.43-7.7-1.93-7.7-8.57v-.1c0-1.76.66-3.36,1.74-4.55-.22-.63-.36-1.34-.36-2.1,0-.89.18-1.72.51-2.49,0,0,1.42-.46,4.65,1.78,1.27-.37,2.72-.59,4.23-.59s2.97.21,4.34.62l-.12-.03c3.21-2.24,4.63-1.78,4.63-1.78.32.74.51,1.61.51,2.52,0,.74-.13,1.46-.35,2.12v-.04c1.09,1.19,1.75,2.79,1.75,4.55v.11h-.02Z' />
                </svg>
            )
        },
        TELEGRAM: {
            LINK: 'https://t.me/libentur',
            SVG: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'>
                    <path d='m24,0C10.74,0,0,10.74,0,24s10.74,24,24,24,24-10.74,24-24S37.26,0,24,0Zm9.59,17.06c-.33,3.41-1.73,11.69-2.45,15.52-.3,1.62-.9,2.17-1.47,2.21-1.26.12-2.2-.83-3.41-1.62-1.9-1.25-2.98-2.03-4.82-3.24-2.13-1.4-.76-2.19.46-3.43.32-.33,5.85-5.35,5.95-5.81v-.09c0-.12-.04-.21-.11-.29-.07-.05-.16-.07-.27-.07-.06,0-.13,0-.18.04-.19.04-3.22,2.05-9.11,6.02-.64.5-1.45.83-2.34.86-1.26-.15-2.39-.44-3.47-.83l.11.04c-1.35-.45-2.42-.67-2.34-1.42.05-.38.59-.78,1.6-1.19,6.29-2.74,10.5-4.54,12.6-5.43,2.31-1.23,5-2.24,7.83-2.9l.22-.05h.03c.3,0,.58.1.81.26.16.15.28.35.31.58.03.18.05.38.05.59v.28h-.01Z' />
                </svg>
            )
        },
        MAIL: {
            LINK: 'libentur@protonmail.com',
            SVG: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'>
                    <path d='m24,0C10.74,0,0,10.74,0,24s10.74,24,24,24,24-10.74,24-24S37.26,0,24,0Zm-11.05,15.2h22.06c1.17,0,.57,1.5-.07,1.89s-9.44,5.71-9.78,5.91c-.33.19-.76.3-1.18.3s-.82-.1-1.18-.3l-9.78-5.91c-.64-.38-1.24-1.89-.07-1.89h.02Zm22.78,16.13c0,.62-.74,1.47-1.3,1.47H13.57c-.57,0-1.3-.85-1.3-1.47v-10.7c0-.27,0-.62.5-.32l10.03,5.91c.35.21.77.32,1.18.3.43,0,.74-.03,1.18-.3l10.07-5.91c.51-.3.5.05.5.32v10.7Z' />
                </svg>
            )
        }
    }

    return (
        <div className={styles.social_links}>
            <a
                className={styles.github}
                href={DATA.GITHUB.LINK}
                target='_blanc'>
                {DATA.GITHUB.SVG}
            </a>
            <a
                className={styles.telegram}
                href={DATA.TELEGRAM.LINK}
                target='_blanc'>
                {DATA.TELEGRAM.SVG}
            </a>
            <a
                className={styles.mail}
                href={`mailto:${DATA.MAIL.LINK}`}
                target='_blanc'>
                {DATA.MAIL.SVG}
            </a>
        </div>
    )
}
