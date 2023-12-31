import React from 'react'
import styles from './styles.module.scss'

export default function Portfolio({ localization }) {
    const SVG = {
        GLOBAL: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 48 40.45'>
                <path d='m39.48,8.72c-1.37-.54-2.93.18-3.43,1.56-.54,1.38.18,2.92,1.56,3.43,1.7.64,3.13,1.9,4.02,3.5,2.18,3.98.82,9.17-3.02,11.55l-8.35,5.17c-1.83,1.14-3.93,1.46-5.92.92-2.01-.52-3.66-1.85-4.71-3.7-2.17-3.96-.82-9.13,3.18-11.64l1.1-.78c1.18-.86,1.46-2.52.6-3.75-.86-1.16-2.52-1.46-3.75-.6l-.92.68c-6.24,3.89-8.44,12.26-4.89,18.68,1.72,3.14,4.6,5.38,8.03,6.29,1.06.28,2.18.42,3.25.42,2.38,0,4.74-.64,6.84-1.96l8.35-5.17c6.24-3.89,8.41-12.26,4.89-18.68-1.54-2.74-3.96-4.87-6.84-5.92h.01Z' />
                <path d='m10.38,26.78c-1.7-.64-3.13-1.9-4.02-3.5-2.18-3.98-.82-9.17,3.02-11.55l8.41-5.21c1.83-1.14,3.93-1.46,5.92-.92,2.01.52,3.66,1.85,4.71,3.7,2.17,3.96.82,9.13-3.18,11.64l-1.1.78c-1.18.86-1.46,2.52-.6,3.75.86,1.18,2.52,1.46,3.75.6l.92-.68c6.24-3.89,8.44-12.26,4.89-18.68-1.76-3.14-4.64-5.38-8.07-6.29-3.43-.9-7.02-.32-10.09,1.56L6.59,7.14C.35,11.03-1.85,19.39,1.7,25.82c1.54,2.74,3.96,4.87,6.84,5.92.32.14.6.18.92.18,1.08,0,2.1-.68,2.5-1.74l.02.02c.5-1.38-.22-2.92-1.6-3.43Z' />
            </svg>
        ),
        GITHUB: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 42.14 48'>
                <path d='m30.15,45.71c0-1,.04-4.3.04-8.41v.02c.02-.19.02-.38.02-.58,0-1.99-.79-3.8-2.09-5.14,6.84-.76,14.03-3.35,14.03-15.14v-.19c0-3.11-1.2-5.95-3.16-8.07l-.02.08c.41-1.18.64-2.45.64-3.76,0-1.61-.34-3.16-.92-4.46,0,0-2.57-.82-8.41,3.16l.2.06c-2.51-.71-5.15-1.09-7.89-1.09s-5.37.38-7.69,1.03C9.01-.75,6.44.07,6.44.07c-.6,1.34-.92,2.82-.92,4.39,0,1.34.24,2.62.66,3.73-1.97,2.11-3.17,4.96-3.17,8.07v.18c0,11.77,7.16,14.42,13.99,15.18-1.08,1.07-1.79,2.5-1.94,4.09h.02c-.96.55-2.06.86-3.24.86-2.47,0-4.62-1.37-5.76-3.4v-.02c-.97-1.67-2.66-2.86-4.68-3.14,0,0-3-.04-.22,1.88h.02c1.58,1.02,2.8,2.58,3.38,4.48,0,0,1.8,5.97,10.35,4.13.01,2.56.04,4.49.04,5.22,0,.43-.16.89-.52,1.19,2.59.71,5.31,1.09,8.12,1.09s5.52-.38,8.1-1.09c-.38-.3-.55-.77-.55-1.21h.01Z' />
            </svg>
        )
    }
    return (
        <div>
            <h2>{localization.title}</h2>
            <div className={styles.portfolio}>
                {localization.content.map((element, index) => (
                    <div key={index}>
                        <div className={styles.main}>
                            <a
                                target='_blanc'
                                href={element.links.global}>
                                {SVG.GLOBAL}
                            </a>
                            <a
                                target='_blanc'
                                href={element.links.github}>
                                {SVG.GITHUB}
                            </a>
                            <h3>{`/ ${element.title}`}</h3>
                        </div>
                        <p
                            className={styles.description}
                            dangerouslySetInnerHTML={{
                                __html: element.description
                            }}
                        />
                        <div className={styles.tags}>
                            {element.stack.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
