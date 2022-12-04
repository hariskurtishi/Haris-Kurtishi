import { Fade } from 'react-awesome-reveal'
import SVG from 'react-inlinesvg'

export default function Skills() {
  return (
    <div id="skills" className=" h-[1150px] lg:h-[650px] md:h-[770px]">
      <h1 className="md:text-[64px] text-4xl pt-32 md:pt-0  text-mirage-60 hover:text-bluenight-500 text-center group transition-all selection:bg-bluenight-500 selection:text-mirage-600">
        Tech Stack
        <span className="text-bluenight-500 group-hover:text-white">.</span>
      </h1>
      <div className="py-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 container">
        <Fade cascade duration={300}>
          <div className=" flex justify-center card shadow-2xl bg-mirage-500 hover:-translate-y-2   rounded-md py-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <SVG
                  src="/svg/tailwindcss-icon-svgrepo-com.svg"
                  className="w-12 h-12 text-bluenight-500 fill-current"
                  alt="reddot"
                />
              </div>
              <p className="">Tailwind Css</p>
            </div>
          </div>
          <div className="flex justify-center card shadow-2xl bg-mirage-500 hover:-translate-y-2   rounded-md py-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <SVG
                  src="/svg/mui.svg"
                  className="w-12 h-12 text-bluenight-500 fill-current"
                  alt="reddot"
                />
              </div>
              <p className="">Material UI</p>
            </div>
          </div>
          <div className="flex justify-center card shadow-2xl bg-mirage-500 hover:-translate-y-2   rounded-md py-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <SVG
                  src="/svg/react.svg"
                  className="w-12 h-12 text-bluenight-500 fill-current"
                  alt="reddot"
                />
              </div>
              <p className="">React Js</p>
            </div>
          </div>
          <div className="flex justify-center card shadow-2xl bg-mirage-500 hover:-translate-y-2   rounded-md py-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <SVG
                  src="/svg/typescript2.svg"
                  className="w-12 h-12 text-bluenight-500 fill-current"
                  alt="reddot"
                />
              </div>
              <p className="">Typescript</p>
            </div>
          </div>
          <div className="flex justify-center card shadow-2xl bg-mirage-500 hover:-translate-y-2   rounded-md py-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <SVG src="/svg/nextjs.svg" className="w-12 h-12" alt="reddot" />
              </div>
              <p className="">Next Js</p>
            </div>
          </div>
          <div className="flex justify-center card shadow-2xl bg-mirage-500 hover:-translate-y-2   rounded-md py-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <SVG
                  src="/svg/bootstrap-svgrepo-com.svg"
                  className="w-12 h-12 text-bluenight-500 fill-current"
                  alt="reddot"
                />
              </div>
              <p className="">Bootstrap</p>
            </div>
          </div>
          <div className="flex justify-center card shadow-2xl bg-mirage-500 hover:-translate-y-2   rounded-md py-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <SVG
                  src="/svg/github-svgrepo-com (1).svg"
                  className="w-12 h-12 text-bluenight-500"
                  alt="reddot"
                />
              </div>
              <p className="">Github</p>
            </div>
          </div>
          <div className="flex justify-center card shadow-2xl bg-mirage-500 hover:-translate-y-2   rounded-md py-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <SVG
                  src="/svg/prismic-icon-svgrepo-com.svg"
                  className="w-12 h-12 text-bluenight-500 fill-current"
                  alt="reddot"
                />
              </div>
              <p className="">Prismic</p>
            </div>
          </div>
          <div className="flex justify-center card shadow-2xl bg-mirage-500 hover:-translate-y-2   rounded-md py-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <SVG
                  src="/svg/figma.svg"
                  className="w-12 h-12 text-bluenight-500 fill-current"
                  alt="reddot"
                />
              </div>
              <p className="">Figma</p>
            </div>
          </div>
          <div className="flex justify-center card shadow-2xl bg-mirage-500 hover:-translate-y-2   rounded-md py-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <SVG
                  src="/svg/firebase-svgrepo-com.svg"
                  className="w-12 h-12 text-bluenight-500 fill-current"
                  alt="reddot"
                />
              </div>
              <p className="">Firebase</p>
            </div>
          </div>
          <div className="flex justify-center card shadow-2xl bg-mirage-500 hover:-translate-y-2   rounded-md py-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <SVG
                  src="/svg/alpine.svg"
                  className="w-12 h-12 text-bluenight-500 fill-current"
                  alt="reddot"
                />
              </div>
              <p className="">Alpine Js</p>
            </div>
          </div>
          <div className="flex justify-center card shadow-2xl bg-mirage-500 hover:-translate-y-2   rounded-md py-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <SVG
                  src="/svg/sanity.svg"
                  className="w-12 h-12 text-bluenight-500 fill-current"
                  alt="reddot"
                />
              </div>
              <p className="">Sanity CMS</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}
