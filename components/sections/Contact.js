import Link from 'next/link'
import SVG from 'react-inlinesvg'

import Button from '../Button'
export default function Contact() {
  return (
    <div>
      <div id="contact" className="container py-12  ">
        <div className=" ">
          <div className=" bg-gray-200 py-14 flex items-center justify-center">
            <div className=" ">
              <div className="text-white py-16 ">
                <h1 className="font-bold text-5xl text-center text-zinc-900">
                  Have a specific project in mind?
                </h1>
                <div className="col-8 offset-2 py-4">
                  <p className="text-lg font-normal text-center text-zinc-900">
                    Im passionate about bringing fresh, new ideas to life and turning them into
                    memorable experiences. Do you require a high-end web presence?
                  </p>
                </div>
                <div>
                  <div className="flex justify-center">
                    <Link
                      href="#contact"
                      passHref
                      className="font-light"
                      aria-label="Contact Button"
                    >
                      <Button as="a" variant="primary">
                        Lets build something special!
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0">
              <SVG src="/svg/pattern.svg" className="w-full " alt="pattern" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
