import Image from "next/image"
import profile from "../../public/images/profile.jpg"

import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

export default function Contact() {
    return (
        <footer id="contact">
            <div className="bg-nordpolarnight">
                <svg id="visual" viewBox="0 0 1920 300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 325L21.3 315C42.7 305 85.3 285 128 280.3C170.7 275.7 213.3 286.3 256 274.5C298.7 262.7 341.3 228.3 384 203.2C426.7 178 469.3 162 512 159C554.7 156 597.3 166 640 185.3C682.7 204.7 725.3 233.3 768 231.7C810.7 230 853.3 198 896 175.5C938.7 153 981.3 140 1024 162C1066.7 184 1109.3 241 1152 246.5C1194.7 252 1237.3 206 1280 202.5C1322.7 199 1365.3 238 1408 247.3C1450.7 256.7 1493.3 236.3 1536 225.5C1578.7 214.7 1621.3 213.3 1664 214.5C1706.7 215.7 1749.3 219.3 1792 226.8C1834.7 234.3 1877.3 245.7 1898.7 251.3L1920 257L1920 0L1898.7 0C1877.3 0 1834.7 0 1792 0C1749.3 0 1706.7 0 1664 0C1621.3 0 1578.7 0 1536 0C1493.3 0 1450.7 0 1408 0C1365.3 0 1322.7 0 1280 0C1237.3 0 1194.7 0 1152 0C1109.3 0 1066.7 0 1024 0C981.3 0 938.7 0 896 0C853.3 0 810.7 0 768 0C725.3 0 682.7 0 640 0C597.3 0 554.7 0 512 0C469.3 0 426.7 0 384 0C341.3 0 298.7 0 256 0C213.3 0 170.7 0 128 0C85.3 0 42.7 0 21.3 0L0 0Z" fill="#3B4252" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
                <div className="contact-info flex justify-center items-center flex-col lg:mt-auto mt-6">
                    <h1 className="font-Poppins text-3xl border-nordfrostlight border-b border-l px-2 text-white text-right uppercase">
                        Get in touch
                    </h1>
                    <div className="lg:m-4 text-white font-Poppins text-center mx-2 my-2">
                        <p className="lg:text-lg sm:text-base text-sm">
                            Currently studying but also available for work. <br />
                            Contact me if you are interested
                            or just <br /> wanting to discuss about tech.
                        </p>
                        <div className="flex items-center justify-center m-2">
                            <div className="relative border border-nordpolarevening  rounded-full w-12 h-12">
                                <Image className="rounded-full" src={profile} alt="profile-image-linkedin" width={0} height={0} />
                                <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-online border-2 border-nordpolarevening rounded-full"></span>
                            </div>
                            <div className="mx-2">
                                <p className="text-sm">
                                    <span className="font-bold text-sm">Reply time:</span> within 1-2 days
                                </p>
                            </div>
                        </div>
                        <a href="mailto:ElmeriVincent@gmail.com" rel="nooperner noreferrer" target="_blank">
                            <button className="mt-2 bg-nordaurorared rounded-md p-2">ElmeriVincent@gmail.com</button>
                        </a>
                    </div>
                </div>
                <div className="socials">
                    <div className="flex flex-row text-white text-2xl mx-2 space-x-2 mb-4 items-center justify-center">
                        <a href="https://github.com/ElmeriVincent" target="_blank" rel="noopener">
                            <AiFillGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/elmeri-keitaanranta-03b796249/" target="_blank" rel="noopener">
                            <AiFillLinkedin />
                        </a>
                    </div>
                </div>
                <div className="built-by-elmeri-vincent-keitaanranta">
                    <p className="text-white font-Poppins text-xs text-center mb-2">⚒️ Built by Elmeri Vincent Keitaanranta </p>
                </div>
            </div>
        </footer >
    )
}
