// Testimonials.tsx
import { useState, useEffect, useRef } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonial.css";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  initials: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<number | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "Working with this developer was an absolute pleasure. They delivered our project ahead of schedule and exceeded all expectations. The code quality is exceptional and they were always responsive to feedback.",
      rating: 5,
      initials: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateLabs",
      content: "One of the most talented developers I've worked with. Their attention to detail and problem-solving skills are outstanding. They don't just write code; they build solutions that scale.",
      rating: 5,
      initials: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Director",
      company: "Creative Studio",
      content: "The collaboration was seamless. They understood our design vision perfectly and implemented it with precision. The end result was even better than we imagined.",
      rating: 5,
      initials: "ER"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Startup Founder",
      company: "LaunchPad",
      content: "Built our entire MVP from scratch. The architecture is solid, the code is clean, and the performance is excellent. Couldn't have asked for a better technical partner.",
      rating: 5,
      initials: "DK"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Engineering Lead",
      company: "ScaleUp Inc",
      content: "Exceptional problem solver with great communication skills. They integrated seamlessly with our team and delivered high-quality work under tight deadlines.",
      rating: 5,
      initials: "LT"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }
    if (touchStart - touchEnd < -75) {
      handlePrevious();
    }
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <h2>Client Testimonials</h2>
          <p className="testimonials-subtitle">
            What people say about working with me
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="testimonials-slider-container">
          <div 
            className="testimonials-slider"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="testimonial-card"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-content">
                  {/* Quote Icon */}
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>

                  {/* Rating Stars */}
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star-filled" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="testimonial-text">{testimonial.content}</p>

                  {/* Author Info */}
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.image ? (
                        <img src={testimonial.image} alt={testimonial.name} />
                      ) : (
                        <div className="avatar-placeholder">
                          {testimonial.initials}
                        </div>
                      )}
                    </div>
                    <div className="author-details">
                      <h4>{testimonial.name}</h4>
                      <p>
                        {testimonial.role}, <span>{testimonial.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            className="nav-button prev"
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button 
            className="nav-button next"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="dots-container">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;