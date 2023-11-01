import React from 'react'
import styles from './styles.module.scss'

export default function LocalizationMenu({ language, setLanguage }) {
    const handleButtonClick = e => {
        setLanguage(e.target.value)
    }

    return (
        <div className={styles.localization_menu}>
            <button
                id={styles.en}
                className={language === 'en' ? styles.active : null}
                value='en'
                onClick={handleButtonClick}
            />
            <button
                id={styles.ru}
                className={language === 'ru' ? styles.active : null}
                value='ru'
                onClick={handleButtonClick}
            />
        </div>
    )
}
