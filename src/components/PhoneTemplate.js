"use client";

import carousel from "@/helpers/carousel"
import Image from "next/image"
import { useEffect, useRef, useState } from "react";



export default function PhoneTemplate() {

    const { slideImage, imageLength } = carousel();

    const [red, setRed] = useState('255');
    const [blue, setBlue] = useState('255');
    const [green, setGreen] = useState('255');

    const [current, setCurrent] = useState(1);
    const [progressIndex, setProgressIndex] = useState(0); // this sets the first progress bar
    const [barWidth, setBarWidth] = useState(0); // sets initial width of progress bar
    const [fadeOut, setFadeOut] = useState(false);

    const imgScreen = useRef(null);



    useEffect(() => {
        startAutoCarousel();
    }, []);




    const startAutoCarousel = () => {
        // start setInterval to active auto slider
        /**
         * First we increase the width of the progress bar starting with the first.
         * Once it's 100%, we activate the slideCarousel function to move to next image
         * Once all the width of each progress bar is 100%, we do a reset to continue from start
         * Note that the number of progress bar is equivalent to number of images available on the slide
         */
        setInterval(() => {
            if (progressIndex < imageLength) {
                // If we haven't set the width of all progress bar to 100%
                setBarWidth((barWidth) => barWidth + 20);
            } else {
                // If all the progree bar have width set to 100%
                // reset the progress bar target to be the first progress bar
                setProgressIndex(0)
            }
        }, 1000);
    };





    const slideCarousel = () => {
        /**
         * Increase the value of the `current` variable till it's equal to value of `imageLength` constant
         * Once it's equal, reset the value of the `current` variable to 1
         * Toggle fade in and fade out class of the displayed image
         */

        // fade out current image
        setFadeOut(true)

        // For the preview Image looping
        if (current < imageLength) {
            setTimeout(() => {
                setCurrent((current) => current + 1);
                setFadeOut(false)
            }, 1000);
        } else {
            setTimeout(() => {
                setCurrent(1)
                setFadeOut(false)
            }, 1000)
        }
    };


    

    const moveNextCarousel = () => {
        setProgressIndex((progressIndex) => progressIndex + 1);
        setBarWidth(0);
        slideCarousel()
    }





    if (barWidth === 100) {
        // Move to the next progress bar if the width in the previous one has been filled to 100%
        setProgressIndex((progressIndex) => progressIndex + 1);

        // Activate slideCarousel to move to next image
        slideCarousel();

        setBarWidth(0);
    }






    return (
        <>
            <div className="flex-grow flex-col lg:w-1/2 w-full lg:justify-start justify-center h-max flex lg:py-1 lg:pl-10 py-1">
                <div className="lg:w-3/4 lg:justify-start w-full flex justify-center" style={{ height: '65vh' }}>
                    <div className="phoneContainer absolute rounded-md lg:-mt-16 mt-5">
                        <div
                            className="lg:rounded-full lg:flex hidden"
                            style={{ boxShadow: `0px 0px 5px 10px rgba(${red}, ${green}, ${blue}, 1)`, height: '500px', width: '350px', filter: 'blur(50px)' }}
                        />

                        <div
                            className="rounded-full flex lg:hidden"
                            style={{ boxShadow: `0px 0px 5px 10px rgba(${red}, ${green}, ${blue}, 1)`, height: '300px', width: '318px', filter: 'blur(50px)' }}
                        />


                        {/**  For larger Devices */}
                        <div className="p-1 absolute lg:flex md:flex sm:hidden hidden" style={{ top: '14.5%' }}>
                            <div className={`${fadeOut ? 'fade-out-image' : 'fade-in-image'}`} style={{ height: '380px', overflow: 'hidden', width: '289px' }}>
                                {/** displays large screen image  */}
                                <Image
                                    className="device-content p-2"
                                    width={289}
                                    height={380}
                                    src={`${slideImage(current).value}`}
                                    ref={imgScreen}
                                    alt="Image Mobile"
                                />
                            </div>
                        </div>



                        {/**  For smaller Devices **/}

                        <div className="p-1 absolute lg:hidden md:hidden sm:flex flex" style={{ top: '14.5%', left: '13.2%' }}>
                            <div className={`${fadeOut ? 'fade-out-image' : 'fade-in-image'}`} style={{ height: '280px', overflow: 'hidden', width: '216px' }}>
                                {/**  displays large screen image **/}
                                <Image
                                    className="device-content p-2"
                                    width={216}
                                    height={280}
                                    src={`${slideImage(current).value}`}
                                    ref={imgScreen}
                                    alt="Image Mobile"
                                />
                            </div>
                        </div>



                        {/** Circle Home Button for larger screens, when clicked, moves to next image on slide ***/}
                        <div
                            className="lg:w-12 lg:my-3 lg:mx-6 lg:h-12 border rounded-full cursor-pointer lg:block hidden"
                            style={{ left: '33.5%' }}
                            onClick={() => moveNextCarousel()}
                        ></div>

                    </div>

                </div>

            </div >
        </>
    )
}