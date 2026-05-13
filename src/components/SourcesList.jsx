import SourceCard from './SourceCard';

export default function SourcesList({ sources }) {
  if (!sources?.length) return null;

  return (
    <div className="grid gap-3">
      {sources.map((source, index) => (
        <SourceCard key={index} source={source} />
      ))}
    </div>
  );
}
