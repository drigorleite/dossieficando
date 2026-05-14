import { useState } from 'react';
import { Info } from 'lucide-react';

const AXES = [
  {
    key: 'economy',
    leftLabel: 'Estatismo',
    rightLabel: 'Livre mercado',
    description: 'Posição sobre o papel do Estado na economia: intervenção vs. liberalismo econômico.',
  },
  {
    key: 'customs',
    leftLabel: 'Progressista',
    rightLabel: 'Conservador',
    description: 'Posição sobre costumes, família, identidade e valores sociais.',
  },
  {
    key: 'state',
    leftLabel: 'Descentralização',
    rightLabel: 'Centralização',
    description: 'Posição sobre o poder federal vs. autonomia de estados e municípios.',
  },
  {
    key: 'security',
    leftLabel: 'Garantismo',
    rightLabel: 'Punitivismo',
    description: 'Posição sobre segurança pública: direitos do réu vs. endurecimento penal.',
  },
  {
    key: 'privatization',
    leftLabel: 'Estatização',
    rightLabel: 'Privatização',
    description: 'Posição sobre empresas estatais e serviços públicos.',
  },
  {
    key: 'taxes',
    leftLabel: 'Mais impostos',
    rightLabel: 'Menos impostos',
    description: 'Posição sobre carga tributária e redistribuição de renda.',
  },
];

function AxisSlider({ axis, value, confidence }) {
  const [showInfo, setShowInfo] = useState(false);
  // value: 0 = extrema esquerda, 100 = extrema direita
  const pct = Math.max(0, Math.min(100, value));

  const getColor = () => {
    if (confidence === 'baixa') return 'bg-neutral-500';
    if (pct < 30) return 'bg-blue-500';
    if (pct < 45) return 'bg-sky-400';
    if (pct > 70) return 'bg-red-500';
    if (pct > 55) return 'bg-orange-400';
    return 'bg-neutral-400';
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-neutral-300">{axis.leftLabel}</span>
          <span className="text-neutral-600">↔</span>
          <span className="text-xs font-medium text-neutral-300">{axis.rightLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          {confidence === 'baixa' && (
            <span className="text-[10px] text-neutral-600 italic">estimado</span>
          )}
          <button
            onClick={() => setShowInfo(v => !v)}
            className="text-neutral-700 hover:text-neutral-400 transition"
          >
            <Info size={11} />
          </button>
        </div>
      </div>

      {/* Track */}
      <div className="relative h-2 rounded-full bg-white/10">
        {/* Center marker */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/20" />
        {/* Thumb */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-neutral-900 shadow-lg transition-all ${getColor()}`}
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>

      {/* Labels */}
      <div className="flex justify-between">
        <span className="text-[9px] text-neutral-700">Extremo</span>
        <span className="text-[9px] text-neutral-700">Centro</span>
        <span className="text-[9px] text-neutral-700">Extremo</span>
      </div>

      {showInfo && (
        <div className="rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2">
          <p className="text-[10px] text-neutral-500 leading-relaxed">{axis.description}</p>
        </div>
      )}
    </div>
  );
}

export default function IdeologyProfile({ ideologyProfile }) {
  if (!ideologyProfile) return null;

  const { axes, summary, methodology } = ideologyProfile;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-1">
          Perfil Ideológico
        </h3>
        <p className="text-sm text-neutral-400">
          Posicionamento em 6 eixos baseado em votações, declarações e histórico documentado.
          Sem rótulos partidários.
        </p>
      </div>

      {summary && (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
          <p className="text-sm text-neutral-300 leading-relaxed">{summary}</p>
        </div>
      )}

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 space-y-6">
        {AXES.map(axis => {
          const data = axes?.[axis.key];
          if (!data) return null;
          return (
            <AxisSlider
              key={axis.key}
              axis={axis}
              value={data.value}
              confidence={data.confidence}
            />
          );
        })}
      </div>

      <div className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
        <p className="text-[10px] text-neutral-600 leading-relaxed">
          ⚠️ O perfil ideológico é uma representação simplificada baseada em dados públicos verificáveis.
          Posicionamentos marcados como "estimado" têm menor base documental.
          Eixos com valor central (50) indicam posição ambígua ou ausência de dados suficientes.
          {methodology && ` ${methodology}`}
        </p>
      </div>
    </div>
  );
}
