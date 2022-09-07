import React from 'react'
import Image from 'next/image';

import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si'

import authtemp from '../../../public/images/authtemp.png'

export default function Authentication() {
    return (
        <div className="authentication-card">
            <div className="mt-8 mx-4">
                <div className="border rounded border-transparent bg-nordpolarnight p-2 sm:w-96">
                    <div className="card-content">
                        <div className="rounded cursor-pointer">
                            <a href={"https://github.com/ElmeriVincent/github-auth-temp"} rel="nooperner noreferrer" target="_blank">
                                <Image src={authtemp}
                                    className="rounded"
                                    alt="authentication-project"
                                    width={0} height={0} />
                            </a>
                        </div>
                        <div className="flex justify-center mt-2 text-nordfrostlight text-2xl">
                            <TbBrandNextjs />
                            <SiTailwindcss />
                            <span className="text-lg font-Poppins mx-2">| NextAuth | Vercel</span>
                        </div>
                        <div>
                            <p className="text-white text-md font-Poppins text-center capitalize">Github authentication template</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
