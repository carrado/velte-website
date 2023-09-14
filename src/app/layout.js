"use client";

import Header from '@/components/Header'
import './globals.css'
import { Work_Sans } from 'next/font/google'
import { Avatar, Button, Drawer, IconButton, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import { UserIcon } from '@/components/Icons';


const inter = Work_Sans({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Velte',
  description: 'velte real estate properties Nigeria nigeria houses lands',
}

export default function RootLayout({ children }) {
  const [open, openDrawer] = useState(false);
  const [openMenu, openMenuDrawer] = useState(false);

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


  return (
    <html lang="en">
      <title>{ metadata.title }</title>
      <body className={inter.className}>
        <Header openNotification={setOpenDrawer} menuOpen={setOpenMenu} />

        {children}

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

        {/** MENU SIDE BAR */}
        <Drawer open={openMenu} onClose={closeMenu} placement='right' size={400} className="p-4">
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
          <div className='flex flex-col w-full my-8 py-3'>
            <div className='flex flex-col justify-center'>
              <span className='text-base'>Explore Velte</span>
            </div>
            <div className='border my-3' />

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
