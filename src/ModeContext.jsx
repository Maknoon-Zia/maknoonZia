import { createContext, useContext, useEffect, useState } from 'react';

const ModeContext = createContext(null);

export const MODE_CONTENT = {
  web: {
    label: 'Web Dev',
    eyebrow: 'open to internship & junior roles',
    role: 'Frontend Engineer',
    lede:
      'I build and ship responsive, production-ready interfaces with React and Firebase — trained through SMIT\u2019s Web Development program, now applying it to real, internship-ready projects.',
    resume: '/resume/Maknoon-Zia-Frontend-Resume.pdf',
    fname: 'profile.js',
  },
  ai: {
    label: 'AI / ML',
    eyebrow: 'open to internship & junior roles',
    role: 'ML / Data Engineer',
    lede:
      'I train and deploy machine learning models end to end — preprocessing, Scikit-learn, and a live Hugging Face demo. Currently training in AI at SMIT, based in Faisalabad, Pakistan.',
    resume: '/resume/Maknoon-Zia-AI-DataScience-Resume.pdf',
    fname: 'train_model.py',
  },
};

export function ModeProvider({ children }) {
  const [mode, setMode] = useState('web');

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode, content: MODE_CONTENT[mode] }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error('useMode must be used within a ModeProvider');
  return ctx;
}
