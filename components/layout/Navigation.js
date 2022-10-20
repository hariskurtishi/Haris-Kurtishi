import { useState } from 'react'
import SVG from 'react-inlinesvg'
import { Link as ScrollLink } from 'react-scroll'

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
        offset={-200}
      >
        <div className="py-4">{children}</div>
      </ScrollLink>
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="sticky top-0 z-50 flex items-center bg-bluenight-700 selection:bg-bluenight-500 selection:text-mirage-60 text-mirage-60">
      <div className="container">
        <div className="justify-between py-5 row">
          <div className="flex items-center col-3">
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
            className={`lg:col-6 lg:flex justify-center text-center ${
              menu ? ' flex ' : ' hidden '
            }`}
          >
            <ul className="flex-col w-full font-bold divide-y lg:flex text-bluenight-500 md:text-mirage-60 md:font-medium pt-14 lg:space-x-12 lg:w-auto md:p-0 md:flex-row lg:justify-center md:items-center lg:text-left md:divide-y-2 lg:divide-y-0 divide-bluenight-500 ">
              <NavItem href="home">Home</NavItem>
              <NavItem href="about">About me</NavItem>
              <NavItem href="skills">Skills</NavItem>
              <NavItem href="projects">Projects</NavItem>
              <NavItem href="contact">Contact</NavItem>
              {/* <li className="py-2"><DarkMode /></li> */}
            </ul>
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
