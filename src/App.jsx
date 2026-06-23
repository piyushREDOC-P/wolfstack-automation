import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PricingPage from './pages/Pricing.jsx'
import StarterPlanPage from './pages/pricing/StarterPlan.jsx'
import GrowthPlanPage from './pages/pricing/GrowthPlan.jsx'
import BusinessProPlanPage from './pages/pricing/BusinessProPlan.jsx'
import EssentialCarePage from './pages/pricing/EssentialCare.jsx'
import ProfessionalCarePage from './pages/pricing/ProfessionalCare.jsx'
import PremiumCarePage from './pages/pricing/PremiumCare.jsx'
import AboutUsPage from './pages/AboutUsPage.jsx'
import ServicesPage from './pages/servicePage.jsx'
import MaintenanceSupportPage from './pages/MSPage.jsx'
import ReviewPage from './pages/reviewPage.jsx'
import ComingSoonPage from './pages/commingSoonPage.jsx'
import DonateVisionPage from './pages/donatePage.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/m-s" element={<MaintenanceSupportPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/comming-soon" element={<ComingSoonPage />} />
        <Route path="/donate" element={<DonateVisionPage />} />



        <Route path="/pricing/starter-plan" element={<StarterPlanPage />} />
        <Route path="/pricing/growth-plan" element={<GrowthPlanPage />} />
        <Route path="/pricing/business-pro-plan" element={<BusinessProPlanPage />} />
        <Route path="/pricing/essential-care" element={<EssentialCarePage />} />
        <Route path="/pricing/professional-care" element={<ProfessionalCarePage />} />
        <Route path="/pricing/premium-care" element={<PremiumCarePage />} />
        {/* Add more routes here: About, Services, Pricing, Contact etc. */}
      </Routes>
      <Footer />
    </>
  )
}
