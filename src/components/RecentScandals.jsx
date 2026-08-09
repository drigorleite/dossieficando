import { AlertTriangle, ArrowUpRight } from 'lucide-react';
import { recentScandals } from '../data/scandals';
import Container from './ui/Container';
import Badge from './ui/Badge';
import Card from './ui/Card';
import SectionTitle from './ui/SectionTitle';

export default function RecentScandals() {
  return (
    <section id="escandalos-recentes" className="border-t border-neutral-200 bg-white py-16">
      <Container>
        <SectionTitle
          eyebrow="Atualização até 9 de agosto de 2026"
          heading="Escândalos recentes, com o alcance de cada evidência"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {recentScandals.map((scandal) => (
            <Card key={scandal.id} className="flex h-full flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={scandal.status}>{scandal.status}</Badge>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {scandal.period}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-neutral-950">{scandal.title}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-700">{scandal.summary}</p>

              <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <div className="flex gap-3">
                  <AlertTriangle className="mt-0.5 shrink-0 text-amber-700" size={17} />
                  <p className="text-xs leading-6 text-neutral-700">{scandal.caution}</p>
                </div>
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Dossiês relacionados: {scandal.candidates.join(' · ')}
              </p>
              <div className="mt-5 space-y-2 border-t border-neutral-200 pt-4">
                {scandal.sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center justify-between gap-3 rounded-xl px-2 text-sm font-medium text-blue-800 transition hover:bg-blue-50 hover:text-blue-950"
                  >
                    <span>{source.label}</span>
                    <ArrowUpRight size={15} className="shrink-0" />
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
