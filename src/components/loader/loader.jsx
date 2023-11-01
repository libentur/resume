import React from 'react'
import { BarLoader } from 'react-spinners'

export default function Loader() {
    const override = {
        width: '200px',
        position: 'absolute',
        top: 'calc(50% - 2px)',
        left: 'calc(50% - 100px)'
    }

    return (
        <span>
            <BarLoader cssOverride={override} />
        </span>
    )
}
