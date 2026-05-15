import { useState } from 'react';
import { MessageSquare, Send, CheckCircle, AlertCircle, FileText, Link2, User } from 'lucide-react';
import Container from './ui/Container';

const FEEDBACK_TYPES = [
  { value: 'correction', label: 'Correção de dado', icon: AlertCircle, color: 'text-amber-400' },
  { value: 'source', label: 'Indicar nova fonte', icon: Link2, color: 'text-blue-400' },
  { value: 'candidate', label: 'Sugerir candidato', icon: User, color: 'text-purple-400' },
  { value: 'other', label: 'Outro', icon: MessageSquare, color: 'text-neutral-400' },
];

export default function FeedbackSection() {
  const [type, setType] = useState('correction');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setLoading(true);

    // Build mailto link as fallback (no backend needed)
    const subject = encodeURIComponent(`[Dossieficando] ${FEEDBACK_TYPES.find(t => t.value === type)?.label}`);
    const body = encodeURIComponent(
      `Tipo: ${FEEDBACK_TYPES.find(t => t.value === type)?.label}\n` +
      (name ? `Nome: ${name}\n` : '') +
      (url ? `Fonte/URL: ${url}\n` : '') +
      `\nMensagem:\n${message}`
    );

    // Open mailto — works without backend
    window.open(`mailto:contato@dossieficando.com.br?subject=${subject}&body=${body}`, '_blank');

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setMessage('');
      setName('');
      setUrl('');
    }, 500);
  };

  return (
    <section id="feedback" className="border-t border-white/10 bg-neutral-950 py-16">
      <Container>
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-neutral-400">
              <MessageSquare size={12} aria-hidden="true" />
              Colaboração cidadã
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white">Encontrou algo errado?</h2>
            <p className="mt-3 text-base text-neutral-400 leading-relaxed">
              Este projeto é construído com pesquisa pública e pode conter imprecisões. Se você encontrou
              um erro, tem uma fonte melhor ou quer sugerir um candidato, use este canal.
              Todas as contribuições são analisadas antes de qualquer alteração.
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
              <CheckCircle size={40} className="text-emerald-400" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-white">Obrigado pela contribuição!</h3>
              <p className="text-sm text-neutral-400">
                Seu cliente de e-mail foi aberto com a mensagem pré-preenchida. Envie o e-mail para
                completar o envio. Analisaremos assim que possível.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/10"
              >
                Enviar outro feedback
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Type selector */}
              <fieldset>
                <legend className="mb-2 text-sm font-medium text-neutral-300">Tipo de contribuição</legend>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {FEEDBACK_TYPES.map(({ value, label, icon: Icon, color }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setType(value)}
                      aria-pressed={type === value}
                      className={`flex flex-col items-center gap-1.5 rounded-xl border p-3 text-xs font-medium transition ${
                        type === value
                          ? 'border-white/20 bg-white/10 text-white'
                          : 'border-white/10 bg-white/5 text-neutral-500 hover:bg-white/8 hover:text-neutral-300'
                      }`}
                    >
                      <Icon size={16} className={type === value ? color : ''} aria-hidden="true" />
                      {label}
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Name (optional) */}
              <div>
                <label htmlFor="feedback-name" className="mb-1.5 block text-sm font-medium text-neutral-300">
                  Seu nome <span className="text-neutral-600">(opcional)</span>
                </label>
                <input
                  id="feedback-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como prefere ser chamado"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-neutral-600 transition focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                />
              </div>

              {/* Source URL (optional) */}
              {(type === 'correction' || type === 'source') && (
                <div>
                  <label htmlFor="feedback-url" className="mb-1.5 block text-sm font-medium text-neutral-300">
                    Link da fonte <span className="text-neutral-600">(opcional, mas ajuda muito)</span>
                  </label>
                  <input
                    id="feedback-url"
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-neutral-600 transition focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                  />
                </div>
              )}

              {/* Message */}
              <div>
                <label htmlFor="feedback-message" className="mb-1.5 block text-sm font-medium text-neutral-300">
                  Mensagem <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="feedback-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder={
                    type === 'correction'
                      ? 'Descreva o que está incorreto e como deveria ser...'
                      : type === 'source'
                      ? 'Qual fonte você indica e por que é relevante?'
                      : type === 'candidate'
                      ? 'Qual candidato e por que deveria ser incluído?'
                      : 'Sua mensagem...'
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-600 transition focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 resize-none"
                />
              </div>

              {/* Notice */}
              <div className="flex items-start gap-2 rounded-xl border border-amber-500/20 bg-amber-500/5 p-3">
                <FileText size={14} className="mt-0.5 shrink-0 text-amber-400" aria-hidden="true" />
                <p className="text-xs text-amber-200/70 leading-relaxed">
                  Ao enviar, seu cliente de e-mail será aberto com a mensagem pré-preenchida.
                  Nenhum dado é enviado automaticamente. Toda contribuição é revisada antes de
                  qualquer alteração no site.
                </p>
              </div>

              <button
                type="submit"
                disabled={!message.trim() || loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-blue-400"
              >
                {loading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" aria-hidden="true" />
                ) : (
                  <Send size={14} aria-hidden="true" />
                )}
                {loading ? 'Preparando...' : 'Enviar contribuição'}
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
