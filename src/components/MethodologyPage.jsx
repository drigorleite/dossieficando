import { BookOpen, Scale, Search, RefreshCw, Shield, AlertTriangle, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import Container from './ui/Container';

const EVIDENCE_LEVELS = [
  { level: 'Confirmado', color: 'bg-emerald-500', text: 'text-emerald-400', desc: 'Fato verificado por múltiplas fontes primárias independentes (decisão judicial transitada em julgado, documento oficial, declaração pública gravada).' },
  { level: 'Alta evidência', color: 'bg-blue-500', text: 'text-blue-400', desc: 'Relatado por 3 ou mais veículos jornalísticos de referência com documentação de suporte (processos, relatórios de órgãos públicos).' },
  { level: 'Média evidência', color: 'bg-yellow-500', text: 'text-yellow-400', desc: 'Relatado por 1–2 veículos jornalísticos com alguma documentação. Pode haver contestação ou versões divergentes.' },
  { level: 'Baixa evidência', color: 'bg-orange-500', text: 'text-orange-400', desc: 'Baseado em fontes únicas, relatos não confirmados ou documentos sem verificação independente.' },
  { level: 'Alegação', color: 'bg-red-500', text: 'text-red-400', desc: 'Afirmação sem documentação verificável. Apresentada apenas quando há resposta pública do citado.' },
  { level: 'Inconclusivo', color: 'bg-neutral-500', text: 'text-neutral-400', desc: 'Informações insuficientes para classificar. Investigação em andamento ou dados contraditórios.' },
  { level: 'A pesquisar', color: 'bg-neutral-700', text: 'text-neutral-500', desc: 'Dado identificado mas ainda não verificado pela equipe editorial.' },
];

const TRUST_METRICS = [
  { metric: 'Promessas cumpridas', weight: '25%', desc: 'Proporção de promessas de campanha verificáveis que foram total ou parcialmente cumpridas durante o mandato.' },
  { metric: 'Investigações ativas', weight: '20%', desc: 'Número e gravidade de investigações em curso por órgãos oficiais (PF, MP, TCU, CGU). Investigações arquivadas ou absolvições são consideradas positivamente.' },
  { metric: 'Condenações', weight: '20%', desc: 'Condenações judiciais transitadas em julgado. Condenações anuladas por instâncias superiores são removidas do cálculo.' },
  { metric: 'Coerência de discurso', weight: '15%', desc: 'Consistência entre declarações públicas ao longo do tempo. Mudanças de posição documentadas reduzem a pontuação.' },
  { metric: 'Presença em votações', weight: '10%', desc: 'Para parlamentares: percentual de presença em votações nominais. Para executivos: participação em sessões legislativas relevantes.' },
  { metric: 'Transparência', weight: '10%', desc: 'Disponibilidade de declarações de bens, respostas a pedidos de LAI, publicação de agenda e gastos de gabinete.' },
];

const SOURCES_POLICY = [
  { icon: CheckCircle, color: 'text-emerald-400', title: 'Fontes primárias preferidas', desc: 'Decisões judiciais, diários oficiais, atas parlamentares, declarações de bens (TSE), relatórios do TCU, CGU e MPF.' },
  { icon: CheckCircle, color: 'text-blue-400', title: 'Jornalismo de referência', desc: 'Agência Brasil, Folha de S.Paulo, O Globo, UOL, G1, Estadão, Piauí, The Intercept Brasil, Agência Pública.' },
  { icon: AlertTriangle, color: 'text-amber-400', title: 'Fontes secundárias com cautela', desc: 'Veículos com histórico de parcialidade declarada são usados apenas quando corroborados por outras fontes.' },
  { icon: AlertTriangle, color: 'text-red-400', title: 'Não utilizamos', desc: 'Redes sociais sem verificação, sites anônimos, boatos não confirmados, material de campanha sem contraditório.' },
];

export default function MethodologyPage() {
  return (
    <section id="metodologia" className="border-t border-white/10 bg-neutral-950 py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-neutral-400">
              <BookOpen size={12} aria-hidden="true" />
              Transparência editorial
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white">Como este site funciona</h2>
            <p className="mt-3 text-base text-neutral-400 leading-relaxed">
              Documentação completa sobre como os dados são coletados, verificados, classificados
              e atualizados. Qualquer pessoa pode auditar nossa metodologia.
            </p>
          </div>

          {/* Section: Como coletamos */}
          <div className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Search size={15} className="text-blue-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">Como coletamos os dados</h3>
            </div>
            <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
              <p>
                A pesquisa é conduzida com auxílio de inteligência artificial (modelos de linguagem de grande escala)
                direcionada pelo criador do projeto. O uso de IA foi uma escolha deliberada para reduzir o viés
                humano na seleção e síntese de informações — o criador tem opiniões políticas e reconhece que
                não poderia escrever com imparcialidade sem esse intermediário.
              </p>
              <p>
                A IA é instruída a buscar informações em fontes primárias e jornalísticas verificáveis,
                apresentar sempre o contraditório (defesa do citado quando disponível), classificar
                cada informação por nível de evidência e indicar explicitamente quando algo é
                inconclusivo ou está em investigação.
              </p>
              <p>
                O resultado é revisado pelo criador antes de ser publicado. Erros são esperados e
                bem-vindos para correção via canal de feedback.
              </p>
            </div>
          </div>

          {/* Section: Níveis de evidência */}
          <div className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Scale size={15} className="text-amber-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">Níveis de evidência</h3>
            </div>
            <div className="space-y-3">
              {EVIDENCE_LEVELS.map(({ level, color, text, desc }) => (
                <div key={level} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${color}`} aria-hidden="true" />
                  <div>
                    <p className={`text-sm font-semibold ${text}`}>{level}</p>
                    <p className="mt-0.5 text-sm text-neutral-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Índice de confiabilidade */}
          <div className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Shield size={15} className="text-purple-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">Índice de Confiabilidade Política</h3>
            </div>
            <p className="mb-4 text-sm text-neutral-400 leading-relaxed">
              O índice é uma pontuação de 0 a 100 calculada com base em 6 métricas ponderadas.
              <strong className="text-white"> Não é um ranking de quem é melhor ou pior.</strong> É uma ferramenta
              para contextualizar o histórico de cada político. Scores baixos não significam culpa;
              scores altos não significam inocência.
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="px-4 py-3 text-left font-semibold text-neutral-300">Métrica</th>
                    <th className="px-4 py-3 text-right font-semibold text-neutral-300">Peso</th>
                  </tr>
                </thead>
                <tbody>
                  {TRUST_METRICS.map(({ metric, weight, desc }, i) => (
                    <tr key={metric} className={`border-b border-white/5 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                      <td className="px-4 py-3">
                        <p className="font-medium text-white">{metric}</p>
                        <p className="mt-0.5 text-xs text-neutral-500">{desc}</p>
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-neutral-300">{weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-neutral-600">
              Para candidatos com mandato parlamentar ativo, também exibimos a nota do{' '}
              <a href="https://ranking.org.br" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                ranking.org.br <ExternalLink size={10} className="inline" aria-hidden="true" />
              </a>{' '}
              como dado externo complementar. As duas pontuações medem aspectos diferentes e não devem ser somadas.
            </p>
          </div>

          {/* Section: Política de fontes */}
          <div className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <BookOpen size={15} className="text-emerald-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">Política de fontes</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {SOURCES_POLICY.map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Icon size={15} className={color} aria-hidden="true" />
                    <p className="text-sm font-semibold text-white">{title}</p>
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Atualização */}
          <div className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <RefreshCw size={15} className="text-neutral-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">Política de atualização</h3>
            </div>
            <div className="space-y-3 text-sm text-neutral-400 leading-relaxed">
              <p>
                Os dados são atualizados manualmente conforme novos fatos relevantes surgem.
                Cada dossiê exibe a data da última atualização. Não há garantia de atualização
                em tempo real.
              </p>
              <p>
                Quando uma investigação é arquivada, uma condenação é anulada ou um político
                muda de posição, o dossiê é atualizado para refletir o estado atual, mantendo
                o histórico anterior com a data correspondente.
              </p>
              <p>
                Candidatos são adicionados conforme as candidaturas se formalizam. A ausência
                de um político não implica julgamento sobre ele.
              </p>
            </div>
          </div>

          {/* Section: Aviso legal */}
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-400" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-amber-300">Aviso legal</h3>
            </div>
            <p className="text-sm text-amber-200/70 leading-relaxed">
              Este site tem caráter informativo e jornalístico. Nenhuma informação aqui publicada
              constitui acusação formal, sentença judicial ou endosso político. Casos classificados
              como "investigação em andamento" não implicam culpa. Toda pessoa citada tem direito
              ao contraditório, que é apresentado sempre que disponível. Para contestar uma
              informação, use o canal de feedback.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
