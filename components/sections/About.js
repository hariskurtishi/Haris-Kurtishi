import Image from 'next/dist/client/image'
import SVG from 'react-inlinesvg'
export default function About() {
  return (
    <div
      id="about"
      className="relative md:h-[450px] h-[450px] pb-24 sm:h-[500px] lg:h-[780px] my-28 lg:my-0 md:mt-10"
    >
      <div className="container">
        <div
          className="absolute top-56 w-20 hidden lg:block lg:top-24 lg:left-20"
          style={{ zIndex: '20' }}
        >
          <SVG
            src="/svg/verticaldots.svg"
            className="opacity-30 transition-all hover:opacity-100 duration-300 hover:scale-110"
            alt="facebook icon"
          />
        </div>
        <div className="lg:flex">
          <div className="lg:col-6">
            <div className=" relative lg:flex lg:justify-center ">
              <div
                className="absolute lg:-top-[500px] lg:left-0 lg:-bottom-96  "
                style={{ zIndex: '-2' }}
              >
                <SVG
                  src="/svg/aboutbg.svg"
                  className="hidden lg:block col-12 lg:w-full"
                  alt="facebook icon"
                />
              </div>
              <div
                className="hidden lg:block absolute -bottom-[500px] lg:-top-8 grayscale hover:grayscale-0 transition-all duration-300"
                style={{ zIndex: '6' }}
              >
                <Image
                  // loader={myLoader}
                  priority
                  src="/images/haris2.png"
                  layout="intrinsic"
                  alt="Header"
                  objectFit="cover"
                  quality={100}
                  width={300}
                  height={580}
                />
              </div>
            </div>
          </div>
          <div className="lg:col-6 lg:px-6 grid content-center md:pt-16">
            <div className="">
              <h1 className="md:text-[64px] text-4xl pb-8 text-zinc-900 hover:text-orange-500 text-left group transition-all selection:bg-orange-500 selection:text-white">
                About me<span className="text-orange-500 group-hover:text-zinc-900">.</span>
              </h1>
              <div
                className="absolute bottom-72 right-0 selection:bg-orange-500 selection:text-white"
                style={{ zIndex: '-30' }}
              >
                <SVG src="/svg/rectangle4.svg" className="w-full " alt="facebook icon" />
              </div>
              <div className=" text-left">
                <div className="space-y-5 text-zinc-600 text-sm selection:bg-orange-500 selection:text-white">
                  <p>
                    Hello! My name is Haris and I enjoy creating things that live on the internet.
                    My interest in web development started back in 2015 when I decided to build a
                    website for my first online store.{' '}
                    <p>
                      Am i the only one who started it backwards ? I went from building with Shopify
                      and Wordpres to building fully fledged custom coded websites!
                    </p>
                  </p>
                  <p>
                    My main focus these days is building accessible, inclusive products and digital
                    experiences for a variety of clients.
                  </p>
                  <p>
                    I embrace new challenges with an open heart, a hunger to learn, and a passion
                    for solving problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
