import React from 'react'

export default function Welcome() {
    return (
        <div className="Welcome">
            <div className='flex justify-center items-center h-screen'>
                <div className='flex flex-col mx-10'>
                    <div className="whoami">
                        <p className='font-Poppins text-lg lg:text-xl text-nordfrostlight text-left'>
                            Ohjelmistokehittäjä
                        </p>
                        <h1 className='font-NTR text-5xl lg:text-8xl text-white text-left'>
                            Elmeri Keitaanranta
                        </h1>
                        <h2 className='font-NTR text-3xl lg:text-5xl text-nordfrostice text-left'>
                            Tehnyt ja suunnitellut front-end projekteja.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
