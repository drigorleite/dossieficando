import { Heart, Brain, AlertTriangle, Users, Search, Shield } from 'lucide-react';
import Container from './ui/Container';

const pillars = [
  {
    icon: Users,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10 border-blue-400/20',
    title: 'Nós contra eles',
    text: 'Quanto mais dividida a sociedade, mais fácil é para o político convencer os 10% do meio. Dividida em 50/50, ele só precisa seduzir uma fatia pequena, mesmo que o que ele ofereça faça mal ao conjunto.',
  },
  {
    icon: Brain,
    color: 'text-violet-400',
    bg: 'bg-violet-400/10 border-violet-400/20',
    title: 'Pesquisa sem parcialidade',
    text: 'A pesquisa foi feita por IA paga, não por humano com opinião formada. O criador do site tem suas preferências políticas, e exatamente por isso não escreveu os dossiês. Direcionou o que pesquisar; a IA coletou.',
  },
  {
    icon: AlertTriangle,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10 border-amber-400/20',
    title: 'Todos têm defeitos',
    text: 'Alguns candidatos aparecem com polêmicas mais superficiais porque, de fato, os registros públicos sobre eles são mais superficiais. Outros têm problemas mais sérios. O tamanho do dossiê reflete os fatos encontrados, não um julgamento.',
  },
  {
    icon: Heart,
    color: 'text-rose-400',
    bg: 'bg-rose-400/10 border-rose-400/20',
    title: 'Pessoas que se tornaram animais políticos',
    text: 'Pessoas razoáveis se tornaram radicais. Isso é triste. Ver alguém que você admirava defender o indefensável por lealdade partidária é o sintoma mais claro de que a política virou time de futebol.',
  },
  {
    icon: Search,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10 border-emerald-400/20',
    title: 'Transparência sobre o processo',
    text: 'Não há segredo aqui. O site foi construído com IA, a pesquisa foi feita com IA, e isso está escrito porque ocultar seria desonesto. A ferramenta não tem viés; quem direciona a ferramenta tem. Por isso a direção foi: pesquise tudo, de todos.',
  },
  {
    icon: Shield,
    color: 'text-sky-400',
    bg: 'bg-sky-400/10 border-sky-400/20',
    title: 'Em construção permanente',
    text: 'Novos candidatos, novos escândalos, novas propostas. O site cresce conforme as eleições se aproximam. Se você encontrar algo errado ou incompleto, o canal de contato está aberto.',
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 border-t border-white/5">
      <Container>

        {/* Header da seção */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Por que isso existe
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            O propósito real
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Não é um site de notícias. Não é um site de campanha. É uma tentativa honesta de mostrar quem são essas pessoas antes que você vote nelas.
          </p>
        </div>

        {/* Manifesto em destaque */}
        <div className="mb-16 rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10">
              <span className="text-lg">✍️</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-1">Nota do criador</p>
              <p className="text-sm text-neutral-400">Rodrigo Ribeiro Leite</p>
            </div>
          </div>

          <div className="space-y-5 text-neutral-300 leading-relaxed">
            <p>
              Eu tenho minhas opiniões políticas. Tenho as pessoas que acho que deveriam ser eleitas. Mas não posso escrever um artigo de imparcialidade exatamente por isso.
            </p>
            <p>
              Então pedi pra IA fazer a pesquisa. Pesquisa paga, não IA gratuita. Eu só direcionei o que ela deveria buscar, porque olhando algumas coisas, eu corro o risco de ser parcial.
            </p>
            <p>
              O que me motivou foi ver a sociedade guerrear por políticos de um jeito que pessoas razoáveis se tornaram animais políticos. Pessoas que eu admirava. E quando eu olho pra política, eu enxergo que somos nós contra eles.
            </p>
            <p>
              Óbvio que tem alguns bons lá. Mas a gente sabe que é minoria. E a gente também sabe que quanto mais dividida a sociedade, melhor pra eles. Principalmente se estiver 50/50, porque aí eles só precisam convencer 10%. É mais fácil convencer 10% do que convencer um corpo inteiro a fazer X ao invés de Y, mesmo que esse X faça mal ao corpo.
            </p>
            <p className="text-white font-medium">
              Então esse site mostra os problemas, os escândalos, as propostas e as contradições de todos. Sem torcida. Sem lente ideológica. Aos poucos a gente vai adicionando mais informações.
            </p>
          </div>
        </div>

        {/* Pilares */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, color, bg, title, text }) => (
            <div
              key={title}
              className={`rounded-2xl border p-6 ${bg} transition hover:bg-white/5`}
            >
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10`}>
                <Icon size={18} className={color} />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-white">{title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Aviso final */}
        <div className="mt-12 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6 flex gap-4">
          <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-300 mb-1">Importante</p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Nenhuma informação aqui deve ser interpretada como endosso ou ataque a qualquer candidato. Os dossiês são baseados em fontes públicas verificáveis. Erros e omissões podem existir. Se você encontrar algo incorreto, entre em contato.
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
}
