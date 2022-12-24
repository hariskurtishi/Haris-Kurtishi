import Image from 'next/image'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import SVG from 'react-inlinesvg'

import Button from '../Button'
export default function HeaderSection() {
  return (
    <div id="home" className="relative h-[900px] md:h-[850px] lg:h-[800px] w-full ">
      <div className="container relative selection:bg-bluenight-500 selection:text-mirage-600">
        <div className="pt-14 md:pt-56 md:flex">
          <Fade className="md:col-6 ">
            <div className="relative">
              <div>
                <h1 className="text-mygreen-100 text-center md:text-left mb-4 md:mb-0">
                  Hello there! I’m <br />
                  <span className="text-blue-950 leading-normal text-xl text-center md:text-left lg:text-3xl">
                    Haris Kurtishi
                  </span>
                </h1>
              </div>

              <div className="lg:py-0 text-mirage-60 ">
                <h1 className="text-[55px] lg:text-[100px] lg:-ml-[5px] text-center md:text-left font-semibold lg:leading-tight leading-8 md:leading-tight ">
                  Frontend
                </h1>
                <h1 className="text-[55px] lg:text-[100px] font-semibold lg:ml-[49px] md:text-left text-center lg:leading-[70px] leading-snug">
                  Developer<span className="text-bluenight-500  -ml-1 animate-pulse">.</span>
                </h1>
              </div>

              <div className="md:col-12 text-center md:text-left my-6 md:my-0 md:mt-14 md:px-0 text-mirage-60">
                <p className="">Specializing in building performant large scale applications.</p>
                <p></p>
              </div>
              <div
                className="flex justify-start items-center mt-4 space-x-4 md:mb-0  "
                style={{ zIndex: '24' }}
              ></div>

              <div
                className="flex lg:inline-flex items-center justify-center md:justify-start z-50"
                style={{ zIndex: '99' }}
              >
                <Link href="#contact" passHref className="" aria-label="Contact Button">
                  <Button as="a" variant="primary" style={{ zIndex: '50' }}>
                    Contact me
                  </Button>
                </Link>
              </div>
            </div>
          </Fade>

          <div className="col-12 relative md:col-5 md:offset-1 md:flex md:justify-center pt-24 md:pt-14 lg:mt-[92px] ">
            <div>
              <div
                className="flex absolute justify-center drop-shadow-2xl shadow-2xl transition-all md:top-48 md:-left-12 top-96 lg:top-[155px] z-50 left-2 lg:left-10 rounded-md md:px-4 md:py-3 p-2 bg-mirage-60/10 backdrop-blur"
                style={{ zIndex: '45' }}
              >
                <div className="flex gap-2 ">
                  <div className="flex justify-center">
                    <SVG src="/svg/nextjs.svg" className="w-6 h-6" alt="reddot" />
                  </div>
                  <p className="text-sm md:text-base text-mirage-60 flex items-center">Next Js</p>
                </div>
              </div>

              <div
                className="flex absolute rounded-md drop-shadow-2xl justify-center shadow-2xl transition-all right-2 md:right-18 lg:right-10 top-[540px] md:top-[380px] lg:top-80 md:px-4 md:py-3 p-2 bg-mirage-60/10 backdrop-blur"
                style={{ zIndex: '45' }}
              >
                <div className="flex gap-2">
                  <div className="flex justify-center">
                    <SVG src="/svg/react.svg" className="w-6 h-6  fill-current" alt="reddot" />
                  </div>
                  <p className="text-sm md:text-base text-mirage-60 flex items-center">React Js</p>
                </div>
              </div>

              <div
                className="flex absolute rounded-md justify-center shadow-2xl drop-shadow-2xl transition-all right-0 top-72 md:-top-20 lg:-top-20 md:right-18 lg:right-0  md:px-4 md:py-3 p-2 bg-mirage-60/10 backdrop-blur"
                style={{ zIndex: '45' }}
              >
                <div className="flex gap-2">
                  <div className="flex justify-center">
                    <SVG
                      src="/svg/tailwindcss-icon-svgrepo-com.svg"
                      className="w-6 h-6  fill-current"
                      alt="reddot"
                    />
                  </div>
                  <p className="text-sm md:text-base text-mirage-60 flex items-center">
                    Tailwind Css
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute md:bottom-2 xl:bottom-0 lg:bottom-20" style={{ zIndex: '1' }}>
              <Image
                priority
                src="/images/hero.png"
                layout="intrinsic"
                alt="Header"
                objectFit="cover"
                quality={100}
                width={280}
                height={430}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
