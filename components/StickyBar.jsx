import { SocialIcon } from 'react-social-icons';

const StickyBar = () => (
  <div className="sticky-bar fixed right-0 top-1/4 w-12 lg:w-14 md:w-14 items-center z-20 p-2 flex flex-col space-y-4 rounded-lg">
    <SocialIcon url="https://api.whatsapp.com/send/?phone=5492235828183&text&type=phone_number&app_absent=0" title="WhatsApp" fgColor="white" target="_blank" style={{ height: 35, width: 35 }} />
    <SocialIcon url="https://www.instagram.com/mtm_s.e/" title="Instagram" fgColor="white" target="_blank" style={{ height: 35, width: 35 }} />
    <SocialIcon url="https://www.linkedin.com/in/cristian-pollicino-2311ab111/" title="LinkedIn" fgColor="white" target="_blank" style={{ height: 35, width: 35 }} />
  </div>
);
export default StickyBar;
