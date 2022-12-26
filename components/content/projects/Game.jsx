import React from "react";
import Image from "next/image";

import { TbBrandVisualStudio } from "react-icons/tb";
import { FaUnity } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

import game from "../../../public/images/game.png";

export default function Game() {
  return (
    <div className="game-card">
      <div className="mt-8 mx-4">
        <div className="border rounded border-transparent bg-nordpolarnight p-2 sm:w-96">
          <div className="card-content">
            <div className="rounded">
              <Image
                src={game}
                className="rounded"
                alt="Videogame project"
                width={0}
                height={0}
              />
            </div>
            <div className="flex justify-center mt-2 text-nordfrostlight text-2xl">
              <FaUnity />
              <TbBrandVisualStudio />
              <span className="text-lg font-Poppins mx-2">
                | Computer Game | C#
              </span>
            </div>
            <div>
              <p className="text-white text-md font-Poppins text-center capitalize">
                Snowboard around a planet and survive
              </p>
            </div>
            <div className="flex items-center justify-center text-white space-x-2 font-Poppins">
              <button>
                <a
                  href={"https://github.com/ElmeriVincent/LittlePlanet-Game"}
                  rel="nooperner noreferrer"
                  target="_blank">
                  <AiFillGithub className="text-2xl" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
