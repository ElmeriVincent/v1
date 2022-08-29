import React from 'react'
import Image from 'next/image';

import whatnext from '../../public/images/whatnext.png'

export default function Contact() {
    return (
        <footer id="contact">
            <div className="flex justify-center items-center mb-12 flex-col">
                <h1 className="font-NTR text-3xl border-nordfrostlight border-b border-l px-2 text-nordaurorapink text-right capitalize mt-24 xl:mt-24 mb-4">
                    Kontaktointi
                </h1>
                <div className="whats-next-image">
                    <div className="w-20 h-20 object-cover rounded-full border-2 border-nordfrostlight bg-nordpolarevening mb-2">
                        <a href="https://www.freepik.com/vectors/cute-astronaut">
                            <Image src={whatnext} alt="What next?" width={200} height={200} />
                        </a>
                    </div>
                </div>
                <p className="text-white font-NTR text-xl text-center mx-4">
                    Jos kiinnostuit?
                    <br />
                    Laita minulle e-postia ja koitan vastata mahdollisiman pian.
                </p>
                <div className="say-hello-button">
                    <a href="mailto:ElmeriVincent@gmail.com" rel="nooperner noreferrer" target="_blank">
                        <button className='mt-2 border-2 rounded border-nordaurorared text-nordaurorared p-2 text-2xl font-NTR transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100'>
                            Sano Moi
                        </button>
                    </a>
                </div>
            </div>
        </footer>
    )
}
