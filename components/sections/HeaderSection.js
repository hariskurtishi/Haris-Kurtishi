import Image from 'next/image'
import Link from 'next/link'
import SVG from 'react-inlinesvg'

import Button from '../Button'
export default function HeaderSection() {
  return (
    <div id="home" className="relative h-[1200px] lg:h-[1080px] w-full">
      <div className="container relative selection:bg-orange-500 selection:text-white">
        <div className="pt-14 lg:pt-24 lg:flex">
          <div className="lg:col-6 ">
            <div className="relative">
              <div>
                <h1 className="text-zinc-600">
                  Hello there! I’m <br />
                  <span className="text-orange-500 leading-loose text-xl lg:text-3xl font-bold ">
                    Haris Kurtishi
                  </span>
                </h1>
              </div>

              <div className="lg:py-0 text-zinc-900">
                <h1 className="text-[55px] lg:text-[100px] font-semibold lg:leading-tight ">
                  Frontend
                </h1>
                <h1 className="text-[55px] lg:text-[100px] font-semibold lg:ml-14 ml-[29px] lg:leading-[70px] ">
                  Developer<span className="text-orange-500">.</span>
                </h1>
              </div>

              <div className="space-y-4 my-2 lg:my-0 lg:text-left lg:mt-14 text-zinc-600 ">
                <p className="">
                  I’m a Frontend Developer specializing in building (and occasionally designing)
                  exceptional digital experiences.
                </p>
                <p>
                  You don’t believe me ? These design elements are wating for you to hover over
                  them, you may discover something interesting!
                </p>
              </div>
              <div
                className="flex justify-start items-center  mt-4 space-x-4 md:mb-0  "
                style={{ zIndex: '24' }}
              ></div>

              <div
                className="flex lg:inline-flex items-center lg:justify-start z-50"
                style={{ zIndex: '50' }}
              >
                <Link href="#contact" passHref className="" aria-label="Contact Button">
                  <Button as="a" variant="primary">
                    Contact me
                  </Button>
                </Link>
              </div>

              <div
                className="hidden lg:block absolute -bottom-52 -right-56 "
                style={{ zIndex: '-3' }}
              >
                <SVG src="/svg/headerbg.svg" className="  " alt="facebook icon" />
              </div>
            </div>
          </div>

          <div className="col-12 relative  lg:col-5 lg:offset-1 lg:flex lg:justify-center">
            <div
              className="absolute top-24 md:right-28 lg:right-0 lg:top-0 z-0"
              style={{ zIndex: '-2' }}
            >
              <SVG
                src="/svg/headerbgvector.svg"
                className="w-full lg:w-11/12"
                alt="facebook icon"
              />
            </div>

            <div
              className="absolute lg:-bottom-0 md:right-56 lg:right-36 right-7 -top-68 lg:-top-32 grayscale hover:grayscale-0 transition-all duration-300"
              style={{ zIndex: '6' }}
            >
              <Image
                // loader={myLoader}
                priority
                src="/images/haris.png"
                layout="intrinsic"
                alt="Header"
                objectFit="cover"
                quality={100}
                width={300}
                height={680}
              />
            </div>
            <div
              className="absolute -bottom-[700px] lg:-bottom-28 right-34 md:right-28 lg:right-0"
              style={{ zIndex: '6' }}
            >
              <Image
                // loader={myLoader}
                priority
                src="/images/overlay.png"
                layout="intrinsic"
                alt="Header"
                objectFit="cover"
                quality={100}
                width={550}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 z-0" style={{ zIndex: '-20' }}>
        <SVG src="/svg/acaro.svg" className="w-full h-screen rounded-md    " alt="facebook icon" />
      </div>
    </div>
  )
}
