import React from 'react'

import { DiReact } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si'


export default function Buukbox() {
    return (
        <div className="buukbox-card">
            <div className="mt-12 mx-4">
                <div className="border-2 rounded border-nordaurorapink bg-nordpolarevening p-2">
                    <div className="card-content">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdesignshack.net%2Fwp-content%2Fuploads%2Fplaceholder-image.png&f=1&nofb=1"
                            className="object-cover w-80 h-full"
                            alt="..." />
                        <div className="flex justify-center mt-2 text-nordfrostlight text-3xl">
                            <DiReact />
                            <SiTailwindcss />
                            <span className="text-xl mx-2">| Google Books API</span>
                            <span className="text-xl mx-2">| Vercel</span>
                        </div>
                        <div>
                            <p className="text-white text-center">Application for searching reading books</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
