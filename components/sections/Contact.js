import Link from 'next/link'
import SVG from 'react-inlinesvg'

import Button from '../Button'
export default function Contact() {
  return (
    <div>
      <div
        id="contact"
        className="container my-14 py-12 selection:bg-bluenight-500 selection:text-mirage-600 "
      >
        <div>
          <div className="py-8 flex items-center justify-center">
            <div className=" ">
              <div className=" py-16 ">
                <h1 className="font-bold text-3xl lg:text-4xl text-center text-mirage-40">
                  Have a specific project in mind?
                </h1>
                <div className="py-12 ">
                  <p className="font-normal text-center text-mirage-60">
                    I love bringing fresh, new ideas to life and turning them into memorable
                    experiences.
                  </p>
                  <p className="font-normal text-center text-mirage-60">
                    Do you require a high-end web presence?
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <div>
                    <Link
                      href="mailto:hariskurtishii.com"
                      passHref
                      className="font-light"
                      aria-label="Contact Button"
                    >
                      <Button as="a" variant="primary">
                        Let’s build something special!
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
