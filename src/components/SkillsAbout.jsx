import { Cpu, Database, Cloud, Code } from 'lucide-react';

export default function SkillsAbout() {
  const skills = [
    {
      icon: <Code size={18} />, title: 'Languages', items: ['Python', 'TypeScript/JavaScript', 'SQL']
    },
    {
      icon: <Cpu size={18} />, title: 'Frameworks/Libraries', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'FastAPI', 'NumPy/Pandas']
    },
    {
      icon: <Cloud size={18} />, title: 'Cloud/DevOps', items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions']
    },
    {
      icon: <Database size={18} />, title: 'Data/Storage', items: ['PostgreSQL', 'BigQuery', 'Snowflake', 'MongoDB', 'Redis']
    },
  ];

  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Skills & Tech Stack</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">Pragmatic tool selection, strong fundamentals, and production-first engineering.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((group) => (
              <div key={group.title} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur p-4">
                <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <span className="text-indigo-500">{group.icon}</span>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="about" className="lg:pl-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">About</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            I’m an AI Engineer focused on taking models from notebooks to production. My work spans problem framing, data strategy, model development, and MLOps. I value clear metrics, reliable systems, and tight feedback loops.
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/70 dark:bg-gray-900/70">
              <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold text-gray-900 dark:text-white">Recent:</span> Led deployment of a real-time voice agent reducing intent latency from 900ms to 250ms, driving +18% task success.</p>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/70 dark:bg-gray-900/70">
              <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold text-gray-900 dark:text-white">Previously:</span> Built CV anomaly detection with active learning, decreasing false positives by 32% over 3 months.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
