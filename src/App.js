import React, { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Left from './modules/left/Left'
import Right from './modules/right/Right'

export default function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [language, setLanguage] = React.useState('ru')

    useEffect(() => {
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
                    <Left
                        language={language}
                        setLanguage={setLanguage}
                    />
                    <Right language={language} />
                </>
            )}
        </div>
    )
}
