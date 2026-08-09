import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';

export default function PurposeSection() {
  return (
    <section id="proposito" className="border-t border-neutral-200 bg-neutral-50 py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionTitle
            eyebrow="Propósito"
            heading="Um arquivo público, não um palanque."
          />
          <div className="space-y-5 text-sm leading-7 text-neutral-700 sm:text-base">
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
        </div>
      </Container>
    </section>
  );
}
