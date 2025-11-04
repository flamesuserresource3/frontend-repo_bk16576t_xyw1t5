import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 backdrop-blur dark:bg-gray-900/60 px-3 py-1 text-xs text-gray-700 dark:text-gray-200">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            Available for full-time roles
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            AI Engineer | Machine Learning Specialist
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
            Building intelligent systems with a focus on Deep Learning and MLOps. I design production-ready models, streamline data pipelines, and ship reliable AI features.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition">
              View Projects
              <ArrowRight size={16} />
            </a>
            <div className="flex items-center gap-2">
              <a href="#" aria-label="GitHub" className="inline-flex items-center gap-2 rounded-md bg-white/70 dark:bg-gray-800/80 backdrop-blur px-3 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-white/90 dark:hover:bg-gray-800">
                <Github size={16} /> GitHub
              </a>
              <a href="#" aria-label="LinkedIn" className="inline-flex items-center gap-2 rounded-md bg-white/70 dark:bg-gray-800/80 backdrop-blur px-3 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-white/90 dark:hover:bg-gray-800">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex items-center gap-6">
          <div className="h-16 w-16 rounded-full ring-2 ring-white/30 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">AE</div>
          </div>
          <div className="text-sm text-gray-800/90 dark:text-gray-200/90">
            <p className="font-medium">Alex Edwards</p>
            <p>San Francisco, CA • Open to Remote</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/10 to-white/80 dark:from-gray-900/85 dark:via-gray-900/40 dark:to-gray-900/90" />
    </section>
  );
}
