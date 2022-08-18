import React from 'react'

import { FiGithub } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'

export default function About() {
    return (
        <section>
            <section id="about-section">
                <div className="about-title flex justify-center items-center">
                    <div className="max-w-md py-4 px-8 mt-32 rounded-lg my-20 bg-nordpolarevening mx-4">
                        <div className="flex justify-center md:justify-end -mt-16">
                            <img className="w-20 h-20 object-cover rounded-full border-2 border-nordaurorared" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                        </div>
                        <div>
                            <h2 className="text-nordfrostlight text-4xl font-semibold font-NTR">About Me</h2>
                            <p className="mt-2 text-white font-NTR text-xl">
                                Moi! My name is Elmeri Keitaanranta and im mostly a self-taught front-end developer,
                                <br />but im also graduating from <span className="text-nordaurorapink">| Raseko.</span>
                                <br /><br />
                                I started my coding journey in late 2019 and started building my own projects in early 2020.
                                <br />
                                My first project was data visualization project that was made with <span className="text-nordaurorared">Streamlit</span>
                                <br /><br />
                                Fast forwarding to today, and i've built multiple projects with different technologies.
                                Now as I am graduating I am beginning to seek a career in the tech industry.</p>
                        </div>
                        <div className="flex justify-end mt-4 space-x-2">
                            <a href="https://github.com/ElmeriVincent" rel="nooperner noreferrer" target="_blank" className="text-xl font-medium text-nordaurorared"><FiGithub /></a>
                            <a href="mailto:ElmeriVincent@gmail.com" rel="nooperner noreferrer" target="_blank" className="text-xl font-medium text-nordaurorared"><AiOutlineMail /></a>
                        </div>
                    </div>
                </div>
            </section >
        </section >
    )
}
