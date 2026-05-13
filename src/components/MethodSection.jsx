import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';

const items = [
  {
    title: 'Fonte primeiro',
    text: 'Nenhuma afirmação grave entra sem fonte rastreável.',
  },
  {
    title: 'Status jurídico',
    text: 'Acusação, condenação, absolvição, anulação e arquivamento ficam sempre separados.',
  },
  {
    title: 'Linguagem objetiva',
    text: 'Sem adjetivação desnecessária, sem narrativa partidária, sem conclusão sem prova.',
  },
];

export default function MethodSection() {
  return (
    <section id="metodo" className="bg-neutral-950 pb-16 pt-12">
      <Container>
        <SectionTitle eyebrow="Método" heading="Como organizamos os dados." className="mb-10" />
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-400">{item.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
