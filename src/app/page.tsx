import Header from '@/components/mubarik/Header';
import AdmissionPopup from '@/components/mubarik/AdmissionPopup';
import About from '@/components/mubarik/About';
import TwoInstitutions from '@/components/mubarik/TwoInstitutions';
import Academics from '@/components/mubarik/Academics';
import WhyMubarik from '@/components/mubarik/WhyMubarik';
import Facilities from '@/components/mubarik/Facilities';
import StudentLife from '@/components/mubarik/StudentLife';
import Admissions from '@/components/mubarik/Admissions';
import NewsEvents from '@/components/mubarik/NewsEvents';
import AdmissionCTA from '@/components/mubarik/AdmissionCTA';
import Footer from '@/components/mubarik/Footer';

export default function Home() {
  return (
    <>
      <AdmissionPopup />
      <Header />
      <main>
        <About />
        <TwoInstitutions />
        <Academics />
        <WhyMubarik />
        <Facilities />
        <StudentLife />
        <Admissions />
        <NewsEvents />
        <AdmissionCTA />
      </main>
      <Footer />
    </>
  );
}