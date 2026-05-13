import { ShieldCheck } from 'lucide-react';
import Card from './ui/Card';

const DEFAULT_NOTE =
  'Este dossiê separa fato de opinião, acusação de condenação, e decisão judicial de narrativa pública. Todas as informações possuem fonte rastreável.';

export default function EditorialNotice({ note }) {
  return (
    <Card>
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black">
        <ShieldCheck size={18} aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-white">Nota editorial</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-400">{note ?? DEFAULT_NOTE}</p>
    </Card>
  );
}
