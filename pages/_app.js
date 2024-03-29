import '../styles/globals.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'

import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_EN',
          url: 'https://hariskurtishi.com/',
          site_name: 'Haris Kurtishi',
          description:
            'Frontend Developer specializing in building (and occasionally designing) exceptional digital experiences.',
          images: [
            {
              url: 'https://github.com/hariskurtishi/Haris-Kurtishi/blob/main/public/images/ogharis.png',
              alt: 'OG Image',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
