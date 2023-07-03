
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Skills from './components/Skills'

function App() {
  return (
    <div className="flex relative">
      <Sidebar />
      <section className="lg:w-10/12 w-full">
        <Home />
        <section>
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </section>
      </section>
    </div>
  )
}

export default App
