import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Estudies } from "./components/Estudies"

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="max-w-4xl mx-auto px-5 flex flex-col gap-16 md:gap-25 lg:gap-32">
          <Hero />
          <Projects />
          <Skills />
          <Estudies />
        </main>
      </div>
    </>
  )
}

export default App
