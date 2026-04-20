import { useEffect, useRef, useState } from "react";
import type { Project } from "../../types/project";
import ProjectCard from "../ProjectCard/ProjectCard";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollPrev(el.scrollLeft > 0);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollButtons();
  }, [projects]);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const amount = Math.min(el.clientWidth * 0.8, 380);
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <style>
        {`
          #projects .overflow-auto::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-start justify-content-between mb-4 gap-3 text-center text-md-start">
          <div>
            <h2 className="fw-bold mb-2">
              Featured <span className="text-emerald">Projects</span>
            </h2>
            <p className="text-muted mb-0">Swipe or use the arrows to browse through the project cards.</p>
          </div>

          <div className="btn-group">
            <button
              type="button"
              className="btn btn-emerald"
              onClick={() => scrollBy("left")}
              disabled={!canScrollPrev}
            >
              ‹
            </button>
            <button
              type="button"
              className="btn btn-emerald"
              onClick={() => scrollBy("right")}
              disabled={!canScrollNext}
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="d-flex overflow-auto gap-4 pb-3"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
          onScroll={updateScrollButtons}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0"
              style={{ minWidth: 320, maxWidth: 360, scrollSnapAlign: "start" }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;