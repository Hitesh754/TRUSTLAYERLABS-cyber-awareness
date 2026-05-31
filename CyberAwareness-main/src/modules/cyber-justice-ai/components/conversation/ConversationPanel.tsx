import { FormEvent, useState } from 'react';
import { Bot, CheckCircle2, MessageSquare, XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCyberJusticeStore } from '../../store/cyberJusticeStore';
import type { CyberJusticePendingQuestion } from '../../types/conversation.types';



export function ConversationPanel() {
  const { t } = useTranslation();
  const { conversation, sendConversationMessage, applyPendingCasePatch, rejectPendingCasePatch } = useCyberJusticeStore();
  const [draft, setDraft] = useState('');
  const latestQuestion = conversation.pendingQuestions.filter((question) => !question.answered).slice(-1)[0] as CyberJusticePendingQuestion | undefined;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!draft.trim()) return;
    sendConversationMessage(draft);
    setDraft('');
  };

  return (
    <section className="rounded-xl border border-cyan-500/10 bg-slate-950/80 p-5">
      <div className="mb-4 flex items-center gap-2 text-cyan-200">
        <Bot className="h-5 w-5" />
        <h2 className="font-semibold">{t('cyberJustice.ui.conversation.title')}</h2>
      </div>

      <div className="max-h-72 space-y-3 overflow-y-auto pr-1">
        {conversation.messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[88%] rounded-xl border px-4 py-3 text-sm leading-6 ${
                message.role === 'user'
                  ? 'border-cyan-300/20 bg-cyan-400 text-slate-950'
                  : 'border-slate-700 bg-slate-900 text-slate-100'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {latestQuestion && (
        <div className="mt-4 rounded-lg border border-amber-400/20 bg-amber-400/10 p-3 text-sm text-amber-100">
          <p className="font-semibold">{t('cyberJustice.ui.conversation.nextBestQuestion')}</p>
          <p className="mt-1">{latestQuestion.prompt}</p>
          {latestQuestion.quickReplies?.length ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {(latestQuestion.quickReplies ?? []).map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => sendConversationMessage(reply)}
                  className="rounded-full border border-amber-300/30 px-3 py-1 text-xs text-amber-100"
                >
                  {reply}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      )}

      {conversation.pendingCasePatch && (
        <div className="mt-4 rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-3">
          <p className="text-sm font-semibold text-emerald-100">{t('cyberJustice.ui.conversation.proposedUpdates')}</p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={applyPendingCasePatch}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-950"
            >
              <CheckCircle2 className="h-4 w-4" />
              {t('cyberJustice.ui.conversation.apply')}
            </button>
            <button
              type="button"
              onClick={rejectPendingCasePatch}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-300"
            >
              <XCircle className="h-4 w-4" />
              {t('cyberJustice.ui.conversation.reject')}
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-4">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {t('cyberJustice.ui.conversation.naturalUpdateLabel')}
        </label>
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          rows={4}
          placeholder={t('cyberJustice.ui.conversation.placeholder') || "Add details naturally: I lost INR 25000, UTR was..., the suspect used WhatsApp..."}
          className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm leading-6 text-white outline-none placeholder:text-slate-600 focus:border-cyan-400"
        />
        <button
          type="submit"
          disabled={!draft.trim()}
          className="mt-3 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
        >
          <MessageSquare className="h-4 w-4" />
          {t('cyberJustice.ui.conversation.send')}
        </button>
      </form>
    </section>
  );
}
