import React from 'react'
import Loader from './components/loader/loader'
import LeftSide from './modules/left_side/left_side'
import RightSide from './modules/right_side/right_side'
import LOCALIZATION from './localization/localization.json'

export default function App() {
    const [isLoading, setIsLoading] = React.useState(true)
    const [language, setLanguage] = React.useState('ru')
    const localization = LOCALIZATION[language]

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1200)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className='app'>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <LeftSide localization={localization.left_side} />
                    <RightSide
                        localization={localization.right_side}
                        language={language}
                        setLanguage={setLanguage}
                    />
                </>
            )}
        </div>
    )
}
