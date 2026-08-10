import { Type } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useState } from 'react';

export default function ThemeToggle() {
  const { fontSize, setFontSize } = useTheme();
  const [showFontMenu, setShowFontMenu] = useState(false);

  const fontOptions = [
    { value: 'small', label: 'A', title: 'Fonte pequena' },
    { value: 'normal', label: 'A', title: 'Fonte normal' },
    { value: 'large', label: 'A', title: 'Fonte grande' },
  ];

  return (
    <div className="flex items-center gap-1">
      {/* Font size toggle */}
      <div className="relative">
        <button
          onClick={() => setShowFontMenu((v) => !v)}
          aria-label="Ajustar tamanho da fonte"
          title="Ajustar tamanho da fonte"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-400 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-blue-400"
        >
          <Type size={15} aria-hidden="true" />
        </button>
        {showFontMenu && (
          <div
            className="absolute right-0 top-11 z-50 flex flex-col gap-1 rounded-xl border border-white/10 bg-neutral-900 p-2 shadow-2xl"
            role="menu"
            aria-label="Opções de tamanho de fonte"
          >
            {fontOptions.map((opt, i) => (
              <button
                key={opt.value}
                onClick={() => { setFontSize(opt.value); setShowFontMenu(false); }}
                role="menuitem"
                title={opt.title}
                aria-pressed={fontSize === opt.value}
                className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-left transition hover:bg-white/10 ${
                  fontSize === opt.value ? 'bg-white/10 text-white' : 'text-neutral-400'
                }`}
                style={{ fontSize: i === 0 ? '12px' : i === 1 ? '14px' : '16px' }}
              >
                <span>{opt.label}</span>
                <span className="text-xs text-neutral-500">{opt.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
