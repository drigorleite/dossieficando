import { ShieldCheck } from 'lucide-react';
import Card from './ui/Card';

const DEFAULT_NOTE =
  'Este dossiê separa acusação, investigação, denúncia, condenação, absolvição, arquivamento, anulação e prescrição. Uma acusação absolvida no mérito não é reapresentada como fato; uma anulação processual também não é chamada de absolvição.';

export default function EditorialNotice({ note }) {
  return (
    <Card>
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
        <ShieldCheck size={18} aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-white">Nota editorial</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-400">{note ?? DEFAULT_NOTE}</p>
    </Card>
  );
}
