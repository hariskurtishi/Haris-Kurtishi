import { Fade } from 'react-awesome-reveal'
import SVG from 'react-inlinesvg'

export default function Skills() {
  return (
    <div id="skills" className=" h-[1150px] lg:h-[650px] md:h-[770px]">
      <h1 className="text-center text-4xl  text-mirage-60 hover:text-bluenight-500  mb-4 group transition-all selection:bg-bluenight-500 selection:text-mirage-60">
        Technologies I use to build your next great idea
        <span className="text-bluenight-500 group-hover:text-zinc-900">.</span>
      </h1>
      <div className="py-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 container">
        <Fade className="flex justify-center shadow-2xl bg-mirage-700 hover:-translate-y-2 transition-all duration-300  rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/tailwindcss-icon-svgrepo-com.svg"
                className="w-12 h-12 text-bluenight-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Tailwind Css</p>
          </div>
        </Fade>
        <Fade className="flex justify-center shadow-2xl bg-mirage-700 hover:-translate-y-2 transition-all duration-300  rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/mui.svg"
                className="w-12 h-12 text-bluenight-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Material UI</p>
          </div>
        </Fade>
        <Fade className="flex justify-center shadow-2xl bg-mirage-700 hover:-translate-y-2 transition-all duration-300  rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/react.svg"
                className="w-12 h-12 text-bluenight-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">React Js</p>
          </div>
        </Fade>
        <Fade className="flex justify-center shadow-2xl bg-mirage-700 hover:-translate-y-2 transition-all duration-300  rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/typescript2.svg"
                className="w-12 h-12 text-bluenight-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Typescript</p>
          </div>
        </Fade>
        <Fade className="flex justify-center shadow-2xl bg-mirage-700 hover:-translate-y-2 transition-all duration-300  rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG src="/svg/nextjs.svg" className="w-12 h-12 fill-current" alt="reddot" />
            </div>
            <p className="text-xl">Next Js</p>
          </div>
        </Fade>
        <Fade className="flex justify-center shadow-2xl bg-mirage-700 hover:-translate-y-2 transition-all duration-300  rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/bootstrap-svgrepo-com.svg"
                className="w-12 h-12 text-bluenight-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Bootstrap</p>
          </div>
        </Fade>
        <Fade className="flex justify-center shadow-2xl bg-mirage-700 hover:-translate-y-2 transition-all duration-300  rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/github-svgrepo-com (1).svg"
                className="w-12 h-12 text-bluenight-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Github</p>
          </div>
        </Fade>
        <Fade className="flex justify-center shadow-2xl bg-mirage-700 hover:-translate-y-2 transition-all duration-300  rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/prismic-icon-svgrepo-com.svg"
                className="w-12 h-12 text-bluenight-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Prismic</p>
          </div>
        </Fade>
        <Fade className="flex justify-center shadow-2xl bg-mirage-700 hover:-translate-y-2 transition-all duration-300  rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/figma.svg"
                className="w-12 h-12 text-bluenight-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Figma</p>
          </div>
        </Fade>
        <Fade className="flex justify-center shadow-2xl bg-mirage-700 hover:-translate-y-2 transition-all duration-300  rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/firebase-svgrepo-com.svg"
                className="w-12 h-12 text-bluenight-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Firebase</p>
          </div>
        </Fade>
        <Fade className="flex justify-center shadow-2xl bg-mirage-700 hover:-translate-y-2 transition-all duration-300  rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/alpine.svg"
                className="w-12 h-12 text-bluenight-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Alpine Js</p>
          </div>
        </Fade>
        <Fade className="flex justify-center shadow-2xl bg-mirage-700 hover:-translate-y-2 transition-all duration-300  rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/sanity.svg"
                className="w-12 h-12 text-bluenight-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Sanity CMS</p>
          </div>
        </Fade>
      </div>
    </div>
  )
}
