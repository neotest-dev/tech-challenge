import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Categories } from './components/sections/Categories';
import { CompetitionTimeline } from './components/sections/CompetitionTimeline';
import { Evaluation } from './components/sections/Evaluation';
import { Awards } from './components/sections/Awards';
import { Registration } from './components/sections/Registration';
import { FAQ } from './components/sections/FAQ';

function App() {
  return (
    <div
      style={{
        minHeight: '100svh',
        background: '#060B16',
        color: '#FFFFFF',
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <CompetitionTimeline />
        <Evaluation />
        <Awards />
        <Registration />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
