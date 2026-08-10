import Card from './ui/Card';

export default function InfoCard({ icon, label, value }) {
  return (
    <Card>
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
        {icon}
      </div>
      <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </Card>
  );
}
