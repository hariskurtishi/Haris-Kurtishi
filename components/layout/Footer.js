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
                    <p className="text-2xl text-zinc-900">Haris Kurtishi</p>
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
                    href="https://www.facebook.com/BluePuzzl"
                  >
                    <SVG
                      src="/svg/fb.svg"
                      className="w-10 h-10 p-2 transition-all text-white rounded-md cursor-pointer fill-current hover:bg-orange-500 hover:text-sky-900"
                      alt="facebook icon"
                    />
                  </a>
                </div>
                <div className="">
                  <a rel="noopener noreferrer" aria-label="email" href="mailto:hariskurtishii.com">
                    <SVG
                      src="/svg/instagram.svg"
                      className="w-10 h-10 p-2 transition-all text-white rounded-md cursor-pointer fill-current hover:bg-orange-500 hover:text-sky-900"
                      alt="email icon"
                    />
                  </a>
                </div>
                <div className="">
                  <a rel="noopener noreferrer" aria-label="phone" href="tel:00389 70 585 191">
                    <SVG
                      src="/svg/linkedin.svg"
                      className="w-10 h-10 p-2 transition-all text-white rounded-md cursor-pointer fill-current hover:bg-orange-500 hover:text-sky-900"
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
