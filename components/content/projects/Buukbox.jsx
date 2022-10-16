import React from 'react'
import Image from 'next/image';

import { DiReact } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai';

import buukboxCover from '../../../public/images/buukboxCover.png'

export default function Buukbox() {
    return (
        <div className="buukbox-card">
            <div className="mt-8 mx-4">
                <div className="border rounded border-transparent bg-nordpolarnight p-2 sm:w-96">
                    <div className="card-content">
                        <div className="rounded">
                            <Image src={buukboxCover}
                                className="rounded"
                                alt="Buukbox website cover image."
                                width={0} height={0} />
                        </div>
                        <div className="flex justify-center mt-2 text-nordfrostlight font-NTR text-2xl">
                            <DiReact />
                            <SiTailwindcss />
                            <span className="text-lg font-Poppins mx-2">| Google Books API | Vercel</span>
                        </div>
                        <div>
                            <p className="text-white text-md font-Poppins text-center capitalize">Searching and reading e-books</p>
                        </div>
                        <div className="flex items-center justify-center text-white space-x-2 font-Poppins">
                            <button type="button" className="border border-nordaurorared mt-1 px-2 rounded bg-nordaurorared text-nordcream">
                                <a href={"https://buukbox.vercel.app/"} rel="nooperner noreferrer" target="_blank">
                                    Try it
                                </a>
                            </button>
                            <button>
                                <a href={"https://github.com/ElmeriVincent/buukbox"} rel="nooperner noreferrer" target="_blank">
                                    <AiFillGithub className="text-2xl" />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
