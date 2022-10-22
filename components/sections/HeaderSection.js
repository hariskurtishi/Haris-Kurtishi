import Image from 'next/image'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import SVG from 'react-inlinesvg'

import Button from '../Button'
export default function HeaderSection() {
  return (
    <div id="home" className="relative h-[900px] md:h-[750px] lg:h-[900px] w-full ">
      <div className="container relative selection:bg-bluenight-500 selection:text-mirage-60">
        <div className="pt-14 lg:pt-28 md:flex">
          <div className="md:col-6 ">
            <div className="relative">
              <div>
                <h1 className="text-mygreen-100   text-center md:text-left mb-4 md:mb-0">
                  Hello there! I’m <br />
                  <span className="text-blue-950  leading-normal text-xl text-center md:text-left lg:text-3xl">
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

              <div className="md:col-12 text-center md:text-left my-6 md:my-0 md:mt-14 px-4 md:px-0 text-mirage-60">
                <p className="">
                  Specializing in building (and occasionally designing) eye-catching digital
                  experiences. I&apos;ve also worked on full stack proejcts.
                </p>
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

              <div
                className="hidden lg:block absolute -bottom-52 -right-56 "
                style={{ zIndex: '-3' }}
              >
                <SVG src="/svg/headerbg.svg" className="  " alt="facebook icon" />
              </div>
            </div>
          </div>

          <div className="col-12 relative md:col-5 md:offset-1 md:flex md:justify-center pt-24 md:pt-14 lg:mt-24">
            {/* <div
              className="flex absolute justify-center shadow-xl   top-48 md:-top-0 transition-all left-0  p-2 bg-mirage-60"
              style={{ zIndex: '45' }}
            >
              <div className="flex gap-2">
                <div className="flex justify-center">
                  <SVG
                    src="/svg/typescript2.svg"
                    className="w-6 h-6 text-bluenight-500 fill-current"
                    alt="reddot"
                  />
                </div>
                <p className="text-sm md:text-base text-zinc-900 flex items-center">Typescript</p>
              </div>
            </div> */}
            <Fade
              className="flex absolute justify-center shadow-xl transition-all md:top-64  top-96 lg:top-[155px] left-6 lg:left-14  p-2 bg-mirage-60"
              style={{ zIndex: '45' }}
            >
              <div className="flex gap-2">
                <div className="flex justify-center">
                  <SVG src="/svg/nextjs.svg" className="w-6 h-6" alt="reddot" />
                </div>
                <p className="text-sm md:text-base text-zinc-900 flex items-center">Next Js</p>
              </div>
            </Fade>

            <Fade
              className="flex absolute justify-center shadow-xl transition-all right-2 md:right-18 lg:right-10 top-[480px] md:top-[440px] lg:top-72 p-2 bg-mirage-60"
              style={{ zIndex: '999' }}
            >
              <div className="flex gap-2">
                <div className="flex justify-center">
                  <SVG src="/svg/react.svg" className="w-6 h-6  fill-current" alt="reddot" />
                </div>
                <p className="text-sm md:text-base text-zinc-900 flex items-center">React Js</p>
              </div>
            </Fade>

            <Fade
              className="flex absolute justify-center shadow-xl transition-all right-4 top-64 md:top-0 lg:top-0 md:right-18 lg:right-8  p-2 bg-mirage-60"
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
                <p className="text-sm md:text-base text-zinc-900 flex items-center">Tailwind Css</p>
              </div>
            </Fade>

            <Fade
              className="absolute md:left-10 left-14 lg:left-28 lg:bottom-20 transition-all duration-300 "
              style={{ zIndex: '6' }}
            >
              <Image
                // loader={myLoader}
                priority
                src="/images/hero.png"
                layout="intrinsic"
                alt="Header"
                objectFit="cover"
                quality={100}
                width={280}
                height={380}
              />
            </Fade>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-0 z-0" style={{ zIndex: '-20' }}>
        <SVG src="/svg/acaro.svg" className="w-full h-screen rounded-md " alt="facebook icon" />
      </div> */}
    </div>
  )
}
