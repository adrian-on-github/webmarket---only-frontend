import FeatureSection from './components/FeatureSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Roadmap from './components/Roadmap'
import AccordianSection from './components/AccordianSection'

const App = () => {
  return (
<>
<Navbar />
<div className="max-w-7xl mx-auto pt-20 px-6">
  <HeroSection />
  <Testimonials />
  <AccordianSection />
  <FeatureSection />
  <Roadmap />
  <Pricing />
  <Footer />
</div>
</>
  )
}

export default App
