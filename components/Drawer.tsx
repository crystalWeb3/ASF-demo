'use client';
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { UserIcon, PhoneIcon, MusicalNoteIcon,LockClosedIcon, EnvelopeIcon, LightBulbIcon, ArrowRightEndOnRectangleIcon, UserPlusIcon, StarIcon, HomeIcon, NewspaperIcon, GiftIcon} from '@heroicons/react/24/outline';
import { usePathname, useRouter } from 'next/navigation';

interface DrawerProps {
    children?: ReactNode;
    isOpen: boolean;
    closeDrawer: () => void;
}


interface NavigationItem {
    name: string;
    href: string;
    icon: ReactNode;
    action?: () => void;
}


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Drawer = ({ isOpen, closeDrawer }: DrawerProps) => {
    const pathname = usePathname();
   
    const nav_items: NavigationItem[] = [
    { name: "Home", href: "/main/home", icon: <HomeIcon className="h-6 w-6" /> },
    { name: "Copilot club", href: "/main/copilot-club", icon: <UserIcon className="h-6 w-6" /> },
    { name: "Donate", href: "/main/donate", icon: <GiftIcon className="h-6 w-6" /> },
    { name: "Steering Locks!", href: "/main/steering-locks", icon: <LockClosedIcon className="h-6 w-6" /> },
    { name: "Safe Call", href: "/main/safe-call", icon: <PhoneIcon className="h-6 w-6" /> },
    { name: "Concentration", href: "/main/concentration", icon: <LightBulbIcon className="h-6 w-6" /> },
    { name: "Jingle", href: "/main/jingle", icon: <MusicalNoteIcon className="h-6 w-6" /> },
    { name: "News", href: "/main/news", icon: <NewspaperIcon className="h-6 w-6" /> },
    { name: "Letters", href: "/main/letters", icon: <EnvelopeIcon className="h-6 w-6" /> },
    ];
    
    return (
        <div className="fixed z-[1003] top-0 left-0 will-change-transform transform-gpu">
            <div className={`fixed w-[100vw] h-[100vh] z-[1003] overflow-hidden transition-all ${isOpen? 'block bg-[#00000095]': 'hidden bg-transparent'}`} onClick={closeDrawer}>
            </div>
            <div id='dashboard-drawer' className={`fixed md:hidden will-change-transform transform-gpu left-[-270px] h-[100vh] w-[270px] bg-[#F2F7FB] flex flex-col gap-y-5 pt-3 transition-all z-[1004] ${isOpen? 'translate-x-[100%]': 'translate-x-[0%]'}`}>
                <Link href='/'>
                    <h2 className="w-full text-[33px] font-bold inline-flex items-center justify-start p-3">
                        <div className="flex items-center">
                            <Image src='/banner.png' width={45} height={45} />
                        </div>
                        <span>&nbsp;ASF</span>
                    </h2>
                </Link>
                <div className="flex flex-col gap-3">
                    { nav_items.map((itm, idx) => {
                        if(itm.href) {
                            return <Link href={'#'} key={idx}>
                                <div className={`w-full inline-flex flex-row items-center pl-[20px] py-1 gap-2 cursor-pointer transition ease-in duration-100 hover:bg-[#007DFC50] ${ pathname === itm.href? 'text-[#007DFC] font-bold': ''}`}
                                    onClick={() => {
                                        closeDrawer();
                                        if(itm?.action) itm.action();
                                    }}
                                >
                                    <span>{itm.icon}</span>
                                    <span className='inline-block text-xl'>&nbsp;{itm.name}</span>
                                </div>
                            </Link>
                        } else {
                            return <div key={idx} className={`w-full inline-flex flex-row items-center pl-[20px] py-1 gap-2 cursor-pointer transition ease-in duration-100 hover:bg-[#007DFC50]`}
                                onClick={async () => {
                                    closeDrawer();
                                    if(itm?.action) itm.action();
                                }}
                            >
                                <span>{itm.icon}</span>
                                <span className='inline-block text-xl'>&nbsp;{itm.name}</span>
                            </div>
                        }
                    })}
                        {/* <>
                            <Link href='/auth/login'>
                                <div className={`w-full inline-flex flex-row items-center pl-[20px] py-1 gap-2 cursor-pointer transition ease-in duration-100 hover:bg-[#007DFC50]`}
                                    onClick={() => {
                                        closeDrawer();
                                    }}
                                >
                                    <span><ArrowRightEndOnRectangleIcon width={30} /></span>
                                    <span className='inline-block text-xl'>&nbsp;Login</span>
                                </div>
                            </Link>
                            <Link href='/auth/register'>
                                <div className={`w-full inline-flex flex-row items-center pl-[20px] py-1 gap-2 cursor-pointer transition ease-in duration-100 hover:bg-[#007DFC50]`}
                                    onClick={() => {
                                        closeDrawer();
                                    }}
                                >
                                    <span><UserPlusIcon width={30} /></span>
                                    <span className='inline-block text-xl'>&nbsp;SignUp</span>
                                </div>
                            </Link>
                        </> */}
                </div>
            </div>
        </div>
    );
}

export default Drawer;
