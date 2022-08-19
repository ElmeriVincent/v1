import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router'

import logo from '../public/images/logo.png'

export const Navbar = () => {

    const [active, setActive] = useState(false);
    const router = useRouter();

    const handleClick = () => { setActive(!active); };

    return (
        <>
            <nav className='sticky flex items-center flex-wrap p-3 bg-nordpolarnight drop-shadow-sm top-0 z-50'>
                <button type='button'
                    className='inline-flex items-center p-2 mr-4 lg:ml-12 text-white cursor-pointer w-14 hover:animate-waving-hand'
                    onClick={() => router.reload()}>
                    <Image src={logo} height={0} width={0} alt="icon" />
                </button>
                <button
                    className='inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-nordfrostlight ml-auto outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>

                <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:mr-12 lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
                        <Link href='#about'>
                            <a className='lg:inline-flex lg:w-auto w-full lg:px-6 px-2 py-2 rounded text-white font-NTR text-lg items-center justify-center'>
                                About
                            </a>
                        </Link>
                        <Link href='#projects'>
                            <a className='lg:inline-flex lg:w-auto w-full lg:px-6 px-2 py-2 rounded text-white font-NTR text-lg items-center justify-center'>
                                Projects
                            </a>
                        </Link>
                        <Link href='#contact'>
                            <a className='lg:inline-flex lg:w-auto w-full lg:px-6 px-2 py-2 rounded text-white font-NTR text-lg items-center justify-center'>
                                Contact
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full lg:px-6 px-2 py-2 rounded text-white font-NTR text-lg items-center justify-center'>
                                <p className="border-2 px-2 border-nordfrostlight">Resume</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

