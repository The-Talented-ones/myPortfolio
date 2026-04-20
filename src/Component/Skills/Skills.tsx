import { useState, useEffect, useRef } from "react";
import type { SkillCategory } from "../../types/home";
import "./Skills.css";

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  const [animated, setAnimated] = useState(false);
  const [currentLevels, setCurrentLevels] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRefs = useRef<Record<string, ReturnType<typeof setInterval>>>({});

  // Initialize current levels to 0 when component mounts
  useEffect(() => {
    const initialLevels: Record<string, number> = {};
    skillCategories.forEach(cat => {
      cat.skills.forEach(skill => {
        initialLevels[skill.name] = 0;
      });
    });
    setCurrentLevels(initialLevels);
  }, [skillCategories]);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            startCounting();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      // Cleanup all intervals on unmount
      Object.values(intervalRefs.current).forEach(clearInterval);
    };
  }, [animated, skillCategories]);

  const startCounting = () => {
    // For each skill, start counting from 0 to its target level
    skillCategories.forEach(cat => {
      cat.skills.forEach(skill => {
        const target = skill.level;
        const skillName = skill.name;
        let current = 0;

        const interval = setInterval(() => {
          if (current < target) {
            current += Math.ceil(target / 50); // Increment step
            if (current > target) current = target;
            setCurrentLevels(prev => ({
              ...prev,
              [skillName]: current
            }));
          } else {
            clearInterval(interval);
            delete intervalRefs.current[skillName];
          }
        }, 20); // Update every 20ms for smooth animation

        intervalRefs.current[skillName] = interval;
      });
    });
  };

  return (
    <section id="skills" className="skills-section py-5 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container">
         {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-gray-800 dark:text-white">
            Skills & <span className="text-emerald">Expertise</span>
          </h2>
        </div>
        <div className="row">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="col-md-6 mb-4">
              <h4 className="fw-bold mb-3 text-gray-800 dark:text-white">{cat.category}</h4>

              {cat.skills.map((skill) => {
                const current = currentLevels[skill.name] || 0;
                return (
                  <div key={skill.name} className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="skill-name text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="skill-percentage text-emerald-600 dark:text-emerald-400 font-semibold">
                        {current}%
                      </span>
                    </div>

                    <div className="progress-container">
                      <div className="progress-bar-bg bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="progress-bar-fill bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-200"
                          style={{ width: `${current}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;