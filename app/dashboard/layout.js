'use client'

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { signOut, useSession } from 'next-auth/react';
import UserMenu from "@/components/UserMenu";
import { usePathname } from "next/navigation";

const layout = ({ children }) => {
    const pathname = usePathname();
    const parts = pathname.split("/");
    const last_path = parts[2]

    const { data: session, update } = useSession()
    const user = session?.user


    return (
        <div className=' relative w-screen h-screen flex flex-col md:justify-between '>
            <div className='w-full flex items-center justify-end'>
            <UserMenu />

            </div>
            <div className='w-1/5 min-h-screen hidden md:block '></div>
            <div className='w-full md:w-3/4 md:h-full overflow-y-scroll hide-scrollbar'>
                {children}
            </div>
            <div className=' absolute h-16 bg-white !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] bottom-0 w-full md:w-1/4 md:h-screen flex md:flex-col md:items-start md:ps-4 md:gap-3 md:justify-start  justify-evenly items-center'>
                <motion.img
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    // transition={{ duration: 1 }}
                    src="/logo.png" className='hidden md:block md:w-1/2 h-32 ms-10 mb-10' />
                <Link href={"/dashboard/home"} className={`flex items-end ${last_path == "home" ? "text-primary-1" : "text-gray-300"}`}>
                    <i className={`ri-home-line text-2xl  `}></i>
                    <span className='hidden md:block ms-2 font-bold'>Home</span>
                </Link>
                {user?.type == "user" ?
                    <Link href={"/dashboard/products"} className={`flex items-end ${last_path == "products" ? "text-primary-1" : "text-gray-300"}`}>
                        <i class="ri-price-tag-3-line text-2xl"></i>
                        <span className='hidden md:block ms-2 font-bold'>products</span>
                    </Link>
                    :
                    null
                }
                {user?.type == "user" ?
                    <>
                        <Link href={"/dashboard/orders"} className={`flex items-end ${last_path == "orders" ? "text-primary-1" : "text-gray-300"}`}>
                            {/* <i className={`ri-mail-line text-2xl `}></i> */}
                            <i class="ri-inbox-2-line text-2xl"></i>
                            <span className='hidden md:block ms-2 font-bold'>orders</span>
                        </Link>
                    </>
                    :
                    null
                }
                <Link href={"/dashboard/freecom"} className={`flex items-end ${last_path == "freecom" ? "text-primary-1" : "text-gray-300"}`}>
                    <i class="ri-question-line text-2xl"></i>
                    <span className='hidden md:block ms-2 font-bold'>Free Orders</span>
                </Link>
                {user?.type == "pharmacy" ?
                    <>
                        <Link href={"/dashboard/commands"} className={`flex items-end ${last_path == "commands" ? "text-primary-1" : "text-gray-300"}`}>
                            <i className={`ri-calendar-line text-2xl`} ></i>
                            <span className='hidden md:block ms-2 font-bold'>commands</span>
                        </Link>
                        <Link href={"/dashboard/exchange"} className={`flex items-end ${last_path == "exchange" ? "text-primary-1" : "text-gray-300"}`}>
                            <i className={`ri-store-2-line text-2xl `}></i>
                            <span className='hidden md:block ms-2 font-bold'>exchange</span>
                        </Link>
                    </>
                    :
                    null
                }
            </div>


        </div>
    )
}

export default layout