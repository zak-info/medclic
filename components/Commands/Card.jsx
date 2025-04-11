import Image from 'next/image'
import React from 'react'
import ShowCommands from './ShowCommands';
import CancleCommand from './CancleCommand';

const Card = ({ data }) => {

    console.log("  data : ",data);
    function getFirstLetters(sentence) {
        // Split the sentence into words
        const words = sentence?.split(' ');

        // Extract the first letter of each word
        const firstLetters = words?.map(word => word?.charAt(0)?.toUpperCase());

        return firstLetters;
    }

    return (
        <div className=' relative w-5/6 border rounded-lg px-4 mt-6 py-3'>
            <ShowCommands data={data} />
            <div className='w-full flex justify-between '>
                <div className='flex flex-col'>
                    <span className='text-sm'>Mr/Mme. {data?.user?.fullname}</span>
                    <span className='text-xs text-gray-400'>{ new Date(data?.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
            <div className='w-full flex flex-col gap-2  mt-6'>
                <div className='flex items-center '>
                    <i class="ri-map-pin-line text-primary-1"></i>
                    <span className='text-xs ms-1'>{data?.user?.address}</span>
                </div>
                <div className='flex items-center'>
                    <a href={"tel:" + data?.client?.phone}><i class="ri-phone-line  text-primary-1"></i></a>
                    <span className='text-xs ms-1'>{data?.user?.phone}</span>
                </div>
                <div className='flex items-center '>
                    <span className='w-1 h-1 bg-orange-400 rounded-full'></span>
                    <span className='text-xs ms-4'>pending</span>
                </div>
            </div>
            <div className='w-full flex justify-end mt-4'>
                <CancleCommand idCommand={data?._id} idPharmacy={data?.idPharmacy} />
            </div>


        </div>
    )
}

export default Card