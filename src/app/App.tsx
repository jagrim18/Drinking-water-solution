import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-cyan-50">
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
