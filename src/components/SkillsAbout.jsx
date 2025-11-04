import { Cpu, Tool, Code2, Award, Briefcase } from 'lucide-react';

export default function SkillsAbout() {
  const groups = [
    {
      icon: <Cpu size={18} />, title: 'ML/AI Core', items: ['CNNs', 'SVM', 'Data Analysis', 'Model Evaluation']
    },
    {
      icon: <Tool size={18} />, title: 'Frameworks & Tools', items: ['PyTorch', 'Keras', 'OpenCV', 'Generative AI (OCI Certified)']
    },
    {
      icon: <Code2 size={18} />, title: 'Programming & DevOps', items: ['Python', 'C', 'Java', 'Data Structures', 'Advanced Algorithms']
    },
  ];

  const certifications = [
    'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    'AI Machine Learning Engineer (Certified Training) (NCVET/NASSCOM Level 5 NCF credits)',
    'Neural Networks and Deep Learning (Coursera)',
    'Python Programming - Technical Hub Pvt. Ltd.',
  ];

  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Skills & Tech Stack</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">Hands-on with modern ML tooling and strong CS fundamentals.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {groups.map((group) => (
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

          <div id="experience" className="mt-10">
            <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-indigo-500" />
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Experience</h2>
            </div>
            <div className="mt-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur p-4">
              <p className="text-sm text-gray-800 dark:text-gray-200"><span className="font-semibold">AI & Data Science Intern</span> • Aqmenz Automation Pvt. Ltd.</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">September 2023 – November 2023</p>
              <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
                <li>Contributed to end-to-end AI project development, including data preprocessing, model training, and deployment.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:pl-4" id="certifications">
          <div className="flex items-center gap-2">
            <Award size={18} className="text-indigo-500" />
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Certifications</h2>
          </div>
          <div className="mt-4 space-y-3">
            {certifications.map((c) => (
              <div key={c} className="flex items-start gap-3 rounded-lg border border-gray-200 dark:border-gray-800 p-3 bg-white/70 dark:bg-gray-900/70">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 text-[11px]">★</span>
                <p className="text-sm text-gray-800 dark:text-gray-200">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
