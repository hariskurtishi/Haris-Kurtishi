import Image from 'next/image'
import Link from 'next/link'
import SVG from 'react-inlinesvg'

import Button from '../Button'
export default function HeaderSection() {
  return (
    <div id="home" className="relative h-[900px] md:h-[750px] lg:h-[900px] w-full ">
      <div className="container relative selection:bg-orange-500 selection:text-white">
        <div className="pt-14 lg:pt-28 md:flex">
          <div className="md:col-6 ">
            <div className="relative">
              <div>
                <h1 className="text-zinc-600  text-center md:text-left mb-4 md:mb-0">
                  Hello there! I’m <br />
                  <span className="text-orange-500 leading-normal text-xl  text-center md:text-left lg:text-3xl font-bold ">
                    Haris Kurtishi
                  </span>
                </h1>
              </div>

              <div className="lg:py-0 text-zinc-900">
                <h1 className="text-[55px] lg:text-[100px] lg:-ml-[5px] text-center md:text-left font-semibold lg:leading-tight leading-8 md:leading-tight">
                  Frontend
                </h1>
                <h1 className="text-[55px] lg:text-[100px] font-semibold lg:ml-[49px] md:text-left text-center lg:leading-[70px] leading-snug">
                  Developer<span className="text-orange-500  -ml-1">.</span>
                </h1>
              </div>

              <div className="md:col-12 text-center md:text-left my-6 md:my-0 text-sm md:mt-14 px-4 md:px-0 text-zinc-600">
                <p className="">
                  I’m a Frontend Developer specializing in building (and occasionally designing)
                  eye-catching digital experiences.
                </p>
                <p>I&apos;ve also built a couple of full stack apps just for fun.</p>
              </div>
              <div
                className="flex justify-start items-center  mt-4 space-x-4 md:mb-0  "
                style={{ zIndex: '24' }}
              ></div>

              <div
                className="flex lg:inline-flex items-center justify-center lg:justify-start z-50"
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

          <div className="col-12 relative md:col-5 md:offset-1 md:flex md:justify-center">
            {/* <div
              className="absolute top-2 md:-top-6 md:right-18 lg:right-0 lg:top-0 "
              style={{ zIndex: '-2' }}
            >
              <SVG
                src="/svg/headerbgvector.svg"
                className="w-full md:w-11/12"
                alt="facebook icon"
              />
            </div> */}

            <div
              className="flex absolute justify-center shadow-md  hover:shadow-xl transition-all left-0 rounded-md p-2 bg-orange-500"
              style={{ zIndex: '45' }}
            >
              <div className="flex gap-2">
                <div className="flex justify-center">
                  <SVG
                    src="/svg/typescript2.svg"
                    className="w-6 h-6 text-orange-500 fill-current"
                    alt="reddot"
                  />
                </div>
                <p className=" text-white flex items-center">Typescript</p>
              </div>
            </div>
            <div
              className="flex absolute justify-center shadow-md  hover:shadow-xl transition-all top-96 lg:top-[230px] left-6 lg:left-14 rounded-md p-2 bg-orange-500"
              style={{ zIndex: '45' }}
            >
              <div className="flex gap-2">
                <div className="flex justify-center">
                  <SVG src="/svg/nextjs.svg" className="w-6 h-6  fill-current" alt="reddot" />
                </div>
                <p className=" text-white flex items-center">Next Js</p>
              </div>
            </div>

            <div
              className="flex absolute justify-center shadow-md  hover:shadow-xl transition-all  right-2 md:right-32 top-72 md:top-56 lg:top-48  rounded-md p-2 bg-orange-500"
              style={{ zIndex: '999' }}
            >
              <div className="flex gap-2">
                <div className="flex justify-center">
                  <SVG src="/svg/react.svg" className="w-6 h-6  fill-current" alt="reddot" />
                </div>
                <p className=" text-white flex items-center">React Js</p>
              </div>
            </div>

            <div
              className="flex absolute justify-center shadow-md  hover:shadow-xl transition-all  right-4 top-36 md:top-24 lg:top-0 md:right-8 lg:right-8   rounded-md p-2 bg-orange-500"
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
                <p className=" text-white flex items-center">Tailwind Css</p>
              </div>
            </div>

            <div
              className="absolute md:left-10 left-14 lg:left-28 lg:bottom-36 grayscale hover:grayscale-0 transition-all duration-300 bg-slate-700"
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
                width={260}
                height={380}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-0 z-0" style={{ zIndex: '-20' }}>
        <SVG src="/svg/acaro.svg" className="w-full h-screen rounded-md " alt="facebook icon" />
      </div> */}
    </div>
  )
}
