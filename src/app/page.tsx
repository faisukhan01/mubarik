import Header from '@/components/mubarik/Header';
import Hero from '@/components/mubarik/Hero';
import About from '@/components/mubarik/About';
import TwoInstitutions from '@/components/mubarik/TwoInstitutions';
import Academics from '@/components/mubarik/Academics';
import WhyMubarik from '@/components/mubarik/WhyMubarik';
import Facilities from '@/components/mubarik/Facilities';
import StudentLife from '@/components/mubarik/StudentLife';
import Admissions from '@/components/mubarik/Admissions';
import NewsEvents from '@/components/mubarik/NewsEvents';
import Leadership from '@/components/mubarik/Leadership';
import AdmissionCTA from '@/components/mubarik/AdmissionCTA';
import Footer from '@/components/mubarik/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TwoInstitutions />
        <Academics />
        <WhyMubarik />
        <Facilities />
        <StudentLife />
        <Admissions />
        <NewsEvents />
        <Leadership />
        <AdmissionCTA />
      </main>
      <Footer />
    </>
  );
}
