import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">
            Oltrepo' Digital Valley
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#servizi" className="hover:text-gray-600">Servizi</a>
            <a href="#approccio" className="hover:text-gray-600">Approccio</a>
            <a href="#contatti" className="rounded-lg bg-black text-white px-4 py-2 hover:opacity-90">Contatti</a>
          </nav>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Approach */}
      <div id="approccio">
        <Approach />
      </div>

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-black/5 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Oltrepo' Digital Valley. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4">
            <a href="#servizi" className="hover:text-gray-800">Servizi</a>
            <a href="#approccio" className="hover:text-gray-800">Approccio</a>
            <a href="#contatti" className="hover:text-gray-800">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
