/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import { Zoom } from 'react-awesome-reveal'
import SVG from 'react-inlinesvg'
export default function Projects() {
  return (
    <div id="projects" className="relative md:mt-20 lg:mt-0 lg:h-full  ">
      <div
        className="absolute bottom-96 selection:bg-bluenight-500 selection:text-mirage-60"
        style={{ zIndex: '-30' }}
      >
        <SVG src="/svg/rectangle3.svg" className="w-full " alt="facebook icon" />
      </div>
      <div
        className="lg:text-[55px] text-4xl group text-center container leading-tight pt-28 md:pt-14 lg:pt-0 lg:pb-8 text-mirage-60 hover:text-bluenight-500 mb-8 group transition-all duration-500 selection:bg-bluenight-500 selection:text-mirage-60"
        style={{ zIndex: '10' }}
      >
        Some Things I’ve <br />
        <span className="text-bluenight-500 text-5xl lg:text-[65px] group-hover:text-mirage-60 transition-all">
          Built.
        </span>
      </div>

      <div className="container space-y-14 md:space-y-64">
        <main className="items-center w-full h-full  bg-mirage-700 rounded-3xl shadow-xl grid md:grid-cols-2 gap-8  ">
          <Zoom className="flex flex-col justify-start ">
            <div className="flex flex-col w-full object-cover h-6/6 justify-items-start overflow-hidden">
              <Image
                priority
                src="/images/dashboard.png"
                layout="intrinsic"
                alt="blog"
                objectFit="inherit"
                quality={100}
                className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
                width={812}
                height={548}
              />
            </div>
          </Zoom>
          <Zoom className="px-4 py-6 md:py-0 md:px-14 grid content-center justify-between text-mirage-40">
            <div>
              <Link href="https://github.com/hariskurtishi/dashboard">
                <a>
                  <div className=" text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-bluenight-500 ">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://dashboard-hariskurtishi-jaewrkqlv-hariskurtishi.vercel.app/">
                <a>
                  <div className="text-4xl transition-all  hover:text-bluenight-500 font-bold py-4">
                    <h1>Dashboar Pro</h1>
                  </div>
                </a>
              </Link>
              <p className="text-mirage-60">Built with React Js, Syncfusion and Tailwind Css </p>
            </div>
          </Zoom>
        </main>
        <main className="items-center w-full h-full  bg-mirage-700 rounded-3xl shadow-xl grid md:grid-cols-2 gap-8  ">
          <Zoom className="flex flex-col justify-start ">
            <div className="flex flex-col w-full object-cover h-6/6 justify-items-start overflow-hidden">
              <Image
                priority
                src="/images/bluepuzzle.jpg"
                layout="intrinsic"
                alt="blog"
                objectFit="inherit"
                quality={100}
                className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
                width={812}
                height={548}
              />
            </div>
          </Zoom>
          <Zoom className="px-4 py-6 md:py-0 md:px-14 grid content-center justify-between text-mirage-40">
            <div>
              <Link href="/">
                <a>
                  <div className=" text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-bluenight-500 ">
                      Github Repo not available due to the companies policy.
                    </h1>
                  </div>
                </a>
              </Link>
              <Link href="https://bluepuzzle.mk/">
                <a>
                  <div className="text-4xl transition-all  hover:text-bluenight-500 font-bold py-4">
                    <h1>Blue Puzzle</h1>
                  </div>
                </a>
              </Link>
              <p className="text-mirage-60">Built with Next Js, React Js and Tailwind Css</p>
            </div>
          </Zoom>
        </main>

        <main className="items-center w-full h-full  bg-mirage-700 rounded-3xl shadow-xl grid md:grid-cols-2 gap-8  ">
          <Zoom className="flex flex-col justify-start ">
            <div className="flex flex-col w-full object-cover h-6/6 justify-items-start overflow-hidden">
              <Image
                priority
                src="/images/musict2.png"
                layout="intrinsic"
                alt="blog"
                objectFit="inherit"
                quality={100}
                className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
                width={812}
                height={548}
              />
            </div>
          </Zoom>
          <Zoom className="px-4 py-6 md:py-0 md:px-14 grid content-center justify-between text-mirage-40">
            <div>
              <Link href="https://github.com/hariskurtishi/musict">
                <a>
                  <div className=" text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-bluenight-500 ">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://musict.vercel.app/">
                <a>
                  <div className="text-4xl transition-all  hover:text-bluenight-500 font-bold py-4">
                    <h1>Musict</h1>
                  </div>
                </a>
              </Link>
              <p className="text-mirage-60">Built with React Js, Tailwind Css & Rapid Api. </p>
            </div>
          </Zoom>
        </main>

        <main className="items-center w-full h-full  bg-mirage-700 rounded-3xl shadow-xl grid md:grid-cols-2 gap-8  ">
          <Zoom className="flex flex-col justify-start ">
            <div className="flex flex-col w-full object-cover h-6/6 justify-items-start overflow-hidden">
              <Image
                priority
                src="/images/smartgym.jpg"
                layout="intrinsic"
                alt="blog"
                objectFit="inherit"
                quality={100}
                className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
                width={812}
                height={548}
              />
            </div>
          </Zoom>
          <Zoom className="px-4 py-6 md:py-0 md:px-14 grid content-center justify-between text-mirage-40">
            <div>
              <Link href="https://github.com/hariskurtishi/gym_app">
                <a>
                  <div className=" text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-bluenight-500 ">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://smart-gym.vercel.app/">
                <a>
                  <div className="text-4xl transition-all  hover:text-bluenight-500 font-bold py-4">
                    <h1>
                      Smart Gym App <br />{' '}
                    </h1>
                  </div>
                </a>
              </Link>
              <p className="text-mirage-60">
                Fully functional Fitness App where you can find 1000's of workouts. Built with
                Material UI, React Js and Rapid API.
              </p>
            </div>
          </Zoom>
        </main>

        <main className="items-center w-full h-full  bg-mirage-700 rounded-3xl shadow-xl grid md:grid-cols-2 gap-8  ">
          <Zoom className="flex flex-col justify-start ">
            <div className="flex flex-col w-full object-cover h-6/6 justify-items-start overflow-hidden">
              <Image
                priority
                src="/images/ecommerce.jpg"
                layout="intrinsic"
                alt="blog"
                objectFit="inherit"
                quality={100}
                className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
                width={812}
                height={548}
              />
            </div>
          </Zoom>
          <Zoom className="px-4 py-6 md:py-0 md:px-14 grid content-center justify-between text-mirage-40">
            <div>
              <Link href="https://github.com/hariskurtishi/ecomerce">
                <a>
                  <div className=" text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-bluenight-500 ">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://www.beautenece.ch/">
                <a>
                  <div className="text-4xl transition-all  hover:text-bluenight-500 font-bold py-4">
                    <h1>
                      Ecommerce <br />{' '}
                      <span className="text-zinc-500 text-xl">(Project in progress...)</span>
                    </h1>
                  </div>
                </a>
              </Link>
              <p className="text-mirage-60">
                Full Stack ECommerce Application built with Next Js, React Js Sanity and Stripe
              </p>
            </div>
          </Zoom>
        </main>

        <main className="items-center w-full h-full  bg-mirage-700 rounded-3xl shadow-xl grid md:grid-cols-2 gap-8  ">
          <Zoom className="flex flex-col justify-start ">
            <div className="flex flex-col w-full object-cover h-6/6 justify-items-start overflow-hidden">
              <Image
                priority
                src="/images/bank.jpg"
                layout="intrinsic"
                alt="blog"
                objectFit="inherit"
                quality={100}
                className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
                width={812}
                height={548}
              />
            </div>
          </Zoom>
          <Zoom className="px-4 py-6 md:py-0 md:px-14 grid content-center justify-between text-mirage-40">
            <div>
              <Link href="https://github.com/hariskurtishi/bank">
                <a>
                  <div className=" text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-bluenight-500 ">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://newpayment-processor.vercel.app/">
                <a>
                  <div className="text-4xl transition-all  hover:text-bluenight-500 font-bold py-4">
                    <h1>HooBank</h1>
                  </div>
                </a>
              </Link>
              <p className="text-mirage-60">Built with Vite Js, React Js and Tailwind Css</p>
            </div>
          </Zoom>
        </main>

        <main className="items-center w-full h-full  bg-mirage-700 rounded-3xl shadow-xl grid md:grid-cols-2 gap-8  ">
          <Zoom className="flex flex-col justify-start ">
            <div className="flex flex-col w-full object-cover h-6/6 justify-items-start overflow-hidden">
              <Image
                priority
                src="/images/pastrimpro.jpg"
                layout="intrinsic"
                alt="blog"
                objectFit="inherit"
                quality={100}
                className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
                width={812}
                height={548}
              />
            </div>
          </Zoom>
          <Zoom className="px-4 py-6 md:py-0 md:px-14 grid content-center justify-between text-mirage-40">
            <div>
              <Link href="https://github.com/hariskurtishi/pastrimpro">
                <a>
                  <div className=" text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-bluenight-500 ">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://pastrim.pro/">
                <a>
                  <div className="text-4xl transition-all  hover:text-bluenight-500 font-bold py-4">
                    <h1>Cleaning Service Landing Page</h1>
                  </div>
                </a>
              </Link>
              <p className="text-mirage-60">Built with Next Js, React Js and Tailwind Css</p>
            </div>
          </Zoom>
        </main>

        <main className="items-center w-full h-full  bg-mirage-700 rounded-3xl shadow-xl grid md:grid-cols-2 gap-8  ">
          <Zoom className="flex flex-col justify-start ">
            <div className="flex flex-col w-full object-cover h-6/6 justify-items-start overflow-hidden">
              <Image
                priority
                src="/images/hulu.jpg"
                layout="intrinsic"
                alt="blog"
                objectFit="inherit"
                quality={100}
                className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
                width={812}
                height={548}
              />
            </div>
          </Zoom>
          <Zoom className="px-4 py-6 md:py-0 md:px-14 grid content-center justify-between text-mirage-40">
            <div>
              <Link href="https://github.com/hariskurtishi/Hulu-2.0">
                <a>
                  <div className=" text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-bluenight-500 ">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://hulu-2-0-hariskurtishi.vercel.app/">
                <a>
                  <div className="text-4xl transition-all  hover:text-bluenight-500 font-bold py-4">
                    <h1>Hulu 2.0</h1>
                  </div>
                </a>
              </Link>
              <p className="text-mirage-60">
                Clone App built with Next Js, React Js and Tailwind Css
              </p>
            </div>
          </Zoom>
        </main>

        <main className="items-center w-full h-full  bg-mirage-700 rounded-3xl shadow-xl grid md:grid-cols-2 gap-8  ">
          <Zoom className="flex flex-col justify-start ">
            <div className="flex flex-col w-full object-cover h-6/6 justify-items-start overflow-hidden">
              <Image
                priority
                src="/images/housemarketplace.jpg"
                layout="intrinsic"
                alt="blog"
                objectFit="inherit"
                quality={100}
                className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
                width={812}
                height={548}
              />
            </div>
          </Zoom>
          <Zoom className="px-4 py-6 md:py-0 md:px-14 grid content-center justify-between text-mirage-40">
            <div>
              <Link href="https://github.com/hariskurtishi/house-marketplace">
                <a>
                  <div className=" text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-bluenight-500 ">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://house-marketplace-rent-sell.vercel.app/">
                <a>
                  <div className="text-4xl transition-all  hover:text-bluenight-500 font-bold py-4">
                    <h1>House Marketplace App</h1>
                  </div>
                </a>
              </Link>
              <p className="text-mirage-60">Built with React Js</p>
            </div>
          </Zoom>
        </main>
      </div>
    </div>
  )
}
