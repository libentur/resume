import React from 'react'

export default function TechPart({ title, parts }) {
    return (
        <div>
            <h3>{title} :</h3>
            <span>{parts}</span>
        </div>
    )
}
