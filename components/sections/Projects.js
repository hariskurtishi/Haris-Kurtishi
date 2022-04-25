import Image from 'next/image'
import Link from 'next/link'
import SVG from 'react-inlinesvg'

export default function Projects() {
  return (
    <div id="projects" className="relative md:mt-20 lg:mt-0 lg:h-full ">
      <div
        className="absolute bottom-96 selection:bg-orange-500 selection:text-white"
        style={{ zIndex: '-30' }}
      >
        <SVG src="/svg/rectangle3.svg" className="w-full " alt="facebook icon" />
      </div>
      <div
        className="lg:text-[55px] text-4xl group text-center container leading-tight pt-28 md:pt-14 lg:pt-0 lg:pb-8 text-zinc-900 hover:text-orange-500 mb-4 group transition-all duration-500 selection:bg-orange-500 selection:text-white"
        style={{ zIndex: '10' }}
      >
        Some Things I’ve <br />
        <span className="text-orange-500 text-5xl lg:text-[65px] group-hover:text-zinc-900 transition-all">
          Built.
        </span>
      </div>
      <div className="container space-y-14 md:space-y-32">
        <main className="items-center w-full h-full bg-white rounded-3xl shadow-xl grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-start ">
            <div className="flex flex-col w-full object-cover h-6/6 justify-items-start overflow-hidden">
              <Image
                priority
                src="/images/portfolio.jpg"
                layout="intrinsic"
                alt="blog"
                objectFit="inherit"
                quality={100}
                className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
                width={812}
                height={548}
              />
            </div>
          </div>
          <div className="px-4 py-6 md:py-0 md:px-14 grid content-center justify-between">
            <div>
              <Link href="https://github.com/hariskurtishi/Haris-Kurtishi">
                <a>
                  <div className="text-zinc-900 text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-orange-500 transitiyyyy">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://hariskurtishi.com/">
                <a>
                  <div className="text-4xl transition-all text-zinc-900 hover:text-orange-500 font-bold py-4">
                    <h1>My portfolio</h1>
                  </div>
                </a>
              </Link>
              <p className="text-gray-500">Built with Next Js, React Js and Tailwind Css</p>
            </div>
          </div>
        </main>
        <main className="items-center w-full h-full bg-white rounded-3xl shadow-xl grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-start ">
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
          </div>
          <div className="px-4 py-6 md:py-0 md:px-14 grid content-center justify-between">
            <div>
              <Link href="https://github.com/hariskurtishi/pastrimpro">
                <a>
                  <div className="text-zinc-900 text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-orange-500 transitiyyyy">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://hariskurtishi.com/">
                <a>
                  <div className="text-4xl transition-all text-zinc-900 hover:text-orange-500 font-bold py-4">
                    <h1>Cleaning Service Landing Page</h1>
                  </div>
                </a>
              </Link>
              <p className="text-gray-500">Built with Next Js, React Js and Tailwind Css</p>
            </div>
          </div>
        </main>
        <main className="items-center w-full h-full bg-white rounded-3xl shadow-xl grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-start ">
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
          </div>
          <div className="px-4 py-6 md:py-0 md:px-14 grid content-center justify-between">
            <div>
              <Link href="/">
                <a>
                  <div className="text-zinc-900 text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-orange-500 transitiyyyy">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://bluepuzzle.mk/">
                <a>
                  <div className="text-4xl transition-all text-zinc-900 hover:text-orange-500 font-bold py-4">
                    <h1>Blue Puzzle</h1>
                  </div>
                </a>
              </Link>
              <p className="text-gray-500">Built with Next Js, React Js and Tailwind Css</p>
            </div>
          </div>
        </main>
        <main className="items-center w-full h-full bg-white rounded-3xl shadow-xl grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-start ">
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
          </div>
          <div className="px-4 py-6 md:py-0 md:px-14 grid content-center justify-between">
            <div>
              <Link href="https://github.com/hariskurtishi/Hulu-2.0">
                <a>
                  <div className="text-zinc-900 text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-orange-500 transitiyyyy">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://hulu-2-0-hariskurtishi.vercel.app/">
                <a>
                  <div className="text-4xl transition-all text-zinc-900 hover:text-orange-500 font-bold py-4">
                    <h1>Hulu 2.0</h1>
                  </div>
                </a>
              </Link>
              <p className="text-gray-500">
                Clone App built with Next Js, React Js and Tailwind Css
              </p>
            </div>
          </div>
        </main>

        <main className="items-center w-full h-full bg-white rounded-3xl shadow-xl grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-start ">
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
          </div>
          <div className="px-4 py-6 md:py-0 md:px-14 grid content-center justify-between">
            <div>
              <Link href="https://github.com/hariskurtishi/house-marketplace">
                <a>
                  <div className="text-zinc-900 text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-orange-500 transitiyyyy">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://house-marketplace-rent-sell.vercel.app/">
                <a>
                  <div className="text-4xl transition-all text-zinc-900 hover:text-orange-500 font-bold py-4">
                    <h1>House Marketplace App</h1>
                  </div>
                </a>
              </Link>
              <p className="text-gray-500">Built with React Js and Tailwind Css</p>
            </div>
          </div>
        </main>
        <main className="items-center w-full h-full bg-white rounded-3xl shadow-xl grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-start ">
            <div className="flex flex-col w-full object-cover h-6/6 justify-items-start overflow-hidden">
              <Image
                priority
                src="/images/yep.jpg"
                layout="intrinsic"
                alt="blog"
                objectFit="inherit"
                quality={100}
                className="rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
                width={812}
                height={548}
              />
            </div>
          </div>
          <div className="px-4 py-6 md:py-0 md:px-14 grid content-center justify-between">
            <div>
              <Link href="/">
                <a>
                  <div className="text-zinc-900 text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-orange-500 transitiyyyy">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://www.yep.mk/">
                <a>
                  <div className="text-4xl transition-all text-zinc-900 hover:text-orange-500 font-bold py-4">
                    <h1>YEP</h1>
                  </div>
                </a>
              </Link>
              <p className="text-gray-500">
                A website for a youth organization built with Next Js, React Js and Tailwind Css
              </p>
            </div>
          </div>
        </main>
      </div>
      <div className="flex justify-center pt-44" style={{ zIndex: '-20' }}>
        <SVG src="/svg/ornament.svg" className="w-96 " alt="ornament" />
      </div>
    </div>
  )
}
