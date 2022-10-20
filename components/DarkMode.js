// import SVG from 'react-inlinesvg'
// import useDarkMode from 'use-dark-mode'

// export default function DarkMode({ className, isLarge, style }) {
//   const darkMode = useDarkMode(false, {
//     classNameDark: 'dark',
//     classNameLight: 'light',
//   })

//   const styling = `fill-current ${
//     isLarge ? 'w-8 h-8' : 'w-5 h-5'
//   } text-black dark:text-mirage-60 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-500 ease-in-out transform hover:rotate-90`

//   return (
//     <div style={style} className={className}>
//       {darkMode.value ? (
//         <div aria-label="Light Mode" role="button" onClick={darkMode.disable}>
//           <SVG className={styling} src="../svg/sun.svg" />
//         </div>
//       ) : (
//         <div aria-label="Dark Mode" role="button" onClick={darkMode.enable}>
//           <SVG className={styling} src="../svg/moon.svg" />
//         </div>
//       )}
//     </div>
//   )
// }
