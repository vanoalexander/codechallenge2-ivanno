import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href='/' className='flex items-center'>
                            <img className='h-8 me-3 bg-white border rounded-full' src='/union.png' alt='navbar-logo' />
                            <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>Dream Home</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Company</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/about" className="hover:underline">About</a>
                                </li>
                                <li className='mb-4'>
                                    <a href="/services" className="hover:underline">Services</a>
                                </li>
                                <li>
                                    <a href="/teams" className="hover:underline">Teams</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Follow us</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="" className="hover:underline ">Facebook</a>
                                </li>
                                <li>
                                    <a href="" className="hover:underline">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center text-gray-400">© 2023 <a href="/" className="hover:underline">Dream Home™</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer