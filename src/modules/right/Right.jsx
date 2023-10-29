import React from 'react'
import TechstackItem from './components/TechstackItem'
import PortfolioItem from './components/PortfolioItem'
import data from './assets/data.json'

export default function Right({ language }) {
    return (
        <div className='right'>
            <div>
                <h2>{data.introduction.title[language]}</h2>
                <div className='introduction'>
                    {data.introduction.content[language].map(
                        (element, index) => (
                            <p key={index}>{element}</p>
                        )
                    )}
                </div>
            </div>
            <div>
                <h2>{data.techstack.title[language]}</h2>
                <div className='techstack'>
                    {data.techstack.content.map((element, index) => (
                        <TechstackItem
                            key={index}
                            title={element.title[language]}
                            parts={element.parts}
                        />
                    ))}
                </div>
            </div>
            <div>
                <h2>{data.portfolio.title[language]}</h2>
                <div className='portfolio'>
                    {data.portfolio.content.map((element, index) => (
                        <PortfolioItem
                            key={index}
                            title={element.title}
                            links={element.links}
                            description={element.description[language]}
                            stack={element.stack}
                        />
                    ))}
                </div>
            </div>
            <div>
                <h2>{data.hobby.title[language]}</h2>
                <div className='hobby'>
                    {data.hobby.content[language].map((element, index) => (
                        <p
                            key={index}
                            dangerouslySetInnerHTML={{ __html: element }}
                        />
                    ))}
                </div>
            </div>
            <a
                href=''
                target='_blanc'
                className='download'>
                {data.presentation[language]}
            </a>
        </div>
    )
}
