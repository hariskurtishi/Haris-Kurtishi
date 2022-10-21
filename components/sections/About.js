import { Fade } from 'react-awesome-reveal'
import SVG from 'react-inlinesvg'

export default function About() {
  return (
    <div
      id="about"
      className="relative md:h-[450px]  pb-24 lg:h-full mt-40 lg:mt-0 my-20 lg:my-40 md:mt-10"
    >
      <div className="container">
        <div
          className="absolute top-56 w-20 hidden lg:block lg:top-10 lg:left-20 animate-pulse"
          style={{ zIndex: '20' }}
        >
          <SVG
            src="/svg/verticaldots.svg"
            className=" transition-all  duration-500 hover:scale-110"
            alt="facebook icon"
          />
        </div>

        <Fade className="lg:px-44 grid content-center md:pt-16">
          <div className="">
            <h1 className="md:text-[64px] text-4xl pb-12 text-mirage-60 hover:text-bluenight-500 text-center group transition-all selection:bg-bluenight-500 selection:text-mirage-60">
              About me<span className="text-bluenight-500 group-hover:text-zinc-900">.</span>
            </h1>
            <div
              className="absolute bottom-72 right-0 selection:bg-bluenight-500 selection:text-mirage-60"
              style={{ zIndex: '-30' }}
            >
              <SVG src="/svg/rectangle4.svg" className="w-full " alt="facebook icon" />
            </div>
            <div className=" text-center">
              <div className="space-y-5 text-mirage-60  selection:bg-bluenight-500 selection:text-mirage-60">
                <p>
                  I enjoy creating things that live on the internet. My interest in web development
                  started back in 2015 when I decided to build a website for my first online store.{' '}
                  <p>
                    Am i the only one who started it backwards ? I went from building with Shopify
                    and Wordpres to building fully fledged custom coded websites!
                  </p>
                </p>
                <p>
                  My main focus these days is building accessible, inclusive products and digital
                  experiences for a variety of clients. I embrace new challenges with an open heart,
                  a hunger to learn, and a passion for solving problems.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}
