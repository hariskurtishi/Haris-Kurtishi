import Link from 'next/link'
import SVG from 'react-inlinesvg'
export default function Footer() {
  return (
    <div>
      <div className=" bg-opacity-90">
        <div className="bg-bluenight selection:bg-bluenight-500 selection:text-mirage-60">
          <div className="flex items-center justify-between">
            <div className="container items-center justify-between md:flex">
              <div className="flex justify-center md:justify-start">
                <Link href="/" passHref aria-label="Logo">
                  <a>
                    <SVG src="/svg/logo.svg" alt="logo" width={117} height={117} className="" />
                  </a>
                </Link>
              </div>

              <div className="my-12 text-lg font-medium text-center text-mirage-60 md:text-base">
                © All Rights Reserved. 2022 Made by {}
                <a className="transition-all" rel="noopener noreferrer">
                  <span className="text-bluenight-500">Haris Kurtishi</span>
                </a>
              </div>

              <div className="flex items-center justify-center mb-10 space-x-6 md:mb-0 md:justify-end ">
                <div className="">
                  <a
                    rel="noopener noreferrer"
                    aria-label="email"
                    href="mailto:hariskurtishii@gmail.com"
                  >
                    <SVG
                      src="/svg/email.svg"
                      className="w-8 h-8  transition-all text-mirage-60 hover:text-bluenight-500 rounded-md cursor-pointer fill-current "
                      alt="email icon"
                    />
                  </a>
                </div>
                <div className="">
                  <a
                    rel="noopener noreferrer"
                    aria-label="phone"
                    href="https://www.linkedin.com/in/haris-kurtishi-webdev/"
                  >
                    <SVG
                      src="/svg/linkedin.svg"
                      className="w-8 h-8 transition-all text-mirage-60 hover:text-bluenight-500 rounded-md cursor-pointer fill-current "
                      alt="call icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
