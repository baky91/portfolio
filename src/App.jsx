import Projects from './components/Projects'
import Navbar from './components/Navbar'
import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'experience',
        'projects',
        'skills',
        'education',
        'contact',
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
      <div className='min-h-screen bg-background text-foreground'>
        <Navbar activeSection={activeSection} />
        <main>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
