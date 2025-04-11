import React, { useState } from 'react'
import AddMedication from './AddMedication'
import CreateMed from './CreateMed'
import DwaCard from './DwaCard'
import GetMap from './GetMap'
import { Tab, Tabs } from '@nextui-org/react'

const Apointment = ({ user, products, setSection }) => {
    const [days, setDays] = useState([
        { month: "Mon", day: "23", status: false },
        { month: "Tue", day: "24", status: false },
        { month: "Wed", day: "25", status: false },
        { month: "Thu", day: "26", status: true },
        { month: "Fri", day: "27", status: false },
        { month: "Sat", day: "28", status: false },
    ])

    const [times, setTimes] = useState([
        { time: "14:00 PM", status: "not" }, { time: "04:00 AM", status: "yet" }, { time: "15:00 PM", status: "not" }, { time: "17:00 PM", status: "not" }, { time: "9:00 AM", status: "done" }, { time: "18:00 PM", status: "yet" }, { time: "10:00 AM", status: "yet" }, { time: "11:00 AM", status: "yet" }, { time: "12:00 AM", status: "not" },
    ])
    const ChangeDay = (day) => {
        setDays(prevItems =>
            prevItems.map(item =>
                item.day == day ? { ...item, status: true } : { ...item, status: false }
            )
        );
    }
    const ChangeTime = (time) => {
        setTimes(prevItems =>
            prevItems.map(item =>
                item.time == time && item.status != "not" ? { ...item, status: "done" } : item.status == "done" ? { ...item, status: "yet" } : item
            )
        );
    }
    return (
        <>
            <div className='w-full ms-8 mt-6 font-bold'>About</div>
            <p className='ms-4 me-4 text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit numquam modi sint, praesentium nobis vero repellendus aspernatur soluta qui mollitia, pariatur in incidunt, nam nesciunt nulla doloremque et delectus.</p>
            <div className='w-11/12 border-t border-gray-200  m-6 '></div>
            <div className='w-full flex justify-end px-4'>
                <CreateMed user={user} />
            </div>
            <Tabs aria-label="Options" color="primary" variant="solid" className='w-full mt-6'>
                <Tab
                    className='w-full'
                    key="All"
                    title={
                        <div className="flex items-center space-x-2">
                            <i class="ri-file-list-3-fill text-xl userId"></i>
                            <span>All</span>
                        </div>
                    }
                >
                    <div className='w-full flex flex-wrap gap-4 px-4 mt-8 justify-center'>
                        {
                            products?.map((p, index) => (
                                <DwaCard data={p} />
                            ))
                        }
                    </div>
                </Tab>
                <Tab
                    className='w-full'
                    key="photos"
                    title={
                        <div className="flex items-center space-x-2">
                            <i class="ri-capsule-fill text-xl userId"></i>
                            <span>Medications</span>
                        </div>
                    }
                >
                    <div className='w-full flex flex-wrap gap-4 px-4 mt-8 justify-center'>
                        {
                            products?.filter?.(item => item?.type == "medication")?.map((p, index) => (
                                <DwaCard data={p} />
                            ))
                        }
                    </div>
                </Tab>
                <Tab
                    className='w-full'
                    key="music"
                    title={
                        <div className="flex items-center space-x-2">
                            <i class="ri-medicine-bottle-line text-xl"></i>
                            <span>Parapharma</span>
                        </div>
                    }
                >
                    <div className='w-full flex flex-wrap gap-4 px-4 mt-8 justify-center'>
                        {
                            products?.filter?.(item => item?.type == "parapharma")?.map((p, index) => (
                                <DwaCard data={p} />
                            ))
                        }
                    </div>
                </Tab>
                <Tab
                    className='w-full'
                    key="videos"
                    title={
                        <div className="flex items-center space-x-2">
                            {/* <i class="ri-capsule-fill text-xl userId"></i> */}
                            <i class="ri-amazon-fill text-xl"></i>
                            <span>Consmetics</span>
                        </div>
                    }
                >
                    <div className='w-full flex flex-wrap gap-4 px-4 mt-8 justify-center'>
                        {
                            products?.filter?.(item => item?.type == "cosmetics")?.map((p, index) => (
                                <DwaCard data={p} />
                            ))
                        }
                    </div>
                </Tab>
            </Tabs>

            <div className='w-full px-10 mt-10 min-h-96 text-sm font-bold text-gray-500'>
                <h1>Change ur address</h1>
                <GetMap userId={user?._id} user={user} init_coordinates={user?.data?.long_lat} />
            </div>
            <div className='w-full flex mt-12 px-4'>
                <button onClick={(e) => { setSection("payment") }} type='submit' className='w-4/5 ms-8 bg-primary-1 py-2  flex justify-center rounded-full font-semibold text-white' >Pay taxes</button>
            </div>
        </>
    )
}

export default Apointment