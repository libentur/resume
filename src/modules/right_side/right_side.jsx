import React from 'react'
import LocalizationMenu from '../../components/localization_menu/localization_menu'
import Introduction from './components/introduction/introduction'
import Competence from './components/competence/competence'
// import Portfolio from './components/portfolio/portfolio'
import Hobby from './components/hobby/hobby'
import DownloadPDF from './components/download_pdf/download_pdf'
import styles from './styles.module.scss'

export default function RightSide({ localization, language, setLanguage }) {
    return (
        <div className={styles.right_side}>
            <LocalizationMenu
                language={language}
                setLanguage={setLanguage}
            />
            <Introduction localization={localization.introduction} />
            <Competence localization={localization.competence} />
            {/* <Portfolio localization={localization.portfolio} /> */}
            <Hobby localization={localization.hobby} />
            <DownloadPDF localization={localization.presentation} />
        </div>
    )
}
