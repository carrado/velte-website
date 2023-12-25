"use client";

import { getChristmasGreeting } from "@/services/apiFactory"
import { useEffect, useState } from "react"

export default function Home() {
  const [christmasMessage, setMessage] = useState('');

  useEffect(() => {
    const payload = {
      content: 'Create a christmas message for my love, Precious with a christmas image link written by her husband Baby boo not more than 100 words'
    }
    getChristmasGreeting(payload).then((response) => {
      setMessage(response.data.response.candidates[0].content.parts[0].text)
    })
  },[])

  if (christmasMessage !== '') {
    document.getElementById('message').innerHTML = `${christmasMessage}`;
  }
  return (
    <>
      <div
        className="w-full h-full flex flex-col lg:py-10 lg:pl-32 sm:py-10 sm:px-20 py-10 px-5"
      >
        <span className="text-white" id="message">
        </span>
      </div>
    </>
  )
}
