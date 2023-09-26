"use client";

import { Button, Checkbox, Input, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";

export default function Signup() {
    const [accountType, setAccountType] = useState('Select Account Type');

    return (
        <div
            className="w-full h-full flex flex-col"
        >
            <div className="w-full h-full flex lg:flex-row md:flex-row flex-col">
                <div className="flex lg:w-1/2 md:w-1/2 w-full flex-grow h-full bg-office-vlte bg-blend-darken">
                    <div className="lg:flex md:flex sm:flex flex lg:w-1/5 md:w-1/4 w-1/4 h-9 z-10 my-3 mx-3">
                        <Image src="/velte.png" width={43} height={43} alt='Velte' />
                        <div className="lg:flex md:flex hidden flex-col justify-end -ml-2">
                            <p className="text-base font-semibold text-white">elte</p>
                        </div>
                    </div>
                    <div className="absolute w-full h-full" style={{ backgroundColor: 'rgba(0, 0, 0, .8)' }}></div>
                    <div className="flex w-full h-full flex-col justify-center p-5">
                        <div className="flex flex-row justify-end">
                            <div className="lg:w-3/4 md:w-3/4 w-full flex flex-col my-10 div-right">
                                <div className="lg:w-3/4 md:w-3/4 w-full my-4 ml-5">
                                    <p
                                        className="text-lg"
                                        style={{ lineHeight: "38px" }}
                                    >
                                        Welcome to Velte!
                                        <br />
                                        Enter your details and start creating Ads, connecting with other businesses and selling your products and services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex lg:w-1/2 md:w-1/2 w-full flex-grow h-full lg:p-10 md:p-10 py-10 px-5" style={{ height: '100vh' }}>
                    <div className="flex w-full flex-col lg:justify-center md:justify-center">
                        <div className="w-full flex justify-center">
                            <div className="w-full flex justify-center flex-col">
                                <p className="text-4xl font-semibold text-center capitalize">
                                    Create account
                                </p>

                                <div className="my-5 w-full flex justify-center">
                                    <div className="lg:w-2/3 md:w-2/3 w-full flex p-4 justify-center">
                                        <form className="mb-2 w-80 max-w-screen-lg sm:w-96">
                                            <div className="mb-4 flex flex-col gap-6">
                                                <Input size="lg" color="white" label="Name" />
                                                <Input size="lg" color="white" label="Email" />
                                                <Menu
                                                >
                                                    <MenuHandler>
                                                        <Button
                                                            size="lg"
                                                            variant="outlined"
                                                            color="white"
                                                            fullWidth
                                                            className="flex border-blue-gray-200 capitalize"
                                                            style={{ fontFamily: '__Work_Sans_b31760', paddingLeft: '1rem' }}
                                                        >
                                                            {accountType}
                                                        </Button>
                                                    </MenuHandler>
                                                    <MenuList className="w-96 flex flex-col">
                                                        <MenuItem>
                                                            <span className='text-sm' style={{ fontFamily: '__Work_Sans_b31760' }} onClick={() => setAccountType('Individual Account')}>Individudal Account</span>
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <span className='text-sm' style={{ fontFamily: '__Work_Sans_b31760' }} onClick={() => setAccountType('Corporate/Business Account')}>Corporate/Business Account</span>
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                                <div className="relative flex w-full max-w-[24rem]">
                                                    <Button
                                                        ripple={false}
                                                        variant="text"
                                                        color="blue-gray"
                                                        className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                                                    >
                                                        @
                                                    </Button>
                                                    <Input
                                                        label="Username"
                                                        color="white"
                                                        className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                    />
                                                </div>
                                                <Input type="password" color="white" size="lg" label="Password" />
                                            </div>
                                            <Checkbox
                                                label={
                                                    <Typography
                                                        variant="small"
                                                        color="gray"
                                                        className="flex items-center font-normal text-gray-300"
                                                        style={{ fontFamily: '__Work_Sans_b31760' }}
                                                    >
                                                        I agree the
                                                        <a
                                                            href="#"
                                                            className="font-medium ml-1 transition-colors underline"
                                                        >
                                                            Terms and Conditions
                                                        </a>
                                                    </Typography>
                                                }
                                                containerProps={{ className: "-ml-2.5" }}
                                            />
                                            <Button className="mt-6" fullWidth style={{ fontFamily: '__Work_Sans_b31760' }}>
                                                Register
                                            </Button>
                                            <Typography color="gray" className="mt-4 text-center font-normal" style={{ fontFamily: '__Work_Sans_b31760' }}>
                                                Already have an account?{" "}
                                                <a href="#" className="font-medium text-white">
                                                    Sign In
                                                </a>
                                            </Typography>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}