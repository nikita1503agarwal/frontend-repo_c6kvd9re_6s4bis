import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // For now we just simulate a submit
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="contatti" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Parliamo del tuo progetto</h2>
          <p className="mt-3 text-gray-700">Scrivici due righe: ti ricontattiamo per capire bisogni, priorità e prossimi passi.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nome e cognome</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Mario Rossi"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="mario@azienda.it"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Messaggio</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Raccontaci obiettivi e sfide..."
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-black focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-black px-5 py-3 font-semibold text-white shadow hover:opacity-90 disabled:opacity-60"
              >
                <Send className="h-5 w-5" />
                {status === 'loading' ? 'Invio...' : 'Invia richiesta'}
              </button>
              {status === 'success' && (
                <p className="text-green-700">Grazie! Ti ricontatteremo a breve.</p>
              )}
              {status === 'error' && (
                <p className="text-red-600">Qualcosa è andato storto. Riprova.</p>
              )}
            </div>
          </form>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Perché Oltrepo' Digital Valley</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Approccio strategico, non solo operativo</li>
              <li>• Progetti su misura e misurabili</li>
              <li>• Focus su brand, prodotto e crescita</li>
              <li>• Partner, non fornitore</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
