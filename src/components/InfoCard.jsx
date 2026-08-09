import Card from './ui/Card';

export default function InfoCard({ icon, label, value }) {
  return (
    <Card>
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
        {icon}
      </div>
      <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">{label}</p>
      <p className="mt-2 text-lg font-semibold text-neutral-950">{value}</p>
    </Card>
  );
}
