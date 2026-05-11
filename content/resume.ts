export type WorkBullet = {
  text: string;
  repo?: string;
};

export type Work = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  bullets: WorkBullet[];
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi?: string;
  url?: string;
};

export type Repo = {
  name: string;
  description: string;
  url: string;
  language?: string;
  stars?: number;
  tags?: string[];
  /** PyPI distribution name (lowercase). Renders a pepy.tech download badge. */
  pypi?: string;
  /** ReadTheDocs project slug. Renders an RTD build badge. */
  readthedocs?: string;
  /** GitHub Actions workflow filename (e.g. "ci.yml"). Renders a CI status badge. */
  ci?: string;
};

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
  notes?: string;
};

export type SkillGroup = {
  id: string;
  name: string;
  items: { id: string; label: string }[];
};

export const profile = {
  name: "Yu-Te Lin",
  role: "Bioinformatics Scientist, PhD",
  summary:
    "PhD bioinformatics scientist with 8+ years building production-ready pipelines and ML tools for NGS, RNA-seq, single-cell, and genome-scale metabolic modeling. I turn complex biological data into reproducible software — open-source Python packages, web platforms (Django/React), and ML inference apps used by labs and clinicians. Singapore PLOC holder, eligible to work immediately.",
  email: "qwerty239qwe@gmail.com",
  phone: "+65 8025 5276",
  location: "Singapore",
  github: "https://github.com/qwerty239qwe",
  scholar: "https://scholar.google.com/citations?user=",
  linkedin: "https://www.linkedin.com/in/yu-te-lin-4a6142139/",
};

export const skillGroups: SkillGroup[] = [
  {
    id: "bio",
    name: "Bioinformatics",
    items: [
      { id: "rna-seq", label: "RNA-seq pipelines" },
      { id: "scrna", label: "Single-cell RNA-seq" },
      { id: "star", label: "STAR" },
      { id: "samtools", label: "samtools" },
      { id: "fastp", label: "fastp" },
      { id: "ppi-network", label: "PPI network" },
      { id: "reg-network", label: "Regulatory network" },
      { id: "multi-omics", label: "Multi-omics integration" },
      { id: "gem", label: "Genome-scale metabolic modeling" },
      { id: "ode", label: "ODE / mechanistic modeling" },
      { id: "image-bio", label: "Bio-image analysis (cellpose)" },
    ],
  },
  {
    id: "ml",
    name: "ML & MLOps",
    items: [
      { id: "pytorch", label: "PyTorch" },
      { id: "lightning", label: "PyTorch Lightning" },
      { id: "sklearn", label: "scikit-learn" },
      { id: "skimage", label: "scikit-image" },
      { id: "opencv", label: "OpenCV" },
      { id: "ray", label: "Ray" },
      { id: "optuna", label: "Optuna" },
      { id: "shap", label: "SHAP" },
      { id: "imblearn", label: "imbalanced-learn" },
    ],
  },
  {
    id: "compute",
    name: "Scientific computing",
    items: [
      { id: "pandas", label: "Pandas" },
      { id: "numpy", label: "NumPy" },
      { id: "scipy", label: "SciPy" },
      { id: "statsmodels", label: "Statsmodels" },
      { id: "networkx", label: "NetworkX" },
      { id: "gurobi", label: "Gurobi" },
    ],
  },
  {
    id: "langs",
    name: "Languages",
    items: [
      { id: "python", label: "Python" },
      { id: "r", label: "R" },
      { id: "sql", label: "SQL" },
      { id: "postgres", label: "PostgreSQL" },
      { id: "js", label: "JavaScript" },
      { id: "bash", label: "Bash" },
    ],
  },
  {
    id: "web",
    name: "Web & desktop",
    items: [
      { id: "django", label: "Django / DRF" },
      { id: "react", label: "React.js" },
      { id: "pyqt", label: "PyQt6" },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    items: [
      { id: "docker", label: "Docker" },
      { id: "ci-cd", label: "GitHub Actions (CI/CD)" },
      { id: "linux", label: "Linux" },
      { id: "hpc", label: "HPC" },
    ],
  },
];

// Convenient lookup: skill id -> label
export const skillById: Record<string, string> = Object.fromEntries(
  skillGroups.flatMap((g) => g.items.map((s) => [s.id, s.label]))
);

export const work: Work[] = [
  {
    company: "National Taiwan University",
    role: "Graduate Researcher (PhD)",
    start: "Sep 2017",
    end: "Aug 2025",
    location: "Taipei, Taiwan",
    bullets: [
      {
        text: "Built a diagnostic RNA-seq classification pipeline using a VAE to compress transcriptomes — AUROC 0.98 (vs. 0.75 baseline), AUPRC 0.88 (vs. 0.34), and ~40× faster inference for rare-disease prediction.",
      },
      {
        text: "Developed pipeGEM, a Python framework integrating RNA-seq with genome-scale metabolic models; adopted by 8+ external research labs.",
        repo: "pipeGEM",
      },
      {
        text: "Developed MitoTox, a web-based mitochondrial toxicity database (PostgreSQL + Django) with 100,000+ chemicals — cited 40+ times and used in predictive toxicology research.",
        repo: "MitoTOX",
      },
      {
        text: "Shipped open-source bioinformatics tools with {DOWNLOADS} PyPI downloads; full CI/CD, unit tests, and Dockerized environments for reproducibility.",
      },
      {
        text: "Built a PyQt6 desktop app wrapping the RNA-seq + ML inference pipeline so clinicians can run end-to-end transcriptomic analysis through a GUI.",
      },
      {
        text: "Developed biodbs, a Python utility unifying programmatic access to 12+ biological repositories (KEGG, NCBI, ChEMBL), backing the MitoTox dataset.",
        repo: "biodbs",
      },
      {
        text: "Built an image-based cell-counting pipeline (scikit-learn, cellpose, OpenCV) that beat commercial counters on non-spherical cells: +0.3 mean IoU, +0.4 mAP.",
        repo: "confocal_mito_analysis",
      },
      {
        text: "Ported scTenifoldNet/Knk from MATLAB/R to Python for reproducible single-cell network analysis.",
        repo: "scTenifoldpy",
      },
      {
        text: "Partnered with clinicians, wet-lab scientists, and engineers across 5+ projects; mentored 4 MSc students through to conference posters.",
      },
    ],
  },
  {
    company: "World Vegetable Center (AVRDC)",
    role: "Research Assistant (contract)",
    start: "Apr 2017",
    end: "Jul 2017",
    location: "Tainan, Taiwan",
    bullets: [
      {
        text: "Ran high-throughput genotyping and PCR assays — wet-lab grounding that informs downstream computational modeling.",
      },
    ],
  },
];

export const publications: Publication[] = [
  {
    title:
      "Temporal analysis of doxorubicin-induced cardiac toxicity and hypertrophy",
    authors: "Lin Y-T, et al.",
    venue: "npj Systems Biology and Applications",
    year: 2025,
  },
  {
    title:
      "Interpretable modeling of time-resolved single-cell gene–protein expression with CrossmodalNet",
    authors: "Yang Y, Lin Y-T (2nd author), et al.",
    venue: "Briefings in Bioinformatics",
    year: 2023,
  },
  {
    title: "MitoTox: a comprehensive mitochondrial toxicity database",
    authors: "Lin Y-T, et al.",
    venue: "BMC Bioinformatics",
    year: 2021,
  },
  {
    title:
      "Transcriptomic and metabolic network analysis of metabolic reprogramming and IGF-1 modulation in SCA3 transgenic mice",
    authors: "Lin Y-T, et al.",
    venue: "International Journal of Molecular Sciences",
    year: 2021,
  },
];

export const repos: Repo[] = [
  {
    name: "scTenifoldpy",
    description:
      "Python implementation of scTenifoldNet and scTenifoldKnk workflows for single-cell network analysis.",
    url: "https://github.com/qwerty239qwe/scTenifoldpy",
    language: "Python",
    stars: 60,
    tags: ["python", "scrna", "networkx", "ppi-network", "reg-network", "ci-cd", "ray", "pandas", "numpy", "scipy"],
    pypi: "sctenifoldpy",
    readthedocs: "sctenifoldpy",
    ci: "ci.yml",
  },
  {
    name: "pipeGEM",
    description:
      "Integrate omics data with genome-scale metabolic models and run comparative constraint-based analysis.",
    url: "https://github.com/qwerty239qwe/pipeGEM",
    language: "Python",
    tags: ["python", "gem", "multi-omics", "rna-seq", "gurobi", "networkx", "ci-cd", "pandas", "numpy", "scipy"],
    pypi: "pipegem",
    readthedocs: "pipegem",
    ci: "ci.yml",
  },
  {
    name: "biodbs",
    description:
      "Unified Python interface for fetching and structuring data from 12+ biological databases (KEGG, NCBI, ChEMBL, …).",
    url: "https://github.com/qwerty239qwe/biodbs",
    language: "Python",
    tags: ["python", "sql", "ci-cd", "pandas"],
    pypi: "biodbs",
    readthedocs: "biodbs",
    ci: "ci.yml",
  },
  {
    name: "ppi_net_builder",
    description:
      "Protein–protein interaction network construction and analysis in Python.",
    url: "https://github.com/qwerty239qwe/ppi_net_builder",
    language: "Python",
    tags: ["python", "ppi-network", "networkx", "ci-cd"],
    pypi: "ppi-net-builder",
    ci: "python-package.yml",
  },
  {
    name: "confocal_mito_analysis",
    description:
      "Confocal image analysis pipeline for mitochondrial morphology — segmentation and quantification (NTU Mito Lab).",
    url: "https://github.com/ntumitolab/confocal_mito_analysis",
    language: "Python",
    tags: ["python", "image-bio", "skimage", "sklearn", "pandas", "numpy", "scipy"],
  },
  {
    name: "dox-ac16-omics-analysis",
    description:
      "Multi-omics analysis pipeline for doxorubicin-treated AC16 cardiomyocytes — companion code for the npj Syst. Biol. Appl. paper.",
    url: "https://github.com/qwerty239qwe/dox-ac16-omics-analysis",
    language: "Python",
    tags: ["python", "rna-seq", "multi-omics", "ode", "pandas", "numpy", "scipy", "gem", "r", "skimage", "opencv", "star", "fastp", "samtools"],
  },
  {
    name: "MitoTOX",
    description:
      "Web-based mitochondrial toxicity database — 100,000+ chemicals, PostgreSQL + Django. Cited 40+ times in predictive toxicology research.",
    url: "https://www.mitotox.org/",
    language: "Django / PostgreSQL",
    tags: ["python", "django", "postgres", "sql", "react", "js"],
  },
  {
    name: "submission-nav",
    description:
      "Practical AI skill for academic submission workflows — turn manuscripts into ranked journal shortlists, compare author guidelines, plan revisions.",
    url: "https://github.com/qwerty239qwe/submission-nav",
    language: "Python",
    tags: ["python"],
  },
];

// Map repo name -> url for inline links in work bullets
export const repoUrlByName: Record<string, string> = Object.fromEntries(
  repos.map((r) => [r.name, r.url])
);

export const education: Education[] = [
  {
    school: "National Taiwan University",
    degree: "PhD, Biomedical Electronics and Bioinformatics",
    start: "2017",
    end: "2025",
    notes:
      "GPA 4.12/4.3. Thesis: Mechanistic and predictive models of mitochondrial dysfunction in toxicology and genetic disease. Awarded MOST Ph.D. Scholarship.",
  },
  {
    school: "National Cheng Kung University",
    degree: "B.S., Life Sciences",
    start: "2012",
    end: "2017",
  },
];
