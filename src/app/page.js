import PhoneTemplate from '@/components/PhoneTemplate'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div
        className="w-full h-screen flex flex-col lg:py-10 lg:pl-32 sm:py-10 sm:px-20 py-10 px-5"
      >

        <div className="lg:flex md:flex sm:flex flex">
          <Image src="/velte.png" width={50} height={50} alt='Velte' />
          <div className="flex flex-col justify-end -ml-2">
            <p className="text-3xl text-white">elte</p>
          </div>
        </div>

        <div
          className="w-full flex flex-col lg:flex lg:flex-row md:flex lg:my-5 sm:my-20 my-5"
          style={{ minHeight: '85vh' }}
        >

          <div
            className="flex lg:w-1/2 lg:flex-grow flex-col lg:flex-wrap w-full justify-start lg:py-20 "
          >
            <div className="flex flex-col lg:flex-grow lg:my-2">
              <div className="lg:w-4/5 w-full">
                <div className="lg:py-3 sm:py-4 pt-5 pb-3">
                  <span className="lg:text-3xl md:text-3xl sm:text-2xl text-2xl">
                    New Place, New Home!
                  </span>
                </div>
                <div className="lg:py-2 w-full flex flex-col">
                  <span className="lg:text-xl md:text-xl sm:text-lg text-base"
                  >Ready to uproot and start over in a new area?  <br /> Velte will help
                    you on your journey.</span
                  >

                  <span className="lg:text-xl text-base my-3"
                  >Explore and discover your dream place to live in Nigeria.</span
                  >
                </div>

                {/** DOWNLOAD BUTTON */}

              </div>
            </div>
          </div>

          {/** PHONE TEMPLATE */}

          <PhoneTemplate />
          
        </div>
      </div>
    </>
  )
}
