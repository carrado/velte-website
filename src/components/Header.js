"use client";

import Image from 'next/image'
import { Burger, SearchIcon, UserIcon } from './Icons'
import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, Avatar, Button, Drawer, IconButton, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react';
import Link from 'next/link';


export default function Header(props) {

    const Icon = ({ open }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`${open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        );
    }


    const [open, openDrawer] = useState(false);
    const [openMenu, openMenuDrawer] = useState(false);
    const [explore, openExplore] = useState(false);
    const [searchInput, setInput] = useState('');


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
                <span className='text-base cursor-pointer text-white' onClick={() => openDrawer(true)}>Notifications</span>
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
                <span onClick={() => openMenuDrawer(true)}><Burger /></span>
            </div>
        </div>




        {/** NOTIFICATIONS SIDE BAR */}
        <Drawer open={open} onClose={() => openDrawer(false)} placement='right' size={400} className="p-4">
            <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                    Notifications
                </Typography>
                <IconButton variant="text" color="blue-gray" onClick={() =>  openDrawer(false)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </IconButton>
            </div>
        </Drawer>

        {/** MENU SIDE BAR FOR TABLET AND MOBILE PHONES*/}
        <Drawer open={openMenu} onClose={() => openMenuDrawer(false)} placement='right' overlay={true} size={400} className="p-4">
            <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                    {/*Menu*/}
                    <Avatar src="/public-avatar.png" size='sm' alt="CA" />
                    <span className='text-base mx-3'>Chukwuemeka Anyanwu</span>
                </Typography>
                <IconButton variant="text" color="blue-gray" onClick={() => openMenuDrawer(false)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </IconButton>
            </div>
            <div className='flex flex-col w-full py-3'>
                <Accordion open={explore} icon={<Icon open={explore} />}>
                    <AccordionHeader onClick={() => handleOpen()} className='hover:bg-white'>
                        <span className='text-base'>Explore Velte</span>
                    </AccordionHeader>
                    <AccordionBody>
                        <div className='w-full flex flex-row'>
                            <div className='flex flex-col w-1/2'>
                                {firstBlockExplore.map((data, index) => (
                                    <Link href={'/'} key={index} className='p-2 flex flex-col'>
                                        <span className='text-sm' style={{ fontFamily: '__Work_Sans_78567c' }}>{data.title}</span>
                                    </Link>
                                ))}
                            </div>
                            <div className='flex flex-col w-1/2'>
                                {secondBlockExplore.map((data, index) => (
                                    <Link href={'/'} key={index} className='p-2 flex flex-col'>
                                        <span className='text-sm' style={{ fontFamily: '__Work_Sans_78567c' }}>{data.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </AccordionBody>
                </Accordion>

                <div className='flex flex-col justify-center mt-5'>
                    <span className='text-base'>Rankings</span>
                </div>
                <div className='border my-3' />

                <div className='flex flex-col justify-center mt-5'>
                    <span className='text-base'>Wallet</span>
                </div>
                <div className='border my-3' />

                <div className='flex flex-col justify-center mt-5'>
                    <span className='text-base'>Notifications</span>
                </div>
                <div className='border my-3' />

                <div className='flex flex-col justify-center mt-5'>
                    <span className='text-base'>My Profile</span>
                </div>
                <div className='border my-3' />

                <div className='flex mt-2'>
                    <Button className='flex items-center gap-3 py-3 px-4 w-max bg-iconColor'>
                        <UserIcon />
                        <span className='text-base capitalize' style={{ fontFamily: '__Work_Sans_78567c' }}>Sign Up</span>
                    </Button>

                    <Button variant='gradient' className='flex items-center gap-3 py-3 px-4 w-max ml-4'>
                        <span className='text-base capitalize' style={{ fontFamily: '__Work_Sans_78567c' }}>Login</span>
                    </Button>
                </div>
            </div>
        </Drawer>

    </div>
}