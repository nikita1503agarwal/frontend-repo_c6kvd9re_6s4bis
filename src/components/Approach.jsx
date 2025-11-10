import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: "Discovery & Vision",
    points: [
      "Analisi contesto e obiettivi",
      "Insight su mercato e competitor",
      "Definizione KPI e metriche",
    ],
  },
  {
    title: "Strategy & Design",
    points: [
      "Proposta di valore e posizionamento",
      "Brand identity e UX wireframe",
      "Piano canali e contenuti",
    ],
  },
  {
    title: "Build & Automate",
    points: [
      "Website, CRM e integrazioni",
      "Funnel e automation marketing",
      "Setup analytics e dashboard",
    ],
  },
  {
    title: "Measure & Scale",
    points: [
      "Test A/B e ottimizzazione",
      "Crescita canali e partnership",
      "Allineamento periodico su KPI",
    ],
  },
];

export default function Approach() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Il nostro approccio</h2>
          <p className="mt-3 text-gray-700">
            Un percorso end-to-end: dalla visione alla messa a terra, con un metodo pratico e orientato ai risultati.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              <ul className="mt-4 space-y-2">
                {step.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
