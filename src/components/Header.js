"use client";

import Image from 'next/image'
import { Burger, SearchIcon, UserIcon } from './Icons'
import { useState } from 'react'
import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import Link from 'next/link';


export default function Header(props) {
    const [searchInput, setInput] = useState('');

    const openNotifications = () => {
        props.openNotification(true)
    }

    const openMenu = () => {
        props.menuOpen(true)
    }

    const firstBlockExplore = [
        { title: 'Retail', description: 'Businesses that sell products directly to consumers' },
        { title: 'Manufacturing', description: 'Companies that produce tangible goods from raw materials' },
        { title: 'Service', description: 'Businesses that provide intangible services to customers.' },
        { title: 'Technology', description: 'Companies focused on developing and selling technology products ' },
        { title: 'Healthcare', description: 'Businesses involved in the medical and healthcare industry.' },
        { title: 'Finance', description: 'Companies offering financial services like banking, insurance, and investment' },
        { title: 'Hospitality', description: 'Businesses in the travel, tourism, and hospitality sectors' },
    ];

    const secondBlockExplore = [
        { title: 'Agriculture', description: 'Farms and agribusinesses involved in food production' },
        { title: 'Transportation and Logistics', description: 'Companies involved in the movement of goods and people.' },
        { title: 'Construction', description: 'Businesses engaged in building and infrastructure development' },
        { title: 'Entertainment and Media', description: 'Companies in the entertainment and media industry.' },
        { title: 'Real Estate', description: 'Companies dealing with buying, selling, or managing properties.' },
        { title: 'Education', description: 'Educational institutions and companies providing educational services.' },
    ];


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
                <input type='text' style={{ width: '100%' }} value={searchInput} onChange={(e) => setInput(e.target.value)} placeholder='Search Velte' className='mx-1 text-white' />
            </div>
        </div>
        <div className='lg:flex hidden flex flex-grow justify-end w-1/2 mx-5'>
            <div className='flex flex-col justify-center mx-5'>
                <Menu
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                    }}
                >
                    <MenuHandler>
                        <span className='text-base text-white cursor-pointer'>Explore Velte</span>
                    </MenuHandler>
                    <MenuList className="w-[36rem] flex flex-row">
                        <ul className="flex w-full flex-col gap-1">
                            {firstBlockExplore.map((data, index) => (
                                <Link href={'/'} key={index}>
                                    <MenuItem>
                                        <span className='text-sm' style={{ fontFamily: '__Work_Sans_b31760' }}>{data.title}</span></MenuItem>
                                </Link>
                            ))}
                        </ul>
                        <ul className="col-span-4 flex w-full flex-col gap-1">
                            {secondBlockExplore.map((data, index) => (
                                <Link href={'/'} key={index}>
                                    <MenuItem>
                                        <span className='text-sm' style={{ fontFamily: '__Work_Sans_b31760' }}>{data.title}</span></MenuItem>
                                </Link>
                            ))}
                        </ul>
                    </MenuList>
                </Menu>
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
                    <Link href="/signup" className='flex'>
                        <UserIcon className='mr-3' />
                        <span className='text-base capitalize' style={{ fontFamily: '__Work_Sans_b31760' }}>Sign Up</span>
                    </Link>
                </Button>
            </div>

            <div className='flex flex-col justify-center ml-2'>
                <Button variant='gradient' className='flex items-center gap-3 py-2 px-6'>
                    <span className='text-base capitalize' style={{ fontFamily: '__Work_Sans_b31760' }}>Login</span>
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