import Link from 'next/link'
import SVG from 'react-inlinesvg'
export default function Footer() {
  return (
    <div>
      <div className=" bg-opacity-90">
        <div className="bg-white selection:bg-orange-500 selection:text-white">
          <div className="flex items-center justify-between">
            <div className="container items-center justify-between md:flex">
              <div className="flex justify-center md:justify-start">
                <Link href="/" passHref aria-label="Logo">
                  <a>
                    <SVG src="/svg/logo.svg" alt="logo" width={107} height={107} className="" />
                  </a>
                </Link>
              </div>

              <div className="my-12 text-lg font-medium text-center text-zinc-900 md:text-base">
                © All Rights Reserved. 2022 Made by {}
                <a className="transition-all" rel="noopener noreferrer">
                  <span className="text-orange-500">Haris Kurtishi</span>
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
                      className="w-8 h-8  transition-all text-zinc-900 hover:text-orange-500 rounded-md cursor-pointer fill-current "
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
                      className="w-8 h-8 transition-all text-zinc-900 hover:text-orange-500 rounded-md cursor-pointer fill-current "
                      alt="call icon"
                    />
                  </a>
                </div>
                <div className="">
                  <a
                    rel="noopener noreferrer"
                    aria-label="facebook"
                    href="https://www.facebook.com/100061961360103"
                  >
                    <SVG
                      src="/svg/fb.svg"
                      className="w-8 h-8  transition-all text-zinc-900 hover:text-orange-500 rounded-md cursor-pointer fill-current "
                      alt="facebook icon"
                    />
                  </a>
                </div>
                <div className="">
                  <a
                    rel="noopener noreferrer"
                    aria-label="instagram"
                    href="https://www.instagram.com/haris.kurtishii/"
                  >
                    <SVG
                      src="/svg/instagram.svg"
                      className="w-8 h-8  transition-all text-zinc-900 hover:text-orange-500 rounded-md cursor-pointer fill-current "
                      alt="email icon"
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
