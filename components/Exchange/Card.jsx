import Image from 'next/image'
import React from 'react'
import ShowCommands from './ShowCommands';
import DwaCard from './DwaCard';

const Card = ({ data }) => {
    console.log(data);

    function getFirstLetters(sentence) {
        // Split the sentence into words
        const words = sentence?.split(' ');

        // Extract the first letter of each word
        const firstLetters = words?.map(word => word?.charAt(0)?.toUpperCase());

        return firstLetters;
    }

    return (
        <div className=' relative w-5/6 border rounded-lg px-4 mt-6 py-3'>
            {/* <Image src={data?.imageUrl} width={100} height={100} className=' absolute top-0 right-0 m-4 w-32 h-32' /> */}
            {/* <ShowCommands data={data} /> */}
            <div className='w-full flex justify-between '>
                <div className='flex flex-col'>
                    <span className='text-sm'>Ph. {data?.idUser?.fullname}</span>
                    <span className='text-xs text-gray-400'>{new Date(data?.createdAt).toLocaleDateString()}</span>
                </div>
                {/* <div class="w-10 h-10 bg-[#329cde]  border border-white rounded-full flex justify-center items-center text-white" alt="">{getFirstLetters(data?.fullname)}</div> */}
            </div>
            <div className='w-full flex items-center  gap-4  mt-6'>
                <div className='flex items-center '>
                    <i class="ri-map-pin-line text-primary-1"></i>
                    <span className='text-xs ms-1'>{data?.idUser?.address}</span>
                </div>
                <div className='flex items-center '>
                    <a href={"tel:" + data?.client?.phone}><i class="ri-phone-line  text-primary-1"></i></a>
                    <span className='text-xs ms-1'>{data?.idUser?.phone}</span>
                </div>
                <div className='flex items-center '>
                    <span className='w-1 h-1 bg-orange-400 rounded-full'></span>
                    <span className='text-xs ms-2'>pending</span>
                </div>
            </div>
            <h1 className='mt-4 font-light'>To Offer</h1>
            <div className='w-full flex flex-wrap gap-4 px-4 mt-8 justify-start'>
                {
                    data?.toOffer?.map((p, index) => (

                        <DwaCard data={p} />
                    ))
                }
            </div>
            <h1 className='mt-4 font-light'>To Get</h1>
            <div className='w-full flex flex-wrap gap-4 px-4 mt-8 justify-start'>
                {
                    data?.toGet?.map((p, index) => (
                        <DwaCard data={p} />
                    ))
                }
            </div>
            <div className='w-full flex justify-end mt-4'>
                {/* <button className='w-2/5 py-2 bg-secondry-1 rounded-lg'>Cancel</button> */}
                <a href={"/dashboard/pharmacy/"+data?.idPharmacy?._id} className='w-2/5 text-center py-2 bg-primary-1 text-white rounded-lg'>Discover</a>
            </div>


        </div>
    )
}

export default Card