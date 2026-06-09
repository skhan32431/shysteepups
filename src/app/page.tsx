import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PuppyGrid from '@/components/PuppyGrid';
import WhySection from '@/components/WhySection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="overflow-x-hidden w-full max-w-full">
        <Hero />
        <PuppyGrid />
        <WhySection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
