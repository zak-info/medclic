"use client"

import React, { useState } from 'react'
import { AnimatePresence } from "framer-motion"

import Guid1 from './Guids/Guid1'
import Guid2 from './Guids/Guid2';
import Guid3 from './Guids/Guid3';
import Guid4 from './Guids/Guid4';
import Guid5 from './Guids/Guid5';
import Guid6 from './Guids/Guid6';
import Link from 'next/link';

const Home = () => {
    const [order, setOrder] = useState(0);
    return (
        <div className=' w-screen h-screen flex flex-col items-center pt-16 px-6'>
            <div className='w-full flex justify-between'>
                <div className='w-3/5 h-40 bg-cover flex justify-center items-end pb-4 rounded-lg bg-[url("/images/home2.svg")]'>
                    <Link href='/dashboard/doctors' className='w-4/5 mt-12 bg-primary-1 py-2  flex justify-center rounded-full text-sm font-semibold text-white' >Find Doctor</Link>
                </div>
                <div className='w-3/5 ms-4 h-40 bg-cover flex  justify-center items-end pb-4 rounded-lg bg-[url("/images/home.svg")]'>
                    <Link href='/dashboard/doctors' className='w-4/5 mt-12 bg-primary-1 py-2  flex justify-center rounded-full text-sm font-semibold text-white' >Chat</Link>
                </div>
            </div>
            <div className='w-full h-52 mt-4 bg-cover flex  justify-center items-end pb-4 rounded-lg bg-[url("/images/home4.svg")]'>
                <Link href='/labs' className='w-4/5 mt-12 bg-primary-1 py-2  flex justify-center rounded-full text-sm font-semibold text-white' >Medical Analyses</Link>
            </div>

            <div className='w-full flex justify-between mt-4'>
                <div className='w-3/5 h-40 bg-cover flex justify-center items-end pb-4 rounded-lg bg-[url("/images/ph1.svg")]'>
                    <Link href='/pharmacy' className='w-4/5 mt-12 bg-primary-1 py-2  flex justify-center rounded-full text-sm font-semibold text-white' >Pharmacy</Link>
                </div>
                <div className='w-3/5 ms-4 h-40 bg-cover flex  justify-center items-end pb-4 rounded-lg bg-[url("/images/home6.svg")]'>
                    <Link href='/ambelance' className='w-4/5 mt-12 bg-primary-1 py-2  flex justify-center rounded-full text-sm font-semibold text-white' >Ambulance</Link>
                </div>
            </div>

        </div>
    )
}

export default Home