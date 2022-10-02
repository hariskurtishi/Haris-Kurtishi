import SVG from 'react-inlinesvg'
export default function Skills() {
  return (
    <div id="skills" className=" h-[1150px] lg:h-[650px] md:h-[770px]">
      <h1 className="text-center text-4xl  text-zinc-900 hover:text-orange-500  mb-4 group transition-all selection:bg-orange-500 selection:text-white">
        My toolbox and things i can do
        <span className="text-orange-500 group-hover:text-zinc-900">.</span>
      </h1>
      <div className="py-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12 container">
        <div className="flex justify-center shadow-md border hover:shadow-xl transition-all rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/tailwindcss-icon-svgrepo-com.svg"
                className="w-12 h-12 text-orange-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Tailwind</p>
          </div>
        </div>
        <div className="flex justify-center shadow-md border hover:shadow-xl transition-all rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/mui.svg"
                className="w-12 h-12 text-orange-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Material UI</p>
          </div>
        </div>
        <div className="flex justify-center shadow-md border hover:shadow-xl transition-all rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/react.svg"
                className="w-12 h-12 text-orange-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">React Js</p>
          </div>
        </div>
        <div className="flex justify-center shadow-md border hover:shadow-xl transition-all rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG src="/svg/nextjs.svg" className="w-12 h-12 fill-current" alt="reddot" />
            </div>
            <p className="text-xl">Next Js</p>
          </div>
        </div>
        <div className="flex justify-center shadow-md border hover:shadow-xl transition-all rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/bootstrap-svgrepo-com.svg"
                className="w-12 h-12 text-orange-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Bootstrap</p>
          </div>
        </div>
        <div className="flex justify-center shadow-md border hover:shadow-xl transition-all rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/github-svgrepo-com (1).svg"
                className="w-12 h-12 text-orange-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Github</p>
          </div>
        </div>
        <div className="flex justify-center shadow-md border hover:shadow-xl transition-all rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/prismic-icon-svgrepo-com.svg"
                className="w-12 h-12 text-orange-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Prismic</p>
          </div>
        </div>
        <div className="flex justify-center shadow-md border hover:shadow-xl transition-all rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/figma-svgrepo-com.svg"
                className="w-12 h-12 text-orange-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Figma</p>
          </div>
        </div>
        <div className="flex justify-center shadow-md border hover:shadow-xl transition-all rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/firebase-svgrepo-com.svg"
                className="w-12 h-12 text-orange-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Firebase</p>
          </div>
        </div>
        <div className="flex justify-center shadow-md border hover:shadow-xl transition-all rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/alpine.svg"
                className="w-12 h-12 text-orange-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Alpine Js</p>
          </div>
        </div>
        <div className="flex justify-center shadow-md border hover:shadow-xl transition-all rounded-md py-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <SVG
                src="/svg/sanity.svg"
                className="w-12 h-12 text-orange-500 fill-current"
                alt="reddot"
              />
            </div>
            <p className="text-xl">Sanity CMS</p>
          </div>
        </div>
      </div>
    </div>
  )
}
