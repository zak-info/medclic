"use client"

import React, { useState } from 'react'

import Lottie from "lottie-react";
import check from "@/public/check.json";
import Link from 'next/link';
import Popup from '../Doctors/Popup';
import Image from 'next/image';

const Payment = () => {
    const [popUp, setPopUp] = useState(false);

    return (
        <div className='w-full    pt-8 px-6'>
            <div className='w-full flex'>
                <Image src={"/images/ambelance.svg"} width={1000} height={1000} className='w-1/3 h-20' />
                <div className='ms-4'>
                    <div className='w-full text-sm  font-bold mt-2'>Ambe cherife </div>
                    <div className='w-12 flex mt-2  items-center bg-secondry-1 px-1 rounded'>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.70585 6.75675C8.56556 6.89271 8.5011 7.08933 8.53306 7.28217L9.0146 9.94716C9.05523 10.173 8.9599 10.4016 8.77085 10.5322C8.5856 10.6676 8.33914 10.6838 8.1371 10.5755L5.73806 9.32425C5.65465 9.27983 5.56202 9.256 5.46723 9.25329H5.32044C5.26952 9.26087 5.21969 9.27712 5.17419 9.30204L2.7746 10.5592C2.65598 10.6188 2.52165 10.64 2.39002 10.6188C2.06935 10.5582 1.8554 10.2527 1.90794 9.93037L2.39002 7.26537C2.42198 7.07091 2.35752 6.87321 2.21723 6.73508L0.261271 4.83925C0.0976876 4.68054 0.0408126 4.44221 0.115563 4.22716C0.188146 4.01266 0.373396 3.85612 0.597104 3.82091L3.28919 3.43037C3.49394 3.40925 3.67377 3.28466 3.76585 3.1005L4.9521 0.668415C4.98027 0.614248 5.01656 0.564415 5.06044 0.522165L5.10919 0.484248C5.13465 0.456081 5.1639 0.43279 5.1964 0.413831L5.25544 0.392165L5.34752 0.354248H5.57556C5.77923 0.375373 5.95852 0.497248 6.05223 0.679248L7.25419 3.1005C7.34085 3.27762 7.50931 3.40058 7.70377 3.43037L10.3959 3.82091C10.6234 3.85341 10.8135 4.0105 10.8888 4.22716C10.9597 4.44437 10.8985 4.68271 10.7317 4.83925L8.70585 6.75675Z" fill="#32DEB5" /></svg>
                        <span className='text-primary-1 ms-1 text-xs'>4.7</span>
                    </div>
                    <div className='flex justify-start mt-1 items-center rounded'>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.895844 4.5887C0.895844 2.09711 2.97795 0.083252 5.49646 0.083252C8.02208 0.083252 10.1042 2.09711 10.1042 4.5887C10.1042 5.84425 9.64756 7.00988 8.89599 7.99786C8.06686 9.08766 7.04493 10.0372 5.89464 10.7825C5.63137 10.9547 5.39378 10.9677 5.10484 10.7825C3.94799 10.0372 2.92606 9.08766 2.10403 7.99786C1.35192 7.00988 0.895844 5.84425 0.895844 4.5887ZM3.98022 4.72898C3.98022 5.56366 4.66132 6.22014 5.49646 6.22014C6.33214 6.22014 7.0198 5.56366 7.0198 4.72898C7.0198 3.90079 6.33214 3.21235 5.49646 3.21235C4.66132 3.21235 3.98022 3.90079 3.98022 4.72898Z" fill="#3B4453" /></svg>
                        <span className='ms-1 text-xs'>800m away</span>
                    </div>

                </div>
            </div>
            <div className='w-full ms-8  font-bold mt-6'>Date</div>
            <div className='w-full px-4 flex items-center mt-4'>
                <button className='w-8 h-8 rounded-full bg-secondry-1 flex justify-center items-center'><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.57721 7.83688H16.4305" stroke="#199A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M12.7017 11.0915H12.7094" stroke="#199A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M9.00384 11.0915H9.01156" stroke="#199A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.29825 11.0915H5.30597" stroke="#199A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M12.7017 14.3303H12.7094" stroke="#199A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M9.00384 14.3303H9.01156" stroke="#199A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.29825 14.3303H5.30597" stroke="#199A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M12.3698 1.66675V4.40906" stroke="#199A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.63792 1.66675V4.40906" stroke="#199A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5319 2.98267H5.4758C3.02856 2.98267 1.5 4.34594 1.5 6.85185V14.3932C1.5 16.9385 3.02856 18.3333 5.4758 18.3333H12.5242C14.9791 18.3333 16.5 16.9622 16.5 14.4563V6.85185C16.5077 4.34594 14.9868 2.98267 12.5319 2.98267Z" stroke="#199A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></button>
                <span className='text-xs ms-4'>Wednesday, Jun 23, 2021 | 10:00 AM</span>
            </div>
            <div className='w-11/12 border-t border-gray-200  mx-6 my-4 '></div>
            <div className='w-full ms-8 font-bold'>Reason</div>
            <div className='w-full px-4 flex items-center mt-4'>
                <button className='w-8 h-8 rounded-full bg-secondry-1 flex justify-center items-center'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.57693 1.32422H5.4611C2.8986 1.32422 1.29193 3.13839 1.29193 5.70672V12.6351C1.29193 15.2034 2.8911 17.0176 5.4611 17.0176H12.8144C15.3853 17.0176 16.9844 15.2034 16.9844 12.6351V9.27838" stroke="#199A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 8.10074L12.584 1.87324C13.3599 1.09824 14.6174 1.09824 15.3932 1.87324L16.4074 2.88741C17.1832 3.66324 17.1832 4.92158 16.4074 5.69658L10.1499 11.9541C9.81069 12.2932 9.35069 12.4841 8.87069 12.4841H5.74902L5.82736 9.33408C5.83902 8.87074 6.02819 8.42908 6.35652 8.10074Z" stroke="#199A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M11.6377 2.83545L15.4427 6.64045" stroke="#199A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></button>
                <span className='text-xs ms-4'>Chest pain</span>
            </div>
            <div className='w-11/12 border-t border-gray-200  mx-6 my-4 '></div>
            <div className='w-full ms-8 font-bold'>Payment Details</div>
            <div className='w-full flex justify-between px-4 mt-4 '>
                <span className='text-sm text-gray-300'>Consultation</span>
                <span className='text-sm '>4081.00 DA</span>
            </div>
            <div className='w-full flex justify-between px-4 mt-1 '>
                <span className='text-sm text-gray-300'>Admin Fee</span>
                <span className='text-sm '>200.00 DA</span>
            </div>
            <div className='w-full flex justify-between px-4 mt-1 '>
                <span className='text-sm text-gray-300'>Aditional Discount</span>
                <span className='text-sm '>00.00 DA</span>
            </div>
            <div className='w-full flex justify-between px-4 mt-2 '>
                <span className='text-sm font-bold'>Total</span>
                <span className='text-sm text-primary-1'>4281.00 DA</span>
            </div>
            <div className='w-11/12 border-t border-gray-200  mx-6 my-4 '></div>
            <div className='w-full ms-8 font-bold'>Payment Methode</div>
            <div className='w-11/12 mt-2 flex items-center border rounded-xl px-2 py-3 ' >
                <svg width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.13636 0.363636L5.15909 8.56818H5.25L9 0.363636H12.5682L6.79545 12H2.47727L0.568182 0.363636H4.13636ZM16.848 0.363636L14.9162 12H11.7571L13.6889 0.363636H16.848ZM24.0043 4C24.0384 3.625 23.9474 3.33144 23.7315 3.11932C23.5156 2.90341 23.152 2.79545 22.6406 2.79545C22.3149 2.79545 22.0421 2.83333 21.8224 2.90909C21.6065 2.98485 21.438 3.08902 21.3168 3.22159C21.1993 3.35417 21.1255 3.50758 21.0952 3.68182C21.0611 3.81818 21.063 3.94318 21.1009 4.05682C21.1425 4.16667 21.2202 4.26705 21.3338 4.35795C21.4512 4.44886 21.6046 4.5303 21.794 4.60227C21.9872 4.67424 22.2164 4.73864 22.4815 4.79545L23.3906 5C24.0118 5.13636 24.5327 5.31629 24.9531 5.53977C25.3774 5.75947 25.7107 6.02083 25.9531 6.32386C26.1955 6.62689 26.3546 6.96591 26.4304 7.34091C26.5099 7.71591 26.5118 8.125 26.4361 8.56818C26.3073 9.33333 26.0099 9.98106 25.544 10.5114C25.0781 11.0417 24.4702 11.4451 23.7202 11.7216C22.9702 11.9981 22.1027 12.1364 21.1179 12.1364C20.1103 12.1364 19.2543 11.9867 18.5497 11.6875C17.849 11.3845 17.3414 10.9223 17.027 10.3011C16.7164 9.67614 16.6406 8.87879 16.7997 7.90909H19.7997C19.7543 8.26515 19.7921 8.56439 19.9134 8.80682C20.0346 9.04924 20.2296 9.23295 20.4986 9.35795C20.7675 9.48295 21.1027 9.54545 21.5043 9.54545C21.8452 9.54545 22.1368 9.50379 22.3793 9.42045C22.6217 9.33712 22.813 9.22159 22.9531 9.07386C23.0933 8.92614 23.1785 8.75758 23.2088 8.56818C23.2391 8.39394 23.2088 8.23864 23.1179 8.10227C23.027 7.96591 22.8622 7.8428 22.6236 7.73295C22.3849 7.62311 22.0573 7.52273 21.6406 7.43182L20.527 7.18182C19.5384 6.95455 18.7921 6.57955 18.2884 6.05682C17.7846 5.53409 17.6065 4.81818 17.7543 3.90909C17.8755 3.16667 18.1804 2.51894 18.669 1.96591C19.1615 1.40909 19.7865 0.977272 20.544 0.670454C21.3054 0.359848 22.1482 0.204545 23.0724 0.204545C24.0118 0.204545 24.7978 0.361742 25.4304 0.676136C26.0668 0.99053 26.5232 1.43182 26.7997 2C27.08 2.56818 27.1558 3.23485 27.027 4H24.0043ZM29.6392 12H26.2301L32.0028 0.363636H36.321L38.2301 12H34.821L33.6847 3.56818H33.5938L29.6392 12ZM29.7756 7.40909H36.1847L35.7756 9.77273H29.3665L29.7756 7.40909Z" fill="#1A1F71" /></svg>
                <span className='text-sm'>..***2881</span>
                <span className='flex-1 text-end text-sm text-gray-400'>change</span>
            </div>
            <div className='w-full flex justify-center mt-4'>
                <button onClick={(e) => { setPopUp(true) }} type='submit' className='w-3/5 bg-primary-1 py-2  flex justify-center rounded-full font-semibold text-white' >Book Apointment</button>
            </div>
            {
                popUp ?
                    <Popup closePopup={(e) => { }}>
                        <div className='w-4/5 h-3/5 px-4 bg-white rounded-xl flex flex-col items-center'>
                            <Lottie className='w-52 h-52' animationData={check} loop={false} />
                            <h1 className='text-xl font-bold'>Payment Success</h1>
                            <p className='text-sm mt-4 text-center'>Your payment has been successful, you can have a consultation session with your trusted pharmacy</p>
                            <Link href='/map' className='w-4/5 mt-12 bg-primary-1 py-2  flex justify-center rounded-full font-semibold text-white' >Show in the map</Link>

                        </div>

                    </Popup>
                    : null
            }
        </div>
    )
}

export default Payment