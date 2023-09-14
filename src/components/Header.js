"use client";

import Image from 'next/image'
import { Burger, SearchIcon, UserIcon } from './Icons'
import { useState } from 'react'
import { Avatar, Button } from '@material-tailwind/react';

export default function Header(props) {
    const [searchInput, setInput] = useState('');

    const openNotifications = () => {
        props.openNotification(true)
    }

    const openMenu = () => {
        props.menuOpen(true)
    }

    return <div className='flex fixed py-3 px-5 w-full' style={{ zIndex: 9 }}>
        <div className="lg:flex md:flex sm:flex flex lg:w-1/5 md:w-1/4 w-1/4 h-9">
            <Image src="/velte.png" width={43} height={43} alt='Velte' />
            <div className="lg:flex md:flex hidden flex-col justify-end -ml-2">
                <p className="text-base font-semibold text-white">elte</p>
            </div>
        </div>
        <div className='lg:flex md:flex sm:flex flex lg:w-1/3 md:w-1/2 w-1/2 h-9'>
            <div className='flex px-2 py-1 w-full rounded-full' style={{ border: '0.5px solid rgba(255, 255, 255, 0.50)' }}>
                <SearchIcon className="mx-2" fill="#FFFFFF" style={{ marginTop: 6 }} />
                <input type='text' style={{ width: '100%' }} value={searchInput} onChange={(e) => setInput(e.target.value)} placeholder='Search Velte' className='mx-1' />
            </div>
        </div>
        <div className='lg:flex hidden flex flex-grow justify-end w-1/2 mx-5'>
            <div className='flex flex-col justify-center mx-5'>
                <span className='text-base text-white'>Explore Velte</span>
            </div>

            <div className='flex flex-col justify-center mx-5'>
                <span className='text-base text-white'>Rankings</span>
            </div>

            {/* <div className='flex flex-col justify-center mx-5'>
                <span className='text-base text-white'>Wallet</span>
            </div>

            <div className='flex flex-col justify-center mx-5'>
                <span className='text-base cursor-pointer text-white' onClick={openNotifications}>Notifications</span>
            </div>

            <div className='flex flex-col justify-center ml-5'>
                <Avatar src="/public-avatar.png" size='sm' alt="CA" />
            </div> */}

            <div className='flex flex-col justify-center mx-5'>
                <Button className='flex items-center gap-3 py-2 px-4 bg-iconColor'>
                    <UserIcon />
                    <span className='text-base capitalize' style={{ fontFamily: '__Work_Sans_78567c' }}>Sign Up</span>
                </Button>
            </div>

            <div className='flex flex-col justify-center ml-2'>
                <Button variant='gradient' className='flex items-center gap-3 py-2 px-6'>
                    <span className='text-base capitalize' style={{ fontFamily: '__Work_Sans_78567c' }}>Login</span>
                </Button>
            </div>

        </div>

        {/** NAVIGATION FOR TABLETS & MOBILE */}

        <div className='lg:hidden flex flex-grow justify-end md:w-1/4 w-1/4'>
            <div className='flex flex-col justify-center'>
                <span onClick={openMenu}><Burger /></span>
            </div>
        </div>
    </div>
}