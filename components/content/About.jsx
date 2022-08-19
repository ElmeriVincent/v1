import React from 'react'
import Image from 'next/image'

import { FiGithub } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'

import profile from '../../public/images/profile.png'

export default function About() {
    return (
        <section>
            <section id="about">
                <div className="about-container">
                    <div className="flex justify-center items-center">
                        <div className="about-content">
                            <div className="max-w-md py-4 px-8 mt-32 rounded-lg my-20 bg-nordpolarevening mx-4">
                                <div className="profile-image">
                                    <div className="flex justify-center md:justify-end -mt-16">
                                        <div className="w-20 h-20 border-2 border-nordaurorared rounded-full">
                                            <Image className="object-cover rounded-full" src={profile} height={0} width={0} />
                                        </div>
                                    </div>
                                </div>
                                <div className="about-me-text">
                                    <h2 className="text-nordfrostlight text-4xl font-semibold font-NTR">About Me</h2>
                                    <p className="mt-2 text-white font-NTR text-xl">
                                        Moi! My name is Elmeri Keitaanranta and im mostly a self-taught front-end developer,
                                        <br />but im also studying ICT and soon graduting from <a href="https://www.raseko.fi/"><span className="text-nordaurorapink">| Raseko.</span></a>
                                        <br /><br />
                                        I started my coding journey in late 2019 and started building my own projects in early 2020.
                                        <br />
                                        My first project was data visualization project that was made with <a href="https://streamlit.io/"><span className="text-nordaurorared">| Streamlit</span></a>
                                        <br /><br />
                                        Fast forwarding to today, and i've built multiple projects with different technologies.
                                        Now as I am graduating I am beginning to seek a career in the tech industry.</p>
                                </div>
                                <div className="icons">
                                    <div className="flex justify-end mt-4 space-x-2">
                                        <a href="https://github.com/ElmeriVincent" rel="nooperner noreferrer" target="_blank"
                                            className="text-xl font-medium text-nordaurorared">
                                            <FiGithub />
                                        </a>
                                        <a href="mailto:ElmeriVincent@gmail.com" rel="nooperner noreferrer" target="_blank"
                                            className="text-xl font-medium text-nordaurorared">
                                            <AiOutlineMail />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </section >
    )
}
