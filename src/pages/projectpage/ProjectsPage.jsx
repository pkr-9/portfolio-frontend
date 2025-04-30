import Navigation from '../../components/layout/navbar/Navbar';
import VerticalProjectsSection from '../../components/layout/verticalprojectssection/VerticalProjectsSection';
import Footer from '../../components/layout/footer/Footer';
import '../../styles/global.scss';
import './ProjectsPage.scss';

const ProjectsPage = () => {
  return (
    <>
      <Navigation />
      <div className="projects-page">
        {/* <h1>Projects</h1> */}
        <VerticalProjectsSection />
        <Footer />
      </div>
    </>
  );
};

export default ProjectsPage;
