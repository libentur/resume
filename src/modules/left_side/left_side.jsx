import React from 'react'
import SocialLinks from './components/social_links/social_links'
import styles from './styles.module.scss'

export default function LeftSide({ localization }) {
    return (
        <div className={styles.left_side}>
            <h1>{localization.fullname}</h1>
            <SocialLinks />
        </div>
    )
}
