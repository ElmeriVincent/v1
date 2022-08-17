import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className='flex items-center flex-wrap bg-green-400 p-3 '>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 lg:ml-12 text-white'>
                        <p>Logo</p>
                    </a>
                </Link>
                <button
                    className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-nordfrostlight ml-auto outline-none'
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
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full lg:px-6 px-2 py-2 rounded text-white font-NTR text-lg items-center justify-center'>
                                About
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full lg:px-6 px-2 py-2 rounded text-white font-NTR text-lg items-center justify-center'>
                                Projects
                            </a>
                        </Link>
                        <Link href='/'>
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

