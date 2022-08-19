import React from 'react'

import { BallTriangle } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div className="loader">
            <div className="flex items-center justify-center h-screen">
                <BallTriangle color="#8fbcbb" height={100} width={100} />
            </div>
        </div>
    )
}
