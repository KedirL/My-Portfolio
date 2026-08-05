import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import StackSection from './components/Framer'
import Header from './components/Header'
import Certification from './components/Certification'
import Project from './components/Project'

import './App.css'

function App() {
  return (
    <div id='home' className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] text-pretty md:flex p-4">
      
      <header  className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--card-bg)]/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-[1fr_auto] items-center gap-4">
          <Header />
          <hr />
        </div>
      </header>
      <main style={{backgroundColor:''}} className="flex-1 pt-20 pb-12">
        <div className="mx-auto max-w-6xl px-4 space-y-16">
          <section id="about" className="box-content mb-8 p-4">
            <div>
              <About />
            </div>
          </section>
          <section>
            <div>
              <Project />
            </div>
          </section>

          <section id="skills" className=''>
            <StackSection />
          </section>

          <section id='certification'>
             <Certification />
          </section>

          
          <section id="contact" className='text-center'>
            <Contact />
          </section>
        </div>
      </main>

       
      <footer id='foot' className="border-t border-[var(--border)] py-8">
        <div className="mx-auto max-w-6xl px-4">
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default App;