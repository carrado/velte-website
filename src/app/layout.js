"use client";

import Header from '@/components/Header'
import './globals.css'
import { Work_Sans } from 'next/font/google'
import { Accordion, AccordionBody, AccordionHeader, Avatar, Button, Drawer, IconButton, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { UserIcon } from '@/components/Icons';
import Link from 'next/link';


const inter = Work_Sans({ subsets: ['latin'], weight: '400' })

const metadata = {
  title: 'Velte',
  description: 'velte real estate properties Nigeria nigeria houses lands',
}



export default function RootLayout({ children }) {

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


  const [open, openDrawer] = useState(false);
  const [openMenu, openMenuDrawer] = useState(false);
  const [explore, openExplore] = useState(false);


  const setOpenDrawer = () => {
    openDrawer(true);
  }

  const setOpenMenu = () => {
    openMenuDrawer(true);
  }

  const closeNotifications = () => {
    openDrawer(false)
  }

  const closeMenu = () => {
    openMenuDrawer(false)
  }

  const handleOpen = () => {
    openExplore(!explore)
  }


  return (
    <html lang="en">
      <title>{metadata.title}</title>
      <body className={inter.className}>
        <div className='flex flex-col h-16'>
          <Header openNotification={setOpenDrawer} menuOpen={setOpenMenu} />
        </div>

        <div>{children}</div>

        {/** NOTIFICATIONS SIDE BAR */}
        <Drawer open={open} onClose={closeNotifications} placement='right' size={400} className="p-4">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Notifications
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeNotifications}>
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
        <Drawer open={openMenu} onClose={closeMenu} placement='right' overlay={true} size={400} className="p-4">
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              {/*Menu*/}
              <Avatar src="/public-avatar.png" size='sm' alt="CA" />
              <span className='text-base mx-3'>Chukwuemeka Anyanwu</span>
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeMenu}>
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

      </body>
    </html>
  )
}
