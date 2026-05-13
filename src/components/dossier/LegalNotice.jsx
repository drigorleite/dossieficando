export default function LegalNotice() {
  return (
    <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-5 text-sm leading-7 text-amber-100">
      <h3 className="mb-3 text-base font-semibold text-white">
        Aviso Editorial e Jurídico
      </h3>

      <p>
        Este projeto possui finalidade exclusivamente jornalística, documental e educacional.
        As informações reunidas são baseadas em reportagens públicas, documentos oficiais,
        decisões judiciais e declarações verificáveis.
      </p>

      <p className="mt-4">
        A presença de um nome neste dossiê não implica culpa definitiva, salvo quando houver
        condenação transitada em julgado explicitamente indicada.
      </p>

      <p className="mt-4">
        Alegações, investigações, denúncias, delações e opiniões públicas são identificadas
        separadamente por níveis de evidência.
      </p>
    </div>
  );
}
