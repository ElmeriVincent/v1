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
                <div className="border rounded border-transparent bg-nordpolarevening p-2 sm:w-96">
                    <div className="card-content">
                        <div className="rounded cursor-pointer">
                            <a href={"https://buukbox.vercel.app/"} rel="nooperner noreferrer" target="_blank">
                                <Image src={buukboxCover}
                                    className="rounded xl:bg-blend-overlay xl:hover:mix-blend-normal xl:hover:duration-300 opacity-100 xl:opacity-80 xl:hover:opacity-100"
                                    alt="Buukbox website cover image."
                                    width={0} height={0} />
                            </a>
                        </div>
                        <div className="flex justify-center mt-2 text-nordfrostlight font-NTR text-2xl">
                            <DiReact />
                            <SiTailwindcss />
                            <span className="text-xl font-NTR mx-2">| Google Books API | Vercel</span>
                        </div>
                        <div>
                            <p className="text-white text-lg font-NTR text-center capitalize">E-kirjojen Hakeminen & Lukeminen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
