import Container from './ui/Container';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white">
      <Container>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Dossiê Público</p>
            <p className="mt-2 text-sm font-medium text-white">Sem lente ideológica</p>
            <p className="mt-2 text-xs leading-6 text-neutral-500">
              Fatos públicos. Fontes verificáveis. Linguagem objetiva.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Navegação</p>
            <nav className="mt-3 flex flex-col gap-2">
              <a href="#candidatos" className="text-sm text-neutral-400 transition hover:text-white">
                Candidatos
              </a>
              <a href="#propostas" className="text-sm text-neutral-400 transition hover:text-white">
                Propostas
              </a>
              <a href="#proposito" className="text-sm text-neutral-400 transition hover:text-white">
                Propósito
              </a>
              <a href="#metodo" className="text-sm text-neutral-400 transition hover:text-white">
                Método
              </a>
            </nav>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Sobre</p>
            <p className="mt-3 text-xs leading-6 text-neutral-500">
              Este projeto é de natureza jornalística, documental e educativa.
              A inclusão de um nome neste dossiê não implica culpa definitiva,
              salvo quando explicitamente indicado.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-neutral-600">
          <p>© 2026 Dossiê Público. Por Rodrigo Ribeiro Leite.</p>
        </div>
      </Container>
    </footer>
  );
}
