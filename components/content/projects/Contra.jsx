import React from 'react'
import Image from 'next/image';

import { SiSolidity } from 'react-icons/si';
import { FaEthereum } from 'react-icons/fa';

import contra from '../../../public/images/contra.png'

export default function Contra() {
    return (
        <div className="authentication-card">
            <div className="mt-8 mx-4">
                <div className="border rounded border-transparent bg-nordpolarevening p-2 sm:w-96">
                    <div className="card-content">
                        <div className="rounded cursor-pointer">
                            <a href={"https://contra-topaz.vercel.app/"} rel="nooperner noreferrer" target="_blank">
                                <Image src={contra}
                                    className="rounded bg-blend-overlay hover:mix-blend-normal hover:duration-300 opacity-80 hover:opacity-100"
                                    alt="Buukbox website cover image."
                                    width={0} height={0} />
                            </a>
                        </div>
                        <div className="flex justify-center mt-2 text-nordfrostlight font-NTR text-2xl">
                            <FaEthereum />
                            <SiSolidity />
                            <span className="text-xl font-NTR mx-2">| Metamask | Blockchain</span>
                        </div>
                        <div>
                            <p className="text-white text-lg font-NTR text-center capitalize">Lumilautaile Pienen Planeetan Halki</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

