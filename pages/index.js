import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import HeaderSection from '@/components/sections/HeaderSection'
import Projects from '@/components/sections/Projects'
import Layout from '@/layout/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      <HeaderSection />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}
