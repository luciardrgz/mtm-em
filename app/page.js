import { Navbar, Stats } from '../components';
import { Hero } from '../sections';
import styles from '../styles';

const Page = () => (
  <div className="bg-primary-white overflow-hidden">
    <Navbar />
    <Hero />
    <div className={`${styles.flexCenter}`}>
      <Stats />
    </div>
  </div>
);

export default Page;
