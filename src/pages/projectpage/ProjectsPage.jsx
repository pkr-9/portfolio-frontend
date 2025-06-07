import Navigation from '../../components/layout/navbar/Navbar';
import ProjectsSection from '../../components/layout/projectssection/ProjectsSection';
import WideProjectsSection from '../../components/layout/wideprojectssection/WideProjectsSection';
import Footer from '../../components/layout/footer/Footer';
import '../../styles/global.scss';
import './ProjectsPage.scss';

const ProjectsPage = () => {
  return (
    <>
      <Navigation />
      <div className="projects-page">
        <WideProjectsSection />
        <ProjectsSection />
        <Footer />
      </div>
    </>
  );
};

export default ProjectsPage;
