import React from 'react'
import Image from 'next/image';

import { TbBrandVisualStudio } from 'react-icons/tb';
import { FaUnity } from 'react-icons/fa';

import game from '../../../public/images/game.png'

export default function Game() {
    return (
        <div className="game-card">
            <div className="mt-8 mx-4">
                <div className="border rounded border-transparent bg-nordpolarnight p-2 sm:w-96">
                    <div className="card-content">
                        <div className="rounded cursor-pointer">
                            <a href={"https://devevk.itch.io/cinderella-mountains"} rel="nooperner noreferrer" target="_blank">
                                <Image src={game}
                                    className="rounded"
                                    alt="Videogame project"
                                    width={0} height={0} />
                            </a>
                        </div>
                        <div className="flex justify-center mt-2 text-nordfrostlight text-2xl">
                            <FaUnity />
                            <TbBrandVisualStudio />
                            <span className="text-lg font-Poppins mx-2">| Computer Game | C#</span>
                        </div>
                        <div>
                            <p className="text-white text-md font-Poppins text-center capitalize">Snowboard around a planet and survive</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
