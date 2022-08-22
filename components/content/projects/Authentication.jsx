import React from 'react'
import Image from 'next/image';

import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si'

import authtemp from '../../../public/images/authtemp.png'

export default function Authentication() {
    return (
        <div className="authentication-card">
            <div className="mt-8 mx-4">
                <div className="border rounded border-transparent bg-nordpolarevening p-2 sm:w-96">
                    <div className="card-content">
                        <div className="rounded cursor-pointer">
                            <a href={"https://github.com/ElmeriVincent/github-auth-temp"} rel="nooperner noreferrer" target="_blank">
                                <Image src={authtemp}
                                    className="object-cover rounded bg-blend-overlay hover:mix-blend-normal hover:duration-300 opacity-80 hover:opacity-100"
                                    alt="Buukbox website cover image."
                                    width={0} height={0} />
                            </a>
                        </div>
                        <div className="flex justify-center mt-2 text-nordfrostlight font-NTR text-2xl">
                            <TbBrandNextjs />
                            <SiTailwindcss />
                            <span className="text-xl font-NTR mx-2">| NextAuth | Vercel</span>
                        </div>
                        <div>
                            <p className="text-white text-lg font-NTR text-center capitalize">Github Autentikaatio Mallipohja</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
