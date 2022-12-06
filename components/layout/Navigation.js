import Link from 'next/link'
import { useState } from 'react'
import SVG from 'react-inlinesvg'
import { Link as ScrollLink } from 'react-scroll'

import Button from '../Button'

// import DarkMode from '../DarkMode'
const NavItem = ({ children, href }) => {
  return (
    <li>
      <ScrollLink
        to={href}
        className="cursor-pointer lg:hover:text-bluenight-500 "
        activeClass="md:text-bluenight-500 lg:before:bg-bluenight-500 menu-item"
        spy={true}
        smooth={true}
        offset={-400}
      >
        <div className="py-4">{children}</div>
      </ScrollLink>
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="sticky top-0 z-50 flex items-center  selection:bg-bluenight-500 selection:text-mirage-600 text-mirage-60 backdrop-blur-lg bg-mirage-700/70	">
      <div className="container">
        <div className="justify-between row">
          <div className="flex items-center col-1">
            <Link href="/" passHref aria-label="Logo" className="">
              <a>
                <SVG
                  src="/svg/logo.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="lg:-ml-5 lg:-mb-3"
                />
              </a>
            </Link>
            <div className="">
              <ScrollLink to="/" spy={true} smooth={true} offset={-70} duration={500}></ScrollLink>
            </div>
          </div>
          <div className="flex items-center col-2 md:col-1 lg:hidden">
            <label htmlFor="menu-toggle" className="cursor-pointer ">
              <SVG
                src={`../svg/${menu ? 'menu-closed.svg' : 'menu.svg'}`}
                className="w-6 h-6 fill-current  text-bluenight-500"
                onClick={() => setMenu(!menu)}
              />
            </label>
          </div>

          <div
            className={`lg:col-9 lg:flex justify-center text-center ${
              menu ? ' flex ' : ' hidden '
            }`}
          >
            <ul className="flex-col w-full font-bold divide-y lg:flex text-bluenight-500 md:text-mirage-60 md:font-medium pt-14 lg:space-x-12 lg:w-auto md:p-0 md:flex-row lg:justify-center md:items-center lg:text-left md:divide-y-2 lg:divide-y-0 divide-bluenight-500 ">
              <NavItem href="home">Home</NavItem>
              <NavItem href="skills">Skills</NavItem>
              <NavItem href="projects">Projects</NavItem>
              <NavItem href="about">About me</NavItem>
              <NavItem href="contact">Contact</NavItem>
            </ul>
          </div>
          <div className="lg:flex justify-center col-12 lg:-mt-1 lg:col-1 lg:mr-3 hidden">
            <Link href="resume.pdf" passHref className="" aria-label="Resume">
              <Button as="a" variant="primary">
                Resume
              </Button>
            </Link>
          </div>

          <didv
            className={`lg:col-3 hidden lg:flex justify-center items-center lg:space-x-4 lg:justify-end ${
              menu ? '  ' : ' hidden '
            }`}
          ></didv>
        </div>
      </div>
    </div>
  )
}
