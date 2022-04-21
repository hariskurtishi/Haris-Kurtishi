import Image from 'next/image'
import Link from 'next/link'
import SVG from 'react-inlinesvg'

export default function Projects() {
  return (
    <div id="projects" className="relative lg:h-full">
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

      <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8 container">
        <div className="shadow-lg hover:shadow-xl transition-all">
          <div className="h-full bg-white overflow-hidden">
            <Image
              priority
              src="/images/bluepuzzle.jpg"
              layout="intrinsic"
              alt="blog"
              objectFit="cover"
              quality={100}
              width={812}
              height={548}
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <Link href="https://bluepuzzle.mk/en">
                  <a>
                    <div className="text-zinc-900 text-sm flex items-center space-x-3">
                      <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                      <h1 className="hover:text-orange-500 transitiyyyy">Github Repo</h1>
                    </div>
                  </a>
                </Link>
                <Link href="https://bluepuzzle.mk/en">
                  <a>
                    <div className="text-2xl transition-all text-zinc-900 hover:text-orange-500 font-bold py-3">
                      <h1>Blue Puzzle Treatmant Center built with Next Js and Tailwind Css</h1>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-lg hover:shadow-xl transition-all">
          <div className="h-full bg-white overflow-hidden">
            <Image
              priority
              src="/images/movieapp.jpg"
              layout="intrinsic"
              alt="blog"
              objectFit="inherit  "
              quality={100}
              width={812}
              height={548}
            />
            <div className="p-6">
              <Link href="https://github.com/hariskurtishi/Movie-app">
                <a>
                  <div className="text-zinc-900 text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-orange-500 transitiyyyy">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://movie-app-mauve.vercel.app/">
                <a>
                  <div className="text-2xl transition-all text-zinc-900 hover:text-orange-500 font-bold py-3">
                    <h1>A movie app built with custom Css and Javascript.</h1>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-lg hover:shadow-xl transition-all">
          <div className="h-full bg-white overflow-hidden">
            <Image
              priority
              src="/images/hulu.jpg"
              layout="intrinsic"
              alt="blog"
              objectFit="inherit"
              quality={100}
              width={812}
              height={548}
            />
            <div className="p-6">
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
                  <div className="text-2xl transition-all text-zinc-900 hover:text-orange-500 font-bold py-3">
                    <h1>Hulu 2.0 Movie App built with Next Js and Tailwind Css</h1>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-lg hover:shadow-xl transition-all">
          <div className="h-full bg-white overflow-hidden">
            <Image
              priority
              src="/images/feedback.jpg"
              layout="intrinsic"
              alt="blog"
              objectFit="inherit"
              quality={100}
              width={812}
              height={548}
            />
            <div className="p-6">
              <Link href="https://github.com/hariskurtishi/feedback-app">
                <a>
                  <div className="text-zinc-900 text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-orange-500 transitiyyyy">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://feedback-ui-54d2c0.netlify.app/">
                <a>
                  <div className="text-2xl transition-all text-zinc-900 hover:text-orange-500 font-bold py-3">
                    <h1>Feedback app built with React</h1>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-lg hover:shadow-xl transition-all">
          <div className="h-full bg-white overflow-hidden">
            <Image
              priority
              src="/images/github_finder.jpg"
              layout="intrinsic"
              alt="blog"
              objectFit="inherit"
              quality={100}
              width={812}
              height={548}
            />
            <div className="p-6">
              <Link href="https://github.com/hariskurtishi/github-finder-app">
                <a>
                  <div className="text-zinc-900 text-sm flex items-center space-x-3">
                    <SVG src="/svg/github.svg" className="w-4 h-4 fill-current" alt="button" />
                    <h1 className="hover:text-orange-500 transitiyyyy">Github Repo</h1>
                  </div>
                </a>
              </Link>
              <Link href="https://github-finder-three-rust.vercel.app/">
                <a>
                  <div className="text-2xl transition-all text-zinc-900 hover:text-orange-500 font-bold py-3">
                    <h1>Github Finder App built with React and Tailwind Css</h1>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-lg hover:shadow-xl transition-all">
          <div className="h-full bg-white overflow-hidden">
            <Image
              priority
              src="/images/housemarketplace.jpg"
              layout="intrinsic"
              alt="blog"
              objectFit="inherit"
              quality={100}
              width={812}
              height={548}
            />
            <div className="p-6">
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
                  <div className="text-2xl transition-all text-zinc-900 hover:text-orange-500 font-bold py-3">
                    <h1>A House Marketplace App built with React Js and Tailwind Css</h1>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center pt-44" style={{ zIndex: '-20' }}>
        <SVG src="/svg/ornament.svg" className="w-96 " alt="ornament" />
      </div>
    </div>
  )
}
