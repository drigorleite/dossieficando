import React, { useState } from "react";
import { MapPin, ChevronDown, ChevronUp, Info } from "lucide-react";
import GovernorCard from "./GovernorCard";
import GovernorExpanded from "./GovernorExpanded";
import { spGovernorCandidates } from "../../data/governors/sp";

// Future states can be added here
const STATES = [
  { id: "sp", label: "São Paulo", flag: "🏙️", candidates: spGovernorCandidates },
];

export default function GovernorSection() {
  const [selectedState, setSelectedState] = useState("sp");
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const currentState = STATES.find((s) => s.id === selectedState);
  const candidates = currentState?.candidates || [];

  return (
    <section id="governadores" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">
            <MapPin size={12} />
            GOVERNADORES
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white">
                Candidatos ao governo estadual
              </h2>
              <p className="text-zinc-400 mt-2 max-w-xl">
                Histórico administrativo, políticas implementadas, resultados e polêmicas dos pré-candidatos ao governo de cada estado.
              </p>
            </div>

            {/* State selector */}
            <div className="flex items-center gap-2">
              {STATES.map((state) => (
                <button
                  key={state.id}
                  onClick={() => setSelectedState(state.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${
                    selectedState === state.id
                      ? "bg-blue-500/20 border-blue-500/40 text-blue-300"
                      : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
                  }`}
                >
                  <span>{state.flag}</span>
                  {state.label}
                </button>
              ))}
              {/* Coming soon indicator */}
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-600">
                <span>+ outros estados em breve</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial note */}
        <div className="mb-6">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-400 transition-colors"
          >
            <Info size={12} />
            Critério editorial
            {showInfo ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
          {showInfo && (
            <div className="mt-2 p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 leading-relaxed max-w-2xl">
              <p>
                Para cada candidato, separamos: <strong className="text-zinc-300">fato</strong> (o que foi feito), <strong className="text-zinc-300">crítica</strong> (o que opositores e especialistas apontam), <strong className="text-zinc-300">defesa</strong> (o que o candidato ou governo responde) e <strong className="text-zinc-300">resultado</strong> classificado como positivo, negativo, misto ou inconclusivo. Candidatos sem histórico executivo recebem classificação "inconclusivo" ou "a pesquisar".
              </p>
            </div>
          )}
        </div>

        {/* Comparative summary table */}
        <div className="mb-8 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Candidato</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden md:table-cell">Partido</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden lg:table-cell">Força principal</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider hidden lg:table-cell">Fraqueza principal</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Resultado adm.</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Tarcísio de Freitas", party: "Republicanos", strength: "Máquina estadual, segurança", weakness: "Letalidade policial, Sabesp", result: "Misto", resultColor: "text-amber-400" },
                { name: "Fernando Haddad", party: "PT", strength: "Experiência, PT, Lula", weakness: "Rejeição em SP, impostos", result: "Misto", resultColor: "text-amber-400" },
                { name: "Kim Kataguiri", party: "Missão", strength: "Comunicação digital, renovação", weakness: "Baixa estrutura, sem experiência exec.", result: "Inconclusivo", resultColor: "text-zinc-400" },
                { name: "Paulo Serra", party: "PSDB", strength: "Experiência municipal, moderação", weakness: "Baixa visibilidade, PSDB fraco", result: "A pesquisar", resultColor: "text-blue-400" },
                { name: "André do Prado", party: "PL", strength: "Estrutura PL", weakness: "Baixo conhecimento público", result: "A pesquisar", resultColor: "text-blue-400" },
                { name: "Erika Hilton", party: "PSOL", strength: "Comunicação e base progressista", weakness: "Alta rejeição conservadora", result: "Inconclusivo", resultColor: "text-zinc-400" },
              ].map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-zinc-800/50 hover:bg-zinc-900/50 transition-colors cursor-pointer"
                  onClick={() => {
                    const c = candidates.find((c) => c.name === row.name);
                    if (c) setSelectedCandidate(c);
                  }}
                >
                  <td className="py-3 px-4 font-medium text-zinc-200">{row.name}</td>
                  <td className="py-3 px-4 text-zinc-400 hidden md:table-cell">{row.party}</td>
                  <td className="py-3 px-4 text-zinc-400 hidden lg:table-cell text-xs">{row.strength}</td>
                  <td className="py-3 px-4 text-zinc-400 hidden lg:table-cell text-xs">{row.weakness}</td>
                  <td className={`py-3 px-4 font-medium text-xs ${row.resultColor}`}>{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {candidates.map((candidate) => (
            <GovernorCard
              key={candidate.id}
              candidate={candidate}
              onClick={setSelectedCandidate}
            />
          ))}
        </div>

        {/* Coming soon */}
        <div className="mt-8 p-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30 text-center">
          <p className="text-zinc-500 text-sm">
            Outros estados em breve — RJ, MG, RS, BA, PE e mais.
          </p>
          <p className="text-zinc-600 text-xs mt-1">
            Contribuições e correções são bem-vindas via GitHub.
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedCandidate && (
        <GovernorExpanded
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
        />
      )}
    </section>
  );
}
