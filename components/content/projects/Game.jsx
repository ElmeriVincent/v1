import React from 'react'
import Image from 'next/image';

import { TbBrandVisualStudio } from 'react-icons/tb';
import { FaUnity } from 'react-icons/fa';

import play from '../../../public/images/play.jpg'

export default function Game() {
    return (
        <div className="authentication-card">
            <div className="mt-8 mx-4">
                <div className="border rounded border-transparent bg-nordpolarevening p-2 sm:w-96">
                    <div className="card-content">
                        <div className="rounded cursor-pointer">
                            <a href={"https://devevk.itch.io/cinderella-mountains"} rel="nooperner noreferrer" target="_blank">
                                <Image src={play}
                                    className="rounded bg-blend-overlay hover:mix-blend-normal hover:duration-300 opacity-80 hover:opacity-100"
                                    alt="Buukbox website cover image."
                                    width={0} height={0} layout="responsive" />
                            </a>
                        </div>
                        <div className="flex justify-center mt-2 text-nordfrostlight font-NTR text-2xl">
                            <FaUnity />
                            <TbBrandVisualStudio />
                            <span className="text-xl font-NTR mx-2">| Video Game</span>
                            <span className="text-xl font-NTR mx-2">| C#</span>
                        </div>
                        <div>
                            <p className="text-white text-lg font-NTR text-center">Small Snowboarding Planet Game</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
