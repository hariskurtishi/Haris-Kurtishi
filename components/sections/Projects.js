import Image from 'next/image'
import Link from 'next/link'
import SVG from 'react-inlinesvg'

import Button from '../Button'
export default function Projects() {
  return (
    <div id="projects" className="relative lg:h-[1000px]">
      <div
        className="absolute bottom-48 selection:bg-orange-500 selection:text-white"
        style={{ zIndex: '-30' }}
      >
        <SVG src="/svg/rectangle3.svg" className="w-full " alt="facebook icon" />
      </div>
      <div
        className="lg:text-[55px] text-4xl group text-center container leading-tight pt-28 md:pt-14 lg:pt-0 text-zinc-900 hover:text-orange-500  mb-4 group transition-all"
        style={{ zIndex: '10' }}
      >
        Some Things I’ve <br />
        <span className="text-orange-500 text-5xl lg:text-[65px] group-hover:text-zinc-900 transition-all">
          Built.
        </span>
      </div>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 ">
        <article className="relative w-full h-64 bg-cover bg-center group  overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out ">
          <Image
            priority
            src="/images/bluepuzzle.jpg"
            layout="fill"
            alt="Header"
            objectFit="cover"
            quality={100}
            className="rounded-lg "
          />
          <div className="absolute inset-0 bg-black bg-opacity-80 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
          <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
            <h3 className="text-center space-y-12">
              <a className="text-white text-xl font-bold text-center">
                <span className="absolute inset-0"></span>A Website for a treatment center
              </a>
              <div className="invisible group-hover:visible flex justify-center space-x-6">
                <div
                  className="flex lg:inline-flex items-center lg:justify-start z-50"
                  style={{ zIndex: '34' }}
                >
                  <Link
                    href="https://bluepuzzle.mk/en"
                    passHref
                    className="font-light"
                    aria-label="Contact Button"
                  >
                    <Button as="a" variant="primary">
                      View it live
                    </Button>
                  </Link>
                </div>
                <div
                  className="flex lg:inline-flex items-center lg:justify-start z-50"
                  style={{ zIndex: '34' }}
                >
                  <Link
                    href="https://github.com/lucky-media/bluepuzzle"
                    passHref
                    className="font-light"
                    aria-label="Contact Button"
                  >
                    <Button as="a" variant="secondary">
                      Github code
                    </Button>
                  </Link>
                </div>
              </div>
            </h3>
          </div>
        </article>
        <article className="relative w-full h-64 bg-cover bg-center group  overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out ">
          <Image
            priority
            src="/images/housemarketplace.jpg"
            layout="fill"
            alt="Header"
            objectFit="cover"
            quality={100}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
          <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
            <h3 className="text-center">
              <a className="text-white text-xl font-bold text-center">
                <span className="absolute inset-0"></span>
                House Marketplace
              </a>
              <div className="invisible group-hover:visible flex justify-center space-x-3">
                <div
                  className="flex lg:inline-flex items-center lg:justify-start z-50"
                  style={{ zIndex: '34' }}
                >
                  <Link
                    href="https://house-marketplace-rent-sell.vercel.app/"
                    passHref
                    className="font-light"
                    aria-label="Contact Button"
                  >
                    <Button as="a" variant="primary">
                      View it live
                    </Button>
                  </Link>
                </div>
                <div
                  className="flex lg:inline-flex items-center lg:justify-start z-50"
                  style={{ zIndex: '34' }}
                >
                  <Link
                    href="https://github.com/hariskurtishi/house-marketplace"
                    passHref
                    className="font-light"
                    aria-label="Contact Button"
                  >
                    <Button as="a" variant="secondary">
                      Github code
                    </Button>
                  </Link>
                </div>
              </div>
            </h3>
          </div>
        </article>
        <article className="relative w-full h-64 bg-cover bg-center group  overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out ">
          <Image
            priority
            src="/images/hulu.jpg"
            layout="fill"
            alt="Header"
            objectFit="cover"
            quality={100}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
          <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
            <h3 className="text-center">
              <a className="text-white text-xl font-bold text-center">
                <span className="absolute inset-0"></span>
                Hulu 2.0
              </a>
              <div className="invisible group-hover:visible flex justify-center space-x-3">
                <div
                  className="flex lg:inline-flex items-center lg:justify-start z-50"
                  style={{ zIndex: '34' }}
                >
                  <Link
                    href="https://hulu-2-0-hariskurtishi.vercel.app/"
                    passHref
                    className="font-light"
                    aria-label="Contact Button"
                  >
                    <Button as="a" variant="primary">
                      View it live
                    </Button>
                  </Link>
                </div>
                <div
                  className="flex lg:inline-flex items-center lg:justify-start z-50"
                  style={{ zIndex: '34' }}
                >
                  <Link
                    href="https://github.com/hariskurtishi/Hulu-2.0"
                    passHref
                    className="font-light"
                    aria-label="Contact Button"
                  >
                    <Button as="a" variant="secondary">
                      Github code
                    </Button>
                  </Link>
                </div>
              </div>
            </h3>
          </div>
        </article>
        <article className="relative w-full h-64 bg-cover bg-center group  overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out ">
          <Image
            priority
            src="/images/github_finder.jpg"
            layout="fill"
            alt="Header"
            objectFit="cover"
            quality={100}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
          <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
            <h3 className="text-center">
              <a className="text-white text-xl font-bold text-center">
                <span className="absolute inset-0"></span>
                Github Finder App
              </a>
              <div className="invisible group-hover:visible flex justify-center space-x-3">
                <div
                  className="flex lg:inline-flex items-center lg:justify-start z-50"
                  style={{ zIndex: '34' }}
                >
                  <Link
                    href="https://github-finder-three-rust.vercel.app/"
                    passHref
                    className="font-light"
                    aria-label="Contact Button"
                  >
                    <Button as="a" variant="primary">
                      View it live
                    </Button>
                  </Link>
                </div>
                <div
                  className="flex lg:inline-flex items-center lg:justify-start z-50"
                  style={{ zIndex: '34' }}
                >
                  <Link
                    href="https://github.com/hariskurtishi/github-finder-app"
                    passHref
                    className="font-light"
                    aria-label="Contact Button"
                  >
                    <Button as="a" variant="secondary">
                      Github code
                    </Button>
                  </Link>
                </div>
              </div>
            </h3>
          </div>
        </article>
        <article className="relative w-full h-64 bg-cover bg-center group  overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out ">
          <Image
            priority
            src="/images/feedback.jpg"
            layout="fill"
            alt="Header"
            objectFit="cover"
            quality={100}
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
          <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
            <h3 className="text-center">
              <a className="text-white text-xl font-bold text-center">
                <span className="absolute inset-0"></span>
                Feedback App
              </a>
              <div className="invisible group-hover:visible flex justify-center space-x-3">
                <div
                  className="flex lg:inline-flex items-center lg:justify-start z-50"
                  style={{ zIndex: '34' }}
                >
                  <Link
                    href="https://feedback-ui-54d2c0.netlify.app"
                    passHref
                    className="font-light"
                    aria-label="Contact Button"
                  >
                    <Button as="a" variant="primary">
                      View it live
                    </Button>
                  </Link>
                </div>
                <div
                  className="flex lg:inline-flex items-center lg:justify-start z-50"
                  style={{ zIndex: '34' }}
                >
                  <Link
                    href="https://github.com/hariskurtishi/feedback-app"
                    passHref
                    className="font-light"
                    aria-label="Contact Button"
                  >
                    <Button as="a" variant="secondary">
                      Github code
                    </Button>
                  </Link>
                </div>
              </div>
            </h3>
          </div>
        </article>
      </section>
      <div className="flex justify-center py-14" style={{ zIndex: '-20' }}>
        <SVG src="/svg/ornament.svg" className="w-96 " alt="ornament" />
      </div>
    </div>
  )
}
