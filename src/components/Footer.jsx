import Container from './ui/Container';

export default function Footer() {
  return (
    <footer className="py-12 text-white" style={{ background: '#080809', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <Container>
        <div className="grid gap-10 sm:grid-cols-3">

          {/* Identidade */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Dossiê Público</p>
            <p className="mt-2 text-sm font-semibold text-white">Sem lente ideológica</p>
            <p className="mt-2 text-xs leading-6 text-neutral-500">
              Fatos públicos. Fontes verificáveis. Linguagem objetiva. Todos têm defeitos.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] text-neutral-600 uppercase tracking-widest">sem torcida</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
          </div>

          {/* Navegação */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Navegação</p>
            <nav className="mt-3 flex flex-col gap-2">
              <a href="#candidatos" className="text-sm text-neutral-400 transition hover:text-white">
                Presidenciais
              </a>
              <a href="#governadores" className="text-sm text-neutral-400 transition hover:text-white">
                Governadores
              </a>
              <a href="#propostas" className="text-sm text-neutral-400 transition hover:text-white">
                Propostas
              </a>
              <a href="#sobre" className="text-sm text-neutral-400 transition hover:text-white">
                Sobre o projeto
              </a>
              <a href="#metodo" className="text-sm text-neutral-400 transition hover:text-white">
                Metodologia
              </a>
              <a href="#metodologia" className="text-sm text-neutral-400 transition hover:text-white">
                Metodologia completa
              </a>
              <a href="#feedback" className="text-sm text-neutral-400 transition hover:text-white">
                Enviar correção
              </a>
            </nav>
          </div>

          {/* Sobre e aviso legal */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Aviso legal</p>
            <p className="mt-3 text-xs leading-6 text-neutral-500">
              Este projeto é de natureza jornalística, documental e educativa.
              A inclusão de um nome neste dossiê não implica culpa definitiva,
              salvo quando explicitamente indicado. Erros e omissões podem existir.
            </p>
            <p className="mt-3 text-xs leading-6 text-neutral-500">
              A pesquisa foi realizada com auxílio de inteligência artificial. O criador do projeto
              direcionou as perguntas; a IA coletou as informações de fontes públicas verificáveis.
            </p>
          </div>

        </div>

        {/* Rodapé com atribuição */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-neutral-600">
            © 2026 Dossiê Público. Conteúdo de uso público e educativo.
          </p>
          <a
            href="https://linkedin.com/in/drigorleite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-500 transition hover:text-neutral-300"
          >
            Desenvolvido por Rodrigo Ribeiro Leite
          </a>
        </div>
      </Container>
    </footer>
  );
}
