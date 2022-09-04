import React from 'react'
import Image from 'next/image';

import { DiReact } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si'

import buukboxCover from '../../../public/images/buukboxCover.png'

export default function Buukbox() {
    return (
        <div className="buukbox-card">
            <div className="mt-8 mx-4">
                <div className="border rounded border-transparent bg-nordpolarnight p-2 sm:w-96">
                    <div className="card-content">
                        <div className="rounded cursor-pointer">
                            <a href={"https://buukbox.vercel.app/"} rel="nooperner noreferrer" target="_blank">
                                <Image src={buukboxCover}
                                    className="rounded"
                                    alt="Buukbox website cover image."
                                    width={0} height={0} />
                            </a>
                        </div>
                        <div className="flex justify-center mt-2 text-nordfrostlight font-NTR text-2xl">
                            <DiReact />
                            <SiTailwindcss />
                            <span className="text-lg font-Poppins mx-2">| Google Books API | Vercel</span>
                        </div>
                        <div>
                            <p className="text-white text-md font-Poppins text-center capitalize">Searching and reading e-books</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
