import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';
import Reveal from './ui/Reveal';
import { EVIDENCE_LEVELS } from '../constants/evidenceLevels';

const methodItems = [
  {
    title: 'Fonte primeiro',
    text: 'Nenhuma afirmação grave entra sem fonte rastreável. Cada item do dossiê indica o veículo, tipo de fonte e data de publicação.',
  },
  {
    title: 'Status jurídico',
    text: 'Acusação, condenação, absolvição, anulação e arquivamento ficam sempre separados. Nunca tratamos investigação como condenação.',
  },
  {
    title: 'Linguagem objetiva',
    text: 'Sem adjetivação desnecessária, sem narrativa partidária, sem conclusão sem prova. Descrevemos o que aconteceu, não o que significa.',
  },
  {
    title: 'Propostas com contexto',
    text: 'Quando disponíveis, mapeamos as propostas dos candidatos com análise de viabilidade política e fiscal, indicando o nível de detalhamento apresentado.',
  },
];

export default function MethodSection() {
  const evidenceEntries = Object.entries(EVIDENCE_LEVELS);

  return (
    <section id="metodo" className="border-t border-white/10 pb-16 pt-12" style={{ background: '#0a0a0c' }}>
      <Container>
        <SectionTitle eyebrow="Método" heading="Como organizamos os dados." className="mb-10" />

        <Reveal className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {methodItems.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-400">{item.text}</p>
            </Card>
          ))}
        </Reveal>

        {/* Evidence levels legend */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Níveis de evidência utilizados
          </h3>
          <div className="flex flex-wrap gap-3">
            {evidenceEntries.map(([key, { label, color }]) => (
              <span
                key={key}
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${color}`}
              >
                {label}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs leading-6 text-neutral-500">
            Cada item do dossiê é classificado com um desses níveis para que o leitor saiba exatamente
            em que estágio jurídico ou probatório a informação se encontra.
          </p>
        </div>
      </Container>
    </section>
  );
}
