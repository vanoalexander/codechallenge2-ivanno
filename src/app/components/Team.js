/* eslint-disable @next/next/no-img-element */

import React from 'react'

const Team = () => {
    return (
        <div>
            <div className='text-center m-20 lg:m-36'>
                <h2 className='text-center text-3xl md:text-5xl lg:m-20 font-extrabold text-green-600 uppercase'>Our Team</h2>
                <p className='md:px-32 py-5 text-gray-700 font-serif font-medium'>Occaecat fugiat sint irure irure enim fugiat ea sunt culpa pariatur non. Id ipsum cupidatat culpa elit do aliqua. Esse proident tempor officia deserunt ad incididunt culpa adipisicing ipsum. Nulla nulla anim aliquip irure mollit laborum cillum consectetur duis labore. Fugiat commodo in eiusmod duis esse sunt veniam laborum reprehenderit irure Lorem. Velit cupidatat sunt commodo minim nulla quis nostrud est nulla aute amet pariatur.</p>
                <div className='mt-8 grid grid-cols-1 ml-8 sm:ml-24 md:ml-44 xl:ml-0 lg:flex lg:flex-row lg:gap-x-7'>
                    <div className='hover-h3 block max-w-sm p-6 text-center border rounded-lg mb-7 lg:mb-0 bg-green-500 text-white'>
                        <div>
                            <img className='block mb-5' src='/pp1.jpg' />
                        </div>
                        <h3 className='text-xl font-bold'>Michael Gough</h3>
                        <p>CEO of Dream Home</p>
                        <p className='text-sm font-light'>0431-0790-0888</p>
                    </div>
                    <div className='block max-w-sm p-6 text-center border rounded-lg mb-7 lg:mb-0 bg-green-500 text-white'>
                        <img className='block mb-5' src='/pp2.jpg' />
                        <h3 className='text-xl font-bold'>Christy Gordon</h3>
                        <p>Salesman Director</p>
                        <p className='text-sm font-light'>0431-0790-0888</p>
                    </div>
                    <div className='block max-w-sm p-6 text-center border rounded-lg lg:mb-0 bg-green-500 text-white'>
                        <img className='block mb-5' src='/pp3.jpg' />
                        <h3 className='text-xl font-bold'>Dale Johnston</h3>
                        <p>IT Director</p>
                        <p className='text-sm font-light'>0431-0790-0888</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team