import { Navbar, Stats } from '../components';
import { Hero, About, Services, Work, Contact, Footer } from '../sections';
import styles from '../styles';

const Page = () => (
  <div className="bg-primary-white overflow-hidden">
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
