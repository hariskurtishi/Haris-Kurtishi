import Image from 'next/image'
import Link from 'next/link'
import SVG from 'react-inlinesvg'

import Button from '../Button'
export default function HeaderSection() {
  return (
    <div id="home" className="relative h-[1200px] lg:h-[1080px] w-full">
      <div className="container relative">
        <div className="pt-14 lg:pt-32 lg:flex">
          <div className="lg:col-6 ">
            <div className="relative">
              <div>
                <h1 className="">
                  Hello there! I’m <br />
                  <span className="text-orange-500 leading-loose text-xl lg:text-3xl font-bold ">
                    Haris Kurtishi
                  </span>
                </h1>
              </div>

              <div className="py-4 lg:py-0">
                <h1 className="text-6xl lg:text-[100px] font-semibold lg:leading-tight ">
                  Frontend
                </h1>
                <h1 className="text-6xl lg:text-[100px] font-semibold lg:ml-14 ml-[31px] lg:leading-[70px] ">
                  Developer<span className="text-orange-500">.</span>
                </h1>
              </div>

              <p className="my-2 lg:my-0 lg:text-left lg:mt-14">
                I’m a Frontend Developer specializing in building (and occasionally designing)
                exceptional digital experiences.
              </p>
              <div
                className="flex justify-start items-center  mt-4 space-x-4 md:mb-0  "
                style={{ zIndex: '24' }}
              >
                <div className="">
                  <a
                    rel="noopener noreferrer"
                    aria-label="facebook"
                    href="https://www.facebook.com/BluePuzzl"
                  >
                    <SVG
                      src="/svg/fb.svg"
                      className="w-10 h-10 p-2 transition-all text-white rounded-md cursor-pointer fill-current hover:bg-gray-100 hover:text-sky-900"
                      alt="facebook icon"
                    />
                  </a>
                </div>
                <div className="">
                  <a
                    rel="noopener noreferrer"
                    aria-label="email"
                    href="mailto:bluepuzzlemacedonia@gmail.com"
                  >
                    <SVG
                      src="/svg/instagram.svg"
                      className="w-10 h-10 p-2 transition-all text-white rounded-md cursor-pointer fill-current hover:bg-gray-100 hover:text-sky-900"
                      alt="email icon"
                    />
                  </a>
                </div>
                <div className="">
                  <a rel="noopener noreferrer" aria-label="phone" href="tel:00389 70 585 191">
                    <SVG
                      src="/svg/linkedin.svg"
                      className="w-10 h-10 p-2 transition-all text-white rounded-md cursor-pointer fill-current hover:bg-gray-100 hover:text-sky-900"
                      alt="call icon"
                    />
                  </a>
                </div>
              </div>

              <div
                className="flex lg:inline-flex items-center lg:justify-start z-50"
                style={{ zIndex: '34' }}
              >
                <Link href="#contact" passHref className="font-light" aria-label="Contact Button">
                  <Button as="a" variant="primary">
                    Contact me
                  </Button>
                </Link>
              </div>

              <div
                className="hidden lg:block absolute -bottom-52 -right-56 "
                style={{ zIndex: '3' }}
              >
                <SVG src="/svg/headerbg.svg" className="  " alt="facebook icon" />
              </div>
            </div>
          </div>

          <div className="col-12 relative lg:col-5 lg:offset-1 lg:flex lg:justify-center">
            <div className="absolute top-24 lg:top-0 z-0" style={{ zIndex: '-2' }}>
              <SVG
                src="/svg/headerbgvector.svg"
                className="w-full lg:w-11/12"
                alt="facebook icon"
              />
            </div>

            <div
              className="absolute lg:-bottom-0 lg:right-36 right-7 -top-68 lg:-top-32 grayscale"
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
              className="absolute -bottom-[700px] lg:-bottom-20 right-34"
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
