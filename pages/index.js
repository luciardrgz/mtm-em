import { Navbar, Stats, StickyBar } from '../components';
import { Hero, About, Services, Work, Contact, Footer } from '../sections';
import styles from '../styles';

const Page = () => (
  <div className="bg-primary-white overflow-hidden">
    <StickyBar />
    <Navbar />
    <Hero />
    <div className={`${styles.flexCenter}`}>
      <Stats />
    </div>
    <About />
    <Services />
    <Work />
    <Contact />
    <Footer />
  </div>
);

export default Page;
