// Add new projects by pushing another object into this array.
// category must be either 'web' or 'ai' (drives the filter + badge color).
// codeUrl + codeLabel is the secondary link — use codeLabel 'Code' for a
// GitHub repo, or 'Notebook' for a Colab/Jupyter notebook link.
const projects = [
  {
    title: 'QuoteKeeper',
    category: 'web',
    categoryLabel: 'Web · Full stack',
    description:
      'Full-stack app where users register, log in, and manage personal quote collections with real-time Firestore persistence. Firestore security rules enforce authenticated-only access.',
    tags: ['React.js', 'Tailwind', 'Firebase Auth', 'Firestore'],
    liveUrl: 'https://qoutekeeper.web.app/',
    codeUrl: 'https://github.com/Maknoon-Zia/QuoteKeeper',
    codeLabel: 'Code',
  },
  {
    title: 'SaaS Landing Page',
    category: 'web',
    categoryLabel: 'Web · UI',
    description:
      'Multi-section SaaS landing page with independent, fully optimized layouts for desktop, tablet, and mobile — built in vanilla CSS with no framework.',
    tags: ['HTML5', 'CSS3', 'Responsive design'],
    liveUrl: 'https://saas-landing-page-zg56.vercel.app/',
    codeUrl: 'https://github.com/Maknoon-Zia/saas-landing-page',
    codeLabel: 'Code',
  },
  {
    title: 'Responsive Portfolio',
    category: 'web',
    categoryLabel: 'Web · UI',
    description:
      'Fully responsive site built from scratch — hero, services, gallery, testimonials, and a contact form using semantic HTML5 and CSS3, no framework.',
    tags: ['HTML5', 'CSS3', 'Font Awesome'],
    liveUrl: 'https://portfolio-website-eta-seven-65.vercel.app/',
    codeUrl: 'https://github.com/Maknoon-Zia/portfolio-website',
    codeLabel: 'Code',
  },
  {
    title: 'AI Book Recommendation System',
    category: 'ai',
    categoryLabel: 'AI · Recommender',
    description:
      'A content-based recommender that suggests books to readers from their input preferences, deployed as a live Streamlit app.',
    tags: ['Python', 'Scikit-learn', 'Streamlit'],
    liveUrl: 'https://ai-book-recommendation-system-dn9quxsujhdc9yjge4hddh.streamlit.app/',
    codeUrl: 'https://github.com/Maknoon-Zia/ai-book-recommendation-system',
    codeLabel: 'Code',
  },
  {
    title: 'SMS Spam Classifier',
    category: 'ai',
    categoryLabel: 'AI · NLP',
    description:
      'Binary NLP classifier detecting spam vs. ham SMS using Logistic Regression on a TF-IDF vectorized corpus, with an identical preprocessing pipeline at train and inference time to prevent leakage.',
    tags: ['Scikit-learn', 'TF-IDF', 'Gradio', 'Hugging Face'],
    liveUrl: 'https://huggingface.co/spaces/Maknoon-Zia/sms-spam-classifier',
    codeUrl: 'https://colab.research.google.com/drive/1Mbn2AqT5Ktenue1sR8rnRcfUUZ_Sblf1?usp=sharing',
    codeLabel: 'Notebook',
  },
  {
    title: 'Crop Yield Predictor',
    category: 'ai',
    categoryLabel: 'AI · Regression',
    description:
      'Multiple Linear Regression model trained on 23 years of Indian agricultural data to predict crop yield from 8 features. Containerized with Docker; Streamlit UI adds an automated yield performance rating.',
    tags: ['Scikit-learn', 'Pandas', 'Streamlit', 'Docker'],
    liveUrl: 'https://huggingface.co/spaces/Maknoon-Zia/crop-yield-predictor',
    codeUrl: 'https://colab.research.google.com/drive/1EKHUl2JwXk-DMIoB8x23TynHOJJO2njB?usp=sharing',
    codeLabel: 'Notebook',
  },
  {
    title: 'Pizza Delivery Predictor',
    category: 'ai',
    categoryLabel: 'AI · Regression',
    description:
      'Interactive Linear Regression app that trains on user-provided distance/time data in real time, with a configurable train/test split and full model metrics — slope, intercept, MSE, R².',
    tags: ['Scikit-learn', 'Matplotlib', 'Gradio'],
    liveUrl: 'https://huggingface.co/spaces/Maknoon-Zia/pizza-delivery-predictor',
    codeUrl: 'https://colab.research.google.com/drive/1_dmTjYuzj98tzH5MADAIzRv7D43EyLqI?usp=sharing',
    codeLabel: 'Notebook',
  },
];

export default projects;
