"use client";

import Logo from "@/components/Logo";
import { loginFormSchema } from "@/validations/appValidations";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import Link from "next/link";


export default function SignIn() {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },

        // Pass the Yup schema to validate the form
        validationSchema: loginFormSchema,

        // Handle form submission
        onSubmit: async ({ username, password }) => {
            // Make a request to your backend to store the data
        },
    });

    // Destructure the formik object
    const { errors, touched, values, handleChange, handleSubmit } = formik;

    return (
        <>
            <div
                className="w-full h-full flex flex-col"
            >
                <Logo />
                <div className="w-full h-full flex lg:flex-row md:flex-row flex-col">
                    <div className="flex lg:w-1/2 md:w-1/2 w-full flex-grow h-full lg:p-10 md:p-10 py-10 px-5" style={{ height: '80vh' }}>
                        <div className="flex w-full flex-col lg:justify-center md:justify-center">
                            <div className="w-full flex justify-center">
                                <div className="w-full flex justify-center flex-col">
                                    <p className="text-4xl font-semibold text-center capitalize">
                                        Welcome Back
                                    </p>

                                    <div className="my-5 w-full flex justify-center">
                                        <div className="lg:w-2/3 md:w-2/3 w-full flex p-4 justify-center">
                                            <form className="mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                                                <div className="mb-4 flex flex-col gap-6">
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
                                                            name="username"
                                                            className="rounded-l-none"
                                                            value={values.username}
                                                            onChange={handleChange}
                                                            error={errors.username && touched.username}
                                                        />
                                                    </div>
                                                    {errors.username && touched.username && <span className="-mt-3 text-red-700">{errors.username}</span>}

                                                    <Input type="password" color="white" name="password" value={values.password} onChange={handleChange}
                                                        size="lg" error={errors.password && touched.password} label="Password" />
                                                    {errors.password && touched.password && <span className="-mt-3 text-red-700">{errors.password}</span>}
                                                </div>
                                                <Button className="mt-6" type="submit" fullWidth style={{ fontFamily: '__Work_Sans_b31760' }}>
                                                    Login
                                                </Button>
                                                <Typography color="gray" className="mt-4 text-center font-normal" style={{ fontFamily: '__Work_Sans_b31760' }}>
                                                    Don&apos;t have an account yet?{" "}
                                                    <Link href="/signup" className="font-medium text-white">
                                                        Sign Up
                                                    </Link>
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
        </>
    )
}