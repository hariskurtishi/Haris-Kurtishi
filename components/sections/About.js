import Image from 'next/dist/client/image'
import SVG from 'react-inlinesvg'
export default function About() {
  return (
    <div id="about" className="relative h-screen lg:h-[780px]">
      <div className="container">
        <div
          className="absolute left-96 lg:left-[1300px]  bottom-56  lg:bottom-24"
          style={{ zIndex: '20' }}
        >
          <SVG src="/svg/rectangle4.svg" className="w-full " alt="facebook icon" />
        </div>
        <div
          className="absolute top-56 w-20 hidden lg:block lg:top-24 lg:left-24"
          style={{ zIndex: '-20' }}
        >
          <SVG src="/svg/verticaldots.svg" className="opacity-30 " alt="facebook icon" />
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
                className="hidden lg:block absolute -bottom-[1100px] lg:-top-20  "
                style={{ zIndex: '6' }}
              >
                <Image
                  // loader={myLoader}
                  priority
                  src="/images/haris.png"
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
          <div className="lg:col-6 lg:px-6">
            <div>
              <h1 className="text-[64px] text-left mb-4">
                About me<span className="text-orange-500">.</span>
              </h1>
              <div className=" text-left">
                <div className="space-y-2">
                  <p>
                    Hello! My name is Haris and I enjoy creating things that live on the internet.
                    My interest in web development started back in 2016 when I decided to build a
                    website for my first online store.
                  </p>
                  <p>
                    My main focus these days is building accessible, inclusive products and digital
                    experiences for a variety of clients.
                  </p>
                  <p>
                    I embrace new challenges with an open heart, a hunger to learn, and a passion
                    for solving problems.
                  </p>
                  <p>Here are a few languages and technologies I’ve been working with recently:</p>
                </div>
              </div>

              <div className="flex justify-start  space-x-[130px] mt-8">
                <div>
                  <div className=" flex items-center space-x-2">
                    <div className="">
                      <SVG
                        src="/svg/reddot.svg"
                        className="w-3 h-3 text-orange-500 fill-current"
                        alt="reddot"
                      />
                    </div>
                    <div>
                      <p>Html</p>
                    </div>
                  </div>
                  <div className=" flex items-center space-x-2">
                    <div className=" ">
                      <SVG
                        src="/svg/reddot.svg"
                        className="w-3 h-3 text-orange-500 fill-current "
                        alt="reddot"
                      />
                    </div>
                    <div>
                      <p>Css</p>
                    </div>
                  </div>
                  <div className=" flex items-center space-x-2">
                    <div className=" ">
                      <SVG
                        src="/svg/reddot.svg"
                        className="w-3 h-3 text-orange-500 fill-current "
                        alt="reddot"
                      />
                    </div>
                    <div>
                      <p>Tailwind</p>
                    </div>
                  </div>
                  <div className=" flex items-center space-x-2">
                    <div className=" ">
                      <SVG
                        src="/svg/reddot.svg"
                        className="w-3 h-3 text-orange-500 fill-current "
                        alt="reddot"
                      />
                    </div>
                    <div>
                      <p>Github</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" flex items-center space-x-2">
                    <div className=" ">
                      <SVG
                        src="/svg/reddot.svg"
                        className="w-3 h-3 text-orange-500 fill-current "
                        alt="reddot"
                      />
                    </div>
                    <div>
                      <p>Bootstrap</p>
                    </div>
                  </div>
                  <div className=" flex items-center space-x-2">
                    <div className=" ">
                      <SVG
                        src="/svg/reddot.svg"
                        className="w-3 h-3 text-orange-500 fill-current "
                        alt="reddot"
                      />
                    </div>
                    <div>
                      <p>JavaScript (ES6+)</p>
                    </div>
                  </div>
                  <div className=" flex items-center space-x-2">
                    <div className=" ">
                      <SVG
                        src="/svg/reddot.svg"
                        className="w-3 h-3 text-orange-500 fill-current "
                        alt="reddot"
                      />
                    </div>
                    <div>
                      <p>React</p>
                    </div>
                  </div>
                  <div className=" flex items-center space-x-2">
                    <div className=" ">
                      <SVG
                        src="/svg/reddot.svg"
                        className="w-3 h-3 text-orange-500 fill-current "
                        alt="reddot"
                      />
                    </div>
                    <div>
                      <p>Next Js</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute -bottom-72" style={{ zIndex: '-20' }}>
        <SVG src="/svg/bigornament.svg" className="w-full h-screen" alt="facebook icon" />
      </div> */}
    </div>
  )
}
