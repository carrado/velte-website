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
          className="w-full h-auto flex flex-grow flex-col lg:flex lg:flex-row md:flex lg:my-5 sm:my-20 my-5"
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

                <div className='my-2 lg:w-full md:w-full sm:w-full lg:flex md:flex sm:flex hidden'>
                  <div className='w-max h-max flex mr-10 cursor-pointer'>
                    <Image
                      src={'/google-play-badge.png'}
                      width={200}
                      height={80}
                      alt='play store'
                    />
                  </div>

                  <div className='w-max h-max flex' style={{ opacity: 0.3, cursor: 'not-allowed' }} title='Coming soon... Velte for ios will be released soon'>
                    <Image
                      src={'/app_store.svg'}
                      width={200}
                      height={40}
                      style={{ marginTop: 6 }}
                      alt='play store'
                    />
                  </div>
                </div>

                <div className='w-full hidden lg:flex md:flex justify-center p-1 my-14'>
                  <p className='text-base -ml-12'><a href='https://facebook.com/carradosite' target='_blank'> © {new Date().getFullYear()} Carrado Technologies Limited. </a> </p>
                </div>

                {/** DOWNLOAD BUTTON */}

              </div>
            </div>
          </div>

          
          {/** PHONE TEMPLATE */}

          <PhoneTemplate />

        </div>


        <div className='my-2 w-full lg:hidden md:hidden sm:hidden flex'>
          <div className='w-max h-max flex mr-10 cursor-pointer'>
            <Image
              src={'/google-play-badge.png'}
              width={200}
              height={80}
              alt='play store'
            />
          </div>

          <div className='w-max h-max flex' style={{ opacity: 0.3, cursor: 'not-allowed' }} title='Coming soon... Velte for ios will be released soon'>
            <Image
              src={'/app_store.svg'}
              width={200}
              height={40}
              alt='play store'
            />
          </div>
        </div>

        
        <div className='w-full h-full flex-grow flex lg:hidden md:hidden justify-center my-5' style={{ height: '30vh' }}>
          <p className='text-base'><a href='https://facebook.com/carradosite' target='_blank'> © {new Date().getFullYear()} Carrado Technologies Limited. </a> </p>
        </div>
      </div>
    </>
  )
}
