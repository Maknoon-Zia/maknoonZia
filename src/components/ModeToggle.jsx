import { useMode, MODE_CONTENT } from '../ModeContext';

export default function ModeToggle({ className = '' }) {
  const { mode, setMode } = useMode();

  return (
    <div className={`mode-toggle ${className}`}>
      {Object.entries(MODE_CONTENT).map(([key, val]) => (
        <button
          key={key}
          className={mode === key ? 'active' : ''}
          onClick={() => setMode(key)}
          aria-pressed={mode === key}
        >
          {val.label}
        </button>
      ))}
    </div>
  );
}
