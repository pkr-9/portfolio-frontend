// src/pages/ProjectsPage.jsx
import '../styles/global.scss';
import Navigation from '../components/layout/Navbar';
import VerticalProjectsSection from '../components/layout/VerticalProjectsSection';
import Footer from '../components/layout/Footer';

const ProjectsPage = () => {
  return (
    <>
      <Navigation />
    <div className="projects-page">
      <h1>Projects</h1>
      <VerticalProjectsSection />
      <Footer />
    </div>
    </>
  );
};

export default ProjectsPage;
