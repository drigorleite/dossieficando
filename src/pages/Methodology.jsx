export default function Methodology() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold tracking-tight">
          Metodologia Editorial
        </h1>

        <div className="mt-10 space-y-8 text-neutral-300">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Objetivo do Projeto
            </h2>

            <p>
              O projeto Dossieficando busca organizar informações públicas sobre figuras
              políticas brasileiras em formato documental, contextualizado e acessível.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Fontes Utilizadas
            </h2>

            <p>
              As informações apresentadas podem incluir decisões judiciais, reportagens,
              documentos públicos, relatórios oficiais, entrevistas, investigações e
              declarações públicas verificáveis.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Níveis de Evidência
            </h2>

            <p>
              O projeto diferencia alegações, investigações, denúncias formais,
              condenações, anulações processuais e documentos confirmados.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Correções e Contestação
            </h2>

            <p>
              Caso alguma informação esteja incorreta, desatualizada ou fora de contexto,
              documentação complementar poderá ser enviada para revisão editorial.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
