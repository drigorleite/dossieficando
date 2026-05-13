export default function Legal() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold tracking-tight">
          Aviso Legal
        </h1>

        <div className="mt-10 space-y-8 text-neutral-300 leading-8">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Natureza Editorial
            </h2>

            <p>
              O Dossieficando possui caráter documental, jornalístico e educacional.
              O objetivo do projeto é organizar informações públicas relevantes sobre
              figuras políticas, propostas eleitorais, investigações, decisões judiciais
              e debates institucionais.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Presunção de Inocência
            </h2>

            <p>
              Menções a investigações, denúncias, delações ou suspeitas não representam
              condenação definitiva, salvo quando explicitamente indicado.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Correções
            </h2>

            <p>
              O projeto poderá revisar, atualizar ou corrigir informações sempre que
              houver documentação complementar confiável.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
