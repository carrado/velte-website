import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import ScrollToTop from '../helpers/scrollToTop';

const LandingLayout = () => {
  return (
    <>
      <div>
        <ScrollToTop />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default LandingLayout;
