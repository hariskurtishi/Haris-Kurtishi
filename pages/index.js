import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import HeaderSection from '@/components/sections/HeaderSection'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Layout from '@/layout/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      <HeaderSection />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </Layout>
  )
}
