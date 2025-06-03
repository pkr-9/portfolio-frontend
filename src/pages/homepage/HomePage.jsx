import { motion } from 'framer-motion';
import Navigation from '../../components/layout/navbar/Navbar';
import TechStack from '../../components/homepagecomponents/techstack/TechStack';
import CarouselComponent from '../../components/layout/carousel/Carousel';
import WideProjectsSection from '../../components/layout/wideprojectssection/WideProjectsSection';
import Footer from '../../components/layout/footer/Footer';
import Hero from '../../components/layout/hero/Hero';
import StrengthCard from '../../components/specific/strengthcard/StrengthCard';
import HomepageAbout from '../../components/homepagecomponents/about/HomepageAbout';
import { useTheme } from '../../contexts/ThemeContext';
import '../../styles/global.scss';
import './HomePage.scss';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const HomePage = () => {
  const { theme } = useTheme();
  return (
    <div className={`homepage-wrapper ${theme}`}>
      <Navigation />
      <div className="min-h-screen">
        <Hero />
      </div>

      <motion.div variants={fadeUp} initial="hidden" animate="visible">
        <TechStack />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <CarouselComponent />
      </motion.div>

      <motion.div
        className="homepage-projects"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <WideProjectsSection />
      </motion.div>

      <motion.div
        className="homepage-about"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <HomepageAbout />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        <div className="strength-section">
          <StrengthCard />
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default HomePage;
