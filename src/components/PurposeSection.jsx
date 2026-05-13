import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';

const principles = [
  {
    label: 'Sem narrativa partidária',
    text: 'Cobrimos candidatos de todos os espectros políticos com os mesmos critérios editoriais.',
  },
  {
    label: 'Distinção clara de status',
    text: 'Alegação, investigação, denúncia, condenação e anulação nunca são tratados como equivalentes.',
  },
  {
    label: 'Propostas com análise',
    text: 'Além do histórico judicial, mapeamos propostas com viabilidade política e fiscal quando disponíveis.',
  },
  {
    label: 'Fontes rastreáveis',
    text: 'Cada afirmação grave é acompanhada de referência ao veículo, tipo de fonte e data.',
  },
];

export default function PurposeSection() {
  return (
    <section id="proposito" className="border-t border-white/10 bg-neutral-950 py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionTitle
            eyebrow="Propósito"
            heading="Um arquivo público, não um palanque."
          />
          <div className="space-y-6">
            <div className="space-y-4 text-sm leading-7 text-neutral-300 sm:text-base">
              <p>
                O objetivo é organizar fatos públicos sobre figuras políticas de maneira acessível,
                verificável e separada por categorias — sem narrativa partidária, sem adjetivação
                desnecessária.
              </p>
              <p>
                Cada dossiê distingue claramente: alegações, investigações, denúncias, decisões
                judiciais, arquivamentos, absolvições, anulações, prescrições, respostas oficiais
                e fontes originais.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {principles.map(({ label, text }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="mt-1.5 text-xs leading-6 text-neutral-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
