import { useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
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

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ministera Asan",
    role: "CEO",
    company: "Ministera Scent",
    content:
      "Working with this developer was an absolute pleasure. They delivered our project ahead of schedule and exceeded all expectations. The code quality is exceptional and they were always responsive to feedback.",
    rating: 5,
    initials: "MA",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLabs",
    content:
      "One of the most talented developers I've worked with. Their attention to detail and problem-solving skills are outstanding. They don't just write code; they build solutions that scale.",
    rating: 5,
    initials: "MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "Creative Studio",
    content:
      "The collaboration was seamless. They understood our design vision perfectly and implemented it with precision. The end result was even better than we imagined.",
    rating: 5,
    initials: "ER",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Startup Founder",
    company: "LaunchPad",
    content:
      "Built our entire MVP from scratch. The architecture is solid, the code is clean, and the performance is excellent. Couldn't have asked for a better technical partner.",
    rating: 5,
    initials: "DK",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Engineering Lead",
    company: "ScaleUp Inc",
    content:
      "Exceptional problem solver with great communication skills. They integrated seamlessly with our team and delivered high-quality work under tight deadlines.",
    rating: 5,
    initials: "LT",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* =========================================
     AUTOPLAY
  ========================================= */

  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % testimonials.length
      );
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  /* =========================================
     NAVIGATION
  ========================================= */

  const handlePrevious = () => {
    setIsAutoPlaying(false);

    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);

    setCurrentIndex(
      (prev) =>
        (prev + 1) % testimonials.length
    );
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  /* =========================================
     TOUCH / SWIPE
  ========================================= */

  const handleTouchStart = (
    e: React.TouchEvent
  ) => {
    setTouchStart(
      e.targetTouches[0].clientX
    );
  };

  const handleTouchMove = (
    e: React.TouchEvent
  ) => {
    setTouchEnd(
      e.targetTouches[0].clientX
    );
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance =
      touchStart - touchEnd;

    if (distance > 75) {
      handleNext();
    }

    if (distance < -75) {
      handlePrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section
      id="testimonials"
      className="testimonials-section"
    >

      {/* =====================================
          BACKGROUND
      ===================================== */}

      <div className="testimonials-glow glow-left" />

      <div className="testimonials-glow glow-right" />

      <div className="container">

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <div className="testimonials-header">

          <span className="section-badge">
            CLIENT TESTIMONIALS
          </span>

          <h2>
            What People Say
            <span> About Working With Me</span>
          </h2>

          <p>
            Feedback from people I've had the
            opportunity to work with and build
            digital solutions for.
          </p>

        </div>

        {/* =====================================
            SLIDER
        ===================================== */}

        <div className="testimonials-slider-container">

          <div
            className="testimonials-slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >

            <div
              className="testimonials-track"
              style={{
                transform: `translateX(-${
                  currentIndex * 100
                }%)`,
              }}
            >

              {testimonials.map(
                (testimonial) => (

                  <article
                    key={testimonial.id}
                    className="testimonial-card"
                  >

                    {/* Quote */}

                    <div className="testimonial-quote">

                      <FaQuoteLeft />

                    </div>

                    {/* Rating */}

                    <div className="testimonial-rating">

                      {Array.from({
                        length: testimonial.rating,
                      }).map((_, index) => (

                        <FaStar
                          key={index}
                        />

                      ))}

                    </div>

                    {/* Content */}

                    <p className="testimonial-text">
                      “{testimonial.content}”
                    </p>

                    {/* Author */}

                    <div className="testimonial-author">

                      <div className="author-avatar">

                        {testimonial.image ? (

                          <img
                            src={
                              testimonial.image
                            }
                            alt={
                              testimonial.name
                            }
                          />

                        ) : (

                          <span>
                            {
                              testimonial.initials
                            }
                          </span>

                        )}

                      </div>

                      <div className="author-details">

                        <h4>
                          {testimonial.name}
                        </h4>

                        <p>
                          {testimonial.role}

                          <span>
                            {" "}
                            ·{" "}
                            {testimonial.company}
                          </span>
                        </p>

                      </div>

                    </div>

                  </article>

                )
              )}

            </div>

          </div>

          {/* =================================
              NAVIGATION BUTTONS
          ================================= */}

          <button
            className="testimonial-nav prev"
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          <button
            className="testimonial-nav next"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

        </div>

        {/* =====================================
            BOTTOM NAVIGATION
        ===================================== */}

        <div className="testimonial-bottom">

          <div className="testimonial-counter">

            <span>
              {String(
                currentIndex + 1
              ).padStart(2, "0")}
            </span>

            <small>
              /
              {String(
                testimonials.length
              ).padStart(2, "0")}
            </small>

          </div>

          <div className="dots-container">

            {testimonials.map(
              (_, index) => (

                <button
                  key={index}
                  className={`dot ${
                    index === currentIndex
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleDotClick(index)
                  }
                  aria-label={`Go to testimonial ${
                    index + 1
                  }`}
                />

              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;