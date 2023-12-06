import React from 'react'


const OurService = () => {
    return (
        <div className='mx-40 mt-32 mb-20'>
            <div className='text-center sm:pr-8 md:pr-0'>
                <h2 className='text-4xl md:text-5xl text-green-700 font-extrabold p-5'>Our Services</h2>
                <h4 className=' text-sm md:text-base'><strong>Dream Home</strong> is here to be the solution for you</h4>
            </div>
            <div className='mt-8 grid grid-cols-1 ml-0 md:ml-24 lg:ml-0 lg:flex lg:flex-row lg:gap-x-7'>
                <div className='hover-h3 block max-w-sm p-6 text-center text-green-600 bg-white border rounded-lg mb-7 lg:mb-0 hover:bg-green-500 hover:text-white'>
                    <img className='block ml-auto mr-auto border rounded-full mb-5' src='/house-1.jpg' />
                    <h3 className='text-xl font-bold'>New Property</h3>
                    <p>Dream house is now a reality, Buy new house with the best facilities with a comfortable environment.</p>
                </div>
                <div className='block max-w-sm p-6 text-center text-green-600 bg-white border rounded-lg mb-7 lg:mb-0 hover:bg-green-500 hover:text-white'>
                    <img className='block ml-auto mr-auto border rounded-full mb-5' src='/assets-1.jpg' />
                    <h3 className='text-xl font-bold'>Rent House</h3>
                    <p>Rent a beautiful house for your family, best choice to stay with your family.</p>
                </div>
                <div className='block max-w-sm p-6 text-center text-green-600 bg-white border rounded-lg lg:mb-0 hover:bg-green-500 hover:text-white'>
                    <img className='block ml-auto mr-auto border rounded-full mb-5' src='/town-1.jpg' />
                    <h3 className='text-xl font-bold'>Buy House</h3>
                    <p>Buy the perfect house at a great price and best quality.</p>
                </div>
            </div>
            <div className='text-center pt-20 sm:pr-12 md:pr-0'>
                <a href="/services" class="font-medium text-green-600 hover:underline">Learn more</a>
            </div>
        </div>
    )
}

export default OurService