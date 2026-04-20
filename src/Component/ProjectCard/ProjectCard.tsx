import { useState } from 'react';
import type { JSX, MouseEvent } from 'react';
import type { Project } from '../../types/project';
import { 
  FaGithub, FaExternalLinkAlt, FaStar, FaCode,
  FaReact, FaPython, FaDatabase, FaServer,
  FaArrowRight, FaRegHeart, FaHeart
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiTailwindcss, 
  SiNextdotjs, SiMongodb, SiNodedotjs
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Map technologies to icons
  const getTechIcon = (tech: string): JSX.Element => {
    const techIcons: Record<string, JSX.Element> = {
      'React': <FaReact className="text-[#61DAFB]" />,
      'TypeScript': <SiTypescript className="text-[#3178C6]" />,
      'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
      'Next.js': <SiNextdotjs className="text-black dark:text-white" />,
      'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
      'Node.js': <SiNodedotjs className="text-[#339933]" />,
      'Python': <FaPython className="text-[#3776AB]" />,
      'MongoDB': <SiMongodb className="text-[#47A248]" />,
      'Express': <FaServer className="text-[#000000]" />,
      'Socket.io': <FaCode className="text-[#010101]" />,
      'Flask': <FaPython className="text-[#000000]" />,
      'AWS': <FaCloud className="text-[#FF9900]" />,
      'Prisma': <FaDatabase className="text-[#2D3748]" />,
      'Chart.js': <FaChartLine className="text-[#FF6384]" />,
      'WebRTC': <FaVideo className="text-[#333333]" />,
    };
    return techIcons[tech] || <FaCode className="text-emerald-600" />;
  };

  // Category colors
  const categoryColors = {
    frontend: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)',
    backend: 'linear-gradient(135deg, var(--primary-hover) 0%, #047857 100%)',
    fullstack: 'linear-gradient(135deg, var(--primary-hover) 0%, var(--primary) 100%)',
  };

  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    fullstack: 'Full Stack',
  };

  const handleFavoriteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)",
      transition: { duration: 0.2 }
    }
  };

  return (
    
    <motion.div
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={handleCardClick}
      style={{
        '--card-gradient': categoryColors[project.category],
      } as React.CSSProperties}
    >
      {/* Card Header with Category Badge */}
      <div className="project-card-header">
        <div 
          className="category-badge"
          style={{ background: categoryColors[project.category] }}
        >
          {categoryLabels[project.category]}
        </div>
        
        <div className="project-actions">
          <button 
            className="btn-favorite"
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? (
              <FaHeart className="text-rose-500" />
            ) : (
              <FaRegHeart className="text-gray-400 hover:text-rose-500" />
            )}
          </button>
        </div>
      </div>

      {/* Project Image/Placeholder */}
      <div className="project-image-container">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="project-image"
          />
        ) : (
          <div className="project-image-placeholder">
            <FaCode className="text-emerald-600 text-4xl" />
          </div>
        )}
        {(project.githubLink || project.liveLink) && (
          <div className="project-overlay">
            <div className="project-links">
              {project.githubLink && (
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub />
                  <span>Code</span>
                </a>
              )}
              {project.liveLink && (
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="project-card-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        {/* Technologies */}
        <div className="technologies-container">
          <div className="technologies-label">
            <FaCode className="text-emerald-600" />
            <span>Technologies</span>
          </div>
          <div className="tech-icons">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <div key={index} className="tech-icon" title={tech}>
                {getTechIcon(tech)}
              </div>
            ))}
            {project.technologies.length > 4 && (
              <div className="tech-more">
                +{project.technologies.length - 4}
              </div>
            )}
          </div>
        </div>

        {/* Features (Collapsible) */}
        <AnimatePresence>
          {isExpanded && project.features?.length ? (
            <motion.div
              className="features-container"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="features-label">
                <FaStar className="text-amber-500" />
                <span>Key Features</span>
              </div>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-bullet"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Card Footer */}
      <div className="project-card-footer">
        <div className="project-stats">
          <div className="stat-item">
            <div className="stat-icon">
              <FaCode />
            </div>
            <div className="stat-content">
              <div className="stat-value">{project.technologies.length}</div>
              <div className="stat-label">Tech Used</div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">
              <FaStar />
            </div>
            <div className="stat-content">
              <div className="stat-value">{project.features?.length ?? 0}</div>
              <div className="stat-label">Features</div>
            </div>
          </div>
        </div>
        
        <button 
          className="btn-explore "
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? ' Less' : 'View'}
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowRight />
          </motion.span>
        </button>
      </div>

      {/* Expanded State Indicator */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="expanded-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Additional icons
const FaCloud = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 640 512">
    <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"/>
  </svg>
);

const FaChartLine = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 512 512">
    <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"/>
  </svg>
);

const FaVideo = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 576 512">
    <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"/>
  </svg>
);

export default ProjectCard;