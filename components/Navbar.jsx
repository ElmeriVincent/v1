import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

import logo from '../public/images/logo.png';
import { Squeeze as Hamburger } from 'hamburger-react'

export const Navbar = () => {

    const [active, setActive] = useState(false);
    const [isOpen, setOpen] = useState(false)
    const router = useRouter();

    const handleClick = () => { setActive(!active); setOpen(!isOpen); };

    return (
        <>
            <nav className='sticky flex items-center flex-wrap p-3 bg-nordpolarnight top-0 z-50 lg:border-transparent border-b-nordfrostlight border-b lg:mb-0 mb-4'>
                <button type='button'
                    className='inline-flex items-center p-2 mr-4 xl:ml-48 lg:ml-32 text-white cursor-pointer w-14 hover:animate-waving-hand'
                    onClick={() => router.reload()}>
                    <Image src={logo} height={0} width={0} alt="logo" />
                </button>
                <button
                    className='inline-flex p-3 rounded lg:hidden text-nordfrostlight ml-auto outline-none'
                    onClick={handleClick}
                >
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </button>
                <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto xl:ml-48 lg:mr-32`}>
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:mr-12 lg:w-auto w-full lg:items-center items-start flex flex-col h-auto'>
                        <Link href='./'>
                            <button onClick={handleClick} className="mt-2 hover:bg-nordpolarevening focus:bg-nordpolarevening rounded-xl mx-4">
                                <a className='lg:inline-flex lg:w-auto w-full py-1 rounded text-white font-Poppins text-2xl items-center justify-center uppercase px-4'>
                                    about
                                </a>
                            </button>
                        </Link>
                        <Link href='#projects'>
                            <button onClick={handleClick} className="mt-2 hover:bg-nordpolarevening focus:bg-nordpolarevening rounded-xl mx-4">
                                <a className='lg:inline-flex lg:w-auto w-full py-1 rounded text-white font-Poppins text-2xl items-center justify-center uppercase px-4'>
                                    projects
                                </a>
                            </button>
                        </Link>
                        <Link href='#contact'>
                            <button onClick={handleClick} className="mt-2 hover:bg-nordpolarevening focus:bg-nordpolarevening rounded-xl mx-4">
                                <a className='lg:inline-flex lg:w-auto w-full py-1 rounded text-white font-Poppins text-2xl items-center justify-center uppercase px-4'>
                                    contact
                                </a>
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

