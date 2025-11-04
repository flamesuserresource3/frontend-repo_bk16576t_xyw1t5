import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

function TechTag({ label }) {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
      {label}
    </span>
  );
}

function ImpactBadge({ text }) {
  return (
    <span className="inline-flex items-center rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 px-2 py-1 text-xs font-semibold">
      {text}
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

function ProjectCard({ slug, title, description, tech = [], impact }) {
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
        <div className="mt-3">
          {impact ? <ImpactBadge text={impact} /> : null}
        </div>
        <div className="mt-4">
          <a href={`#/project/${slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
            Case Study / View Details <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

function MetricsTable({ rows }) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-800/50 px-4 py-2 text-sm font-semibold">Model Performance & Impact</div>
      <table className="w-full text-sm">
        <thead className="bg-gray-50 dark:bg-gray-800/40 text-gray-700 dark:text-gray-300">
          <tr>
            <th className="text-left px-4 py-2 font-medium">Metric</th>
            <th className="text-left px-4 py-2 font-medium">Value</th>
            <th className="text-left px-4 py-2 font-medium">Impact</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.metric} className="border-t border-gray-100 dark:border-gray-800">
              <td className="px-4 py-2">{r.metric}</td>
              <td className="px-4 py-2">{r.value}</td>
              <td className="px-4 py-2">{r.impact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ConfusionMatrixViz() {
  const cells = [
    { x: 0, y: 0, v: 92 },
    { x: 1, y: 0, v: 8 },
    { x: 0, y: 1, v: 10 },
    { x: 1, y: 1, v: 90 },
  ];
  const color = (v) => `rgba(99,102,241,${0.2 + v / 150})`;
  return (
    <svg viewBox="0 0 200 200" className="w-full h-48 rounded-md border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/40">
      {cells.map((c, i) => (
        <g key={i}>
          <rect x={c.x * 100} y={c.y * 100} width="100" height="100" fill={color(c.v)} />
          <text x={c.x * 100 + 50} y={c.y * 100 + 55} textAnchor="middle" className="fill-gray-900 dark:fill-gray-100" fontSize="20" fontWeight="600">{c.v}%</text>
        </g>
      ))}
      <text x="100" y="20" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300" fontSize="12">Confusion Matrix (Illustrative)</text>
    </svg>
  );
}

function CodeBlock({ code, language = 'python' }) {
  return (
    <pre className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-900 text-gray-100 overflow-auto text-sm p-4">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}

const PROJECTS = {
  'face-recognition-attendance': {
    title: 'Face Recognition and Attendance System',
    description: 'Automating attendance via real-time facial detection and recognition algorithms.',
    tech: ['Python', 'OpenCV', 'Data Preprocessing', 'Computer Vision'],
    impact: 'Improved accuracy by 85%, reduced manual effort by 70%.'
  },
  'human-activity-recognition': {
    title: 'Human Activity Recognition (HAR) Using Deep Learning',
    description: 'Classifying human activities from video data using customized CNN architectures for real-time monitoring.',
    tech: ['Python', 'CNNs', 'Deep Learning', 'Feature Extraction'],
    impact: 'Achieved 92% accuracy, enhancing monitoring efficiency by 50%.'
  },
  'vllm-visual-search': {
    title: 'Visual Search Capabilities (LLMs)',
    description: 'Integrated Visual Large Language Models (VLLMs) to enhance image-text interaction for improved customer insights and visual search.',
    tech: ['Python', 'AI Model Integration', 'VLLMs', 'Vision Processing', 'Generative AI'],
    impact: 'Boosted image-text processing speed by 25%, with automation gains up to 40%.'
  }
};

const DETAIL_CONTENT = {
  'face-recognition-attendance': {
    metrics: [
      { metric: 'Accuracy', value: '85%', impact: 'Significant improvement over manual checks' },
      { metric: 'Latency', value: '~120ms/frame', impact: 'Real-time detection maintained' },
      { metric: 'Reduction in Effort', value: '70%', impact: 'Near elimination of manual marking' },
    ],
    code: `import cv2\nimport numpy as np\n\n# Face detection with Haar Cascades\nface_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')\ncap = cv2.VideoCapture(0)\n\nwhile True:\n    ret, frame = cap.read()\n    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)\n    faces = face_cascade.detectMultiScale(gray, 1.3, 5)\n    for (x,y,w,h) in faces:\n        roi = gray[y:y+h, x:x+w]\n        # embedding = model(roi)  # e.g., FaceNet/DeepFace\n        # identity = matcher(embedding)\n        cv2.rectangle(frame,(x,y),(x+w,y+h),(0,255,0),2)\n    cv2.imshow('frame', frame)\n    if cv2.waitKey(1) & 0xFF == ord('q'):\n        break`,
  },
  'human-activity-recognition': {
    metrics: [
      { metric: 'Accuracy', value: '92%', impact: 'High precision across key classes' },
      { metric: 'Latency', value: '~30 FPS', impact: 'Supports real-time monitoring' },
      { metric: 'Efficiency Gain', value: '50%', impact: 'Fewer manual reviews needed' },
    ],
    code: `import torch\nimport torch.nn as nn\n\nclass SmallCNN(nn.Module):\n    def __init__(self, num_classes=6):\n        super().__init__()\n        self.fe = nn.Sequential(\n            nn.Conv2d(3, 32, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),\n            nn.Conv2d(32, 64, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),\n        )\n        self.head = nn.Sequential(nn.Flatten(), nn.Linear(64*56*56, 256), nn.ReLU(), nn.Linear(256, num_classes))\n    def forward(self, x):\n        return self.head(self.fe(x))`,
  },
  'vllm-visual-search': {
    metrics: [
      { metric: 'Processing Speed', value: '+25%', impact: 'Faster image-text pairing' },
      { metric: 'Automation', value: '40% gain', impact: 'Reduced manual tagging' },
      { metric: 'Accuracy', value: 'Consistent', impact: 'Stable relevance scores' },
    ],
    code: `from transformers import BlipProcessor, BlipForConditionalGeneration\nfrom PIL import Image\n\nprocessor = BlipProcessor.from_pretrained('Salesforce/blip-image-captioning-base')\nmodel = BlipForConditionalGeneration.from_pretrained('Salesforce/blip-image-captioning-base')\n\nimage = Image.open('sample.jpg')\ninputs = processor(images=image, return_tensors='pt')\nout = model.generate(**inputs, max_new_tokens=20)\nprint(processor.decode(out[0], skip_special_tokens=True))`,
  },
};

export default function Projects() {
  const [route, setRoute] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const isDetail = route.startsWith('#/project/');

  if (isDetail) {
    const slug = route.replace('#/project/', '');
    const proj = PROJECTS[slug];
    const detail = DETAIL_CONTENT[slug];

    if (!proj) {
      return (
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Project not found</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">The requested project does not exist. <a href="#projects" className="underline">Go back</a>.</p>
        </section>
      );
    }

    return (
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <a href="#projects" className="text-sm text-indigo-600 dark:text-indigo-400 underline">← Back to Projects</a>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{proj.title}</h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{proj.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">{proj.tech.map((t) => <TechTag key={t} label={t} />)}</div>
        <div className="mt-3">{proj.impact ? <ImpactBadge text={proj.impact} /> : null}</div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <MetricsTable rows={detail?.metrics || []} />
            <div>
              <h3 className="text-lg font-semibold mb-2">Technical Deep Dive</h3>
              <CodeBlock code={detail?.code || ''} />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Visualization</h3>
            <ConfusionMatrixViz />
          </div>
        </div>
      </section>
    );
  }

  const projectList = [
    {
      slug: 'face-recognition-attendance',
      title: 'Face Recognition and Attendance System',
      description: 'Automating attendance via real-time facial detection and recognition algorithms.',
      tech: ['Python', 'OpenCV', 'Data Preprocessing', 'Computer Vision'],
      impact: 'Improved accuracy by 85%, reduced manual effort by 70%.'
    },
    {
      slug: 'human-activity-recognition',
      title: 'Human Activity Recognition (HAR) Using Deep Learning',
      description: 'Classifying human activities from video data using customized CNN architectures for real-time monitoring.',
      tech: ['Python', 'CNNs', 'Deep Learning', 'Feature Extraction'],
      impact: 'Achieved 92% accuracy, enhancing monitoring efficiency by 50%.'
    },
    {
      slug: 'vllm-visual-search',
      title: 'Visual Search Capabilities (LLMs)',
      description: 'Integrated Visual Large Language Models (VLLMs) to enhance image-text interaction for improved customer insights and visual search.',
      tech: ['Python', 'AI Model Integration', 'VLLMs', 'Vision Processing', 'Generative AI'],
      impact: 'Boosted image-text processing speed by 25%, with automation gains up to 40%.'
    },
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Core Projects</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">Applied machine learning projects with clear metrics and measurable impact.</p>
      </div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectList.map((p) => (
          <ProjectCard key={p.slug} slug={p.slug} title={p.title} description={p.description} tech={p.tech} impact={p.impact} />
        ))}
      </div>
    </section>
  );
}
