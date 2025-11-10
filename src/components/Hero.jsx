import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 shadow-sm border border-black/5 mb-4">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm text-gray-700">Oltrepo' Digital Valley</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Costruiamo brand forti e imprese resilienti nell'Oltrepò
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-700">
              Aiutiamo le aziende a sviluppare una mentalità imprenditoriale solida e a guidare la digital transformation: non solo siti e social, ma identità di marca e strategie su misura per crescere in un mercato che cambia.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contatti" className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-5 py-3 font-semibold shadow hover:opacity-90 transition">
                <Rocket className="h-5 w-5" />
                Parla con noi
              </a>
              <a href="#servizi" className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-5 py-3 font-semibold shadow border border-black/10 hover:bg-gray-50 transition">
                Scopri i servizi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
