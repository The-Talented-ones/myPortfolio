import type { Project } from "../../types/project";
import ProjectCard from "../ProjectCard/ProjectCard";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">
          Featured <span className="text-emerald">Projects</span>
        </h2>

        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;