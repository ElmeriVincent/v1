import React from 'react'
import Image from 'next/image';

export default function About() {
    return (
        <section>
            <section id="about-section">
                <div className="flex justify-center h-screen items-center flex-col">
                    <h1 className="font-NTR text-3xl border-nordfrostlight border-b border-l px-2 text-white text-right">About Me</h1>
                    <div className="grid xl:grid-cols-2 mt-12 xl:divide-x lg:divide-dotted lg:text-white">
                        <div className="flex justify-center lg:ml-96">
                            <div className="border-2 lg:w-64 w-48 border-white">
                                <img src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    className="lg:w-80 h-full object-cover grayscale hover:grayscale-0" />
                            </div>
                        </div>
                        <div className="flex justify-center lg:mr-64 lg:mx-24">
                            <p className=" text-nordfrostice font-NTR text-lg lg:text-xl mx-16 mt-12">
                                Moi! My name is Elmeri Keitaanranta and im mostly a self-taught front-end developer,
                                <br />but im also graduating from <span className="text-nordaurorapink">| Raseko.</span>
                                <br /><br />
                                I started my journey in late 2019, but started actually building projects in early 2020.
                                <br />
                                My first project was data visualization project that was made with <span className="text-nordaurorared">Streamlit</span>
                                <br /><br />
                                Fast forwarding to today, and i've built multiple projects with different technologies.
                                Now as I am graduating I am beginning to seek a career in the tech industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section >
        </section >
    )
}
