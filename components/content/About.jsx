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
                    <div className="flex justify-center items-center xl:h-screen">
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
                                    <h2 className="text-nordfrostlight text-4xl font-semibold font-NTR">Minusta</h2>
                                    <p className="mt-2 text-white font-Poppins sm:text-lg text-sm">
                                        Moi! Olen Elmeri Keitaanranta! Teen enimmäkseen front-end projekteja, mutta muutakin osaamista on!
                                        <br />Opiskelen tieto- ja viestintätekniikkaa <a href="https://www.raseko.fi/"><br /><span className="text-nordaurorapink">| Rasekossa.</span></a>
                                        <br /><br />
                                        Kiinnostus koodailuun alkoi vuoden 2019 loppupuolella ja aloin rakentelemaan omia projekteja vuonna 2020.
                                        <br />
                                        Ensimmäinen projektini oli suomeen liittyvän datan visualisaatio, jonka tein <br /><a href="https://streamlit.io/"><span className="text-nordaurorared">| Streamlitillä</span></a>
                                        <br /><br />
                                        Palataan takaisin nykyhetkeen ja olen rakentanut useampia projekteja kokeillen eri kieliä, kirjastoja ja frameworkeja.
                                        Nyt, kun olen lähellä valmistumista niin yritän aloittaa uran teknologia-alalla.</p>
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
