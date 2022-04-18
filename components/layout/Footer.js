import Link from 'next/link'
import SVG from 'react-inlinesvg'
export default function Footer() {
  return (
    <div>
      <div className=" bg-opacity-90">
        <div className="bg-white ">
          <div className="h-[450px] md:h-[130px] flex items-center justify-between">
            <div className="container items-center justify-between md:flex">
              <div className="flex justify-center py-6 md:justify-start">
                <Link href="/" passHref aria-label="Logo">
                  <a>
                    <SVG src="/svg/logo.svg" alt="logo" width={107} height={107} className="" />
                  </a>
                </Link>
              </div>

              <div className="my-12 text-lg font-medium text-center text-zinc-900 md:text-xl">
                © All Rights Reserved. 2022 Made by {}
                <a className="transition-all" rel="noopener noreferrer">
                  <span className="text-orange-500">Haris Kurtishi</span>
                </a>
              </div>

              <div className="flex items-center justify-center mb-10 space-x-4 md:mb-0 md:justify-end ">
                <div className="">
                  <a
                    rel="noopener noreferrer"
                    aria-label="facebook"
                    href="https://www.facebook.com/100061961360103"
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
                    aria-label="instagram"
                    href="https://www.instagram.com/haris.kurtishii/"
                  >
                    <SVG
                      src="/svg/instagram.svg"
                      className="w-10 h-10 p-2 transition-all text-white rounded-md cursor-pointer fill-current hover:bg-gray-100 hover:text-sky-900"
                      alt="email icon"
                    />
                  </a>
                </div>
                <div className="">
                  <a
                    rel="noopener noreferrer"
                    aria-label="email"
                    href="mailto:hariskurtishii@gmail.com"
                  >
                    <SVG
                      src="/svg/email.svg"
                      className="w-10 h-10 p-2 transition-all text-black rounded-md cursor-pointer fill-current hover:bg-gray-100 "
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
                      className="w-10 h-10 p-2 transition-all text-white rounded-md cursor-pointer fill-current hover:bg-gray-100 hover:text-sky-900"
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
