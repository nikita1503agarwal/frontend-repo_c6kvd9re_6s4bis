import { Brain, ChartBar, Palette, Globe, Workflow } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "Business Mindset & Advisory",
    description:
      "Mentorship e workshop per sviluppare una mentalità imprenditoriale forte: definizione obiettivi, metriche e roadmap di crescita.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Naming, posizionamento, identità visiva e tono di voce per costruire un brand riconoscibile e rilevante.",
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    description:
      "Processi, strumenti e automazioni per portare l'azienda nel digitale: CRM, marketing stack e data literacy.",
  },
  {
    icon: ChartBar,
    title: "Growth & Go-To-Market",
    description:
      "Strategie su misura per validare e scalare: analisi mercato, proposta di valore, pricing e canali di acquisizione.",
  },
  {
    icon: Workflow,
    title: "UX, Siti Web & Funnel",
    description:
      "Prototipi, siti web moderni e percorsi utente ottimizzati per convertire e raccontare il tuo valore.",
  },
];

export default function Services() {
  return (
    <section id="servizi" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cosa facciamo</h2>
          <p className="mt-3 text-gray-700">
            Supportiamo l'impresa con un mix di strategia, design e tecnologia. Uniamo visione e operatività per risultati concreti.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 p-3 text-white shadow-md">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{s.description}</p>
                </div>
              </div>
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-200/40 blur-2xl transition-opacity group-hover:opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
