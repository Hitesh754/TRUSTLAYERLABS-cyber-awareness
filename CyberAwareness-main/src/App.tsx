import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThreatBanner from './components/ThreatBanner';
import CoreModules from './components/CoreModules';
import DashboardPreview from './components/DashboardPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <ThreatBanner />
      <CoreModules />
      <DashboardPreview />
      <Footer />
    </div>
  );
}

export default App;
