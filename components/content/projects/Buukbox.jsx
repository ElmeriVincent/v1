import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { DiReact } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si'

import buukboxCover from '../../../public/images/buukboxCover.png'

export default function Buukbox() {
    return (
        <div className="buukbox-card">
            <div className="mt-8 mx-4">
                <div className="border rounded border-transparent bg-nordpolarevening p-2">
                    <div className="card-content">
                        <div className="w-96 rounded cursor-pointer">
                            <a href={"https://buukbox.vercel.app/"} rel="nooperner noreferrer" target="_blank">
                                <Image src={buukboxCover}
                                    className="rounded bg-blend-overlay hover:mix-blend-normal hover:duration-300 opacity-80 hover:opacity-100"
                                    alt="Buukbox website cover image."
                                    width={0} height={0} />
                            </a>
                        </div>
                        <div className="flex justify-center mt-2 text-nordfrostlight font-NTR text-2xl">
                            <DiReact />
                            <SiTailwindcss />
                            <span className="text-xl font-NTR mx-2">| Google Books API</span>
                            <span className="text-xl font-NTR mx-2">| Vercel</span>
                        </div>
                        <div>
                            <p className="text-white text-lg font-NTR text-center">Application for searching and reading books</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
