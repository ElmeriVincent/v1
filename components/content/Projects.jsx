import React from 'react'

import Buukbox from './projects/Buukbox'
import Authentication from './projects/Authentication'
import Game from './projects/Game'
import Contra from './projects/Contra'

export default function Projects() {
    return (
        <section>
            <section id="projects">
                <div className="projects-container">
                    <div className="flex justify-center items-center flex-col xl:h-screen">
                        <h1 className="font-NTR text-3xl border-nordfrostlight border-b border-l px-2 text-nordaurorapink text-right capitalize mt-24">
                            Tuoreimmat projektit
                        </h1>
                        <div className="grid xl:grid-cols-2 lg:grid-cols-1 grid-cols-1">
                            <Buukbox />
                            <Authentication />
                            <Game />
                            <Contra />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
