import AnalyticsDashboard from './components/Analytics'
import FeatureCarousel from './components/Carousel'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Results from './components/Results'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <div className='font-popins'>
      <Header />
      <Hero />
      <AnalyticsDashboard/>
      <Results/>
      <Features/>
      <FeatureCarousel/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
