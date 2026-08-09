import Container from './ui/Container';

export default function Footer() {
  return (
    <footer className="border-t border-blue-900 bg-blue-950 py-8 text-white">
      <Container>
        <div className="flex flex-col gap-3 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dossiê Público. Por Rodrigo Ribeiro Leite.</p>
          <p>Fatos públicos. Fontes verificáveis. Linguagem objetiva.</p>
        </div>
      </Container>
    </footer>
  );
}
