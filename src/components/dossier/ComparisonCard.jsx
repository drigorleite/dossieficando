export default function ComparisonCard({ title, comparisons = [] }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-neutral-900/80 p-6">
      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <div className="mt-6 space-y-4">
        {comparisons.map((item, index) => (
          <div
            key={`${item.candidate}-${index}`}
            className="rounded-2xl border border-white/10 p-5"
          >
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-lg font-semibold text-white">
                {item.candidate}
              </h3>

              <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs font-semibold text-neutral-300">
                {item.detailLevel}
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-neutral-300">
              {item.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
