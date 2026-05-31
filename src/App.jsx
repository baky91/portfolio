import Projects from './components/Projects'
import Navbar from './components/Navbar'
import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'

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
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar activeSection={activeSection} />
        <h1 className="text-3xl text-sky-600 font-bold underline">
          Bakary Bomou - Portfolio
        </h1>
        <main>
          <Projects />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
