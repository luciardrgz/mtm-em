import styles from '../styles';
import { contactInfo } from '../utils/constants';
import { ContactCard } from '../components';

const Contact = () => (
  <section className={`-mt-10 ${styles.paddings}`} id="contact">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-8 xl:gap-x-20">
        {contactInfo.map((info, index) => (
          <ContactCard key={info.id} {...info} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
