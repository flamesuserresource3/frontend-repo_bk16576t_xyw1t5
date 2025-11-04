import { ExternalLink } from 'lucide-react';

function TechTag({ label }) {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
      {label}
    </span>
  );
}

function ThumbChart() {
  return (
    <svg viewBox="0 0 240 120" className="w-full h-32 rounded-md bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f472b6" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="240" height="120" fill="url(#g)" opacity="0.15" />
      <polyline fill="none" stroke="#a78bfa" strokeWidth="2" points="0,100 30,95 60,90 90,70 120,60 150,65 180,40 210,30 240,20" />
      <polyline fill="none" stroke="#f472b6" strokeWidth="2" points="0,110 30,105 60,100 90,80 120,85 150,75 180,60 210,50 240,45" />
    </svg>
  );
}

function ProjectCard({ title, description, tech = [] }) {
  return (
    <article className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur p-4 hover:shadow-lg transition-shadow">
      <ThumbChart />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <TechTag key={t} label={t} />
          ))}
        </div>
        <div className="mt-4">
          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
            Case Study / View Details <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'Real-time Speech-to-Intent System',
      description: 'Low-latency voice agent that maps speech to intents with streaming inference and on-device ASR.',
      tech: ['Python', 'PyTorch', 'TorchServe', 'WebRTC', 'Docker'],
    },
    {
      title: 'Computer Vision Defect Detector',
      description: 'Production model for visual anomaly detection with active learning loop and MLOps automation.',
      tech: ['Python', 'TensorFlow', 'TFX', 'Kubernetes', 'GCP'],
    },
    {
      title: 'LLM-powered Document QA',
      description: 'Retrieval-augmented question answering over enterprise docs with vector search and evaluation.',
      tech: ['Python', 'LangChain', 'OpenAI', 'Weaviate', 'FastAPI'],
    },
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Core Projects</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">Selected work showcasing applied machine learning, production systems, and measurable impact.</p>
      </div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} title={p.title} description={p.description} tech={p.tech} />
        ))}
      </div>
    </section>
  );
}
