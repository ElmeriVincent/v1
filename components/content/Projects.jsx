import React from 'react'

import Buukbox from './projects/Buukbox'
import Authentication from './projects/Authentication'
import Game from './projects/Game'

export default function Projects() {
    return (
        <section>
            <section id="projects">
                <div className="projects-container">
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="font-NTR text-3xl border-nordfrostlight border-b border-l px-2 text-white text-right capitalize mt-24 xl:mt-32">Most recent projects</h1>
                        <div className="grid xl:grid-cols-3 lg:grid-cols-1 grid-cols-1">
                            <Buukbox />
                            <Authentication />
                            <Game />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
