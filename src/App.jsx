import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SkillsAbout from './components/SkillsAbout';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white selection:bg-indigo-500/20 selection:text-indigo-700 dark:selection:text-indigo-300">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <SkillsAbout />

        <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Let’s build something intelligent</h2>
            <p className="mt-2 max-w-2xl text-gray-700 dark:text-gray-300">Interested in collaborating or hiring? I’m open to roles where ML makes a real product impact.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:hello@ai.engineer" className="inline-flex items-center gap-2 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition">
                Email Me
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700">
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} AI Engineer Portfolio. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#home" className="hover:text-gray-900 dark:hover:text-gray-200">Home</a>
            <a href="#projects" className="hover:text-gray-900 dark:hover:text-gray-200">Projects</a>
            <a href="#skills" className="hover:text-gray-900 dark:hover:text-gray-200">Skills</a>
            <a href="#about" className="hover:text-gray-900 dark:hover:text-gray-200">About</a>
            <a href="#contact" className="hover:text-gray-900 dark:hover:text-gray-200">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
