// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import '../../../styles/global.scss';
// import './Hero.scss';

// const Hero = () => {
//   const text = 'Turning Ideas into Scalable Web Solutions.';
//   const letters = text.split('');
//   useEffect(() => {
//     const container = document.querySelector('.moving-circles');
//     if (container) {
//       for (let i = 0; i < 20; i++) {
//         const circle = document.createElement('div');
//         circle.classList.add('circle');
//         circle.style.left = `${Math.random() * 100}%`;
//         circle.style.animationDuration = `${4 + Math.random() * 3}s`;
//         const size = 10 + Math.random() * 20;
//         circle.style.width = `${size}px`;
//         circle.style.height = `${size}px`;
//         container.appendChild(circle);
//       }
//     }
//   }, []);

//   return (
//     <section id="home" className="hero">
//       {/* Animated gradient background */}
//       <div className="animated-gradient" />

//       {/* Moving circles */}
//       <div className="moving-circles" />

//       {/* Main content */}
//       <div className="hero-content">
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="hero-title"
//         >
//           {letters.map((letter, index) => (
//             <motion.span
//               key={index}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: index * 0.05 }}
//             >
//               {letter}
//             </motion.span>
//           ))}
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="hero-subtitle"
//         >
//           Pappu Kumar | Full-Stack Developer
//         </motion.p>

//         <motion.a
//           href="#about"
//           className="cta-button"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Learn More
//         </motion.a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import '../../../styles/global.scss';
// import './Hero.scss';

// const Hero = () => {
//   const controls = useAnimation();
//   const heading = 'Crafting Digital Experiences';
//   const words = heading.split(' ');

//   // Trigger word stagger animation as soon as the component mounts
//   useEffect(() => {
//     controls.start('visible');
//   }, [controls]);

//   return (
//     <section id="home" className="hero">
//       {/* Morphing blobs in the background */}
//       <div className="blob-container">
//         <div className="blob blob1" />
//         <div className="blob blob2" />
//         <div className="blob blob3" />
//       </div>

//       {/* Main content area */}
//       <div className="hero-content">
//         <motion.h1
//           className="hero-title"
//           variants={{
//             hidden: {},
//             visible: { transition: { staggerChildren: 0.2 } },
//           }}
//           initial="hidden"
//           animate={controls}
//         >
//           {words.map((word, idx) => (
//             <motion.span
//               key={idx}
//               className="word"
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                   transition: { type: 'spring', stiffness: 120 },
//                 },
//               }}
//             >
//               {word}
//             </motion.span>
//           ))}
//         </motion.h1>

//         <motion.p
//           className="hero-subtitle"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8, duration: 0.8 }}
//         >
//           Hi, I’m Pappu Kumar — Full-Stack Engineer, turning concepts into
//           reality.
//         </motion.p>

//         <div className="button-group">
//           <motion.a
//             href="#projects"
//             className="btn btn-primary"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.2, duration: 0.5 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             View Projects
//           </motion.a>

//           <motion.a
//             href="#contact"
//             className="btn btn-secondary"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1.4, duration: 0.5 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get in Touch
//           </motion.a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// ------------------------------------------------------------

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, Code, Sparkles, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Hero.scss';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        setMousePosition({ x: e.clientX, y: e.clientY });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="hero">
      {/* Animated background grid */}
      <div className="hero__background-grid" />

      {/* Dynamic gradient orbs */}
      <motion.div
        className="hero__gradient-orb hero__gradient-orb--primary"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="hero__gradient-orb hero__gradient-orb--secondary"
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating geometric shapes */}
      <FloatingShape
        mouseX={springX}
        mouseY={springY}
        className="floating-shape"
        style={{ top: '5rem', left: '5rem' }}
        delay={0}
      />
      <FloatingShape
        mouseX={springX}
        mouseY={springY}
        className="floating-shape"
        style={{ top: '10rem', right: '8rem' }}
        delay={0.2}
        shape="triangle"
      />
      <FloatingShape
        mouseX={springX}
        mouseY={springY}
        className="floating-shape"
        style={{ bottom: '8rem', left: '33.333333%' }}
        delay={0.4}
        shape="hexagon"
      />

      {/* Particle system */}
      <ParticleSystem mousePosition={mousePosition} />

      {/* Main content */}
      <div className="hero__content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* <div className="hero__badge">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Full-Stack Developer</span>
          </div> */}
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="hero__title-line hero__title-line--primary">
            Crafting Digital
          </span>
          <motion.span
            className="hero__title-line hero__title-line--secondary"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              backgroundSize: '200% 100%',
            }}
          >
            Experiences
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero__description"
        >
          Transforming innovative ideas into scalable, beautiful web solutions
          that drive business growth and user engagement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero__buttons"
        >
          <Link to="/projects">
            <MagneticButton>
              <motion.button
                className="button button--primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="button__overlay"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="button__content">
                  <Code className="w-5 h-5" />
                  View My Work
                </span>
              </motion.button>
            </MagneticButton>
          </Link>

          <Link to="/contact">
            <MagneticButton>
              <motion.button
                className="button button--secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>
                  <Zap className="w-5 h-5" />
                  Get In Touch
                </span>
              </motion.button>
            </MagneticButton>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hero__scroll-indicator"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Floating geometric shapes component
const FloatingShape = ({
  mouseX,
  mouseY,
  className,
  style,
  delay = 0,
  shape = 'circle',
}) => {
  const x = useTransform(mouseX, [0, 1], [-20, 20]);
  const y = useTransform(mouseY, [0, 1], [-20, 20]);

  const shapeClasses = {
    circle: 'floating-shape__circle',
    triangle: 'floating-shape__triangle',
    hexagon: 'floating-shape__hexagon',
  };

  return (
    <motion.div
      className={className}
      style={{ ...style, x, y }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
        scale: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay },
      }}
    >
      <div className={shapeClasses[shape]} />
    </motion.div>
  );
};

// Particle system component
const ParticleSystem = ({ mousePosition }) => {
  const particles = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {particles.map((particle) => (
        <Particle
          key={particle}
          mousePosition={mousePosition}
          delay={particle * 0.1}
        />
      ))}
    </div>
  );
};

// Individual particle component
const Particle = ({ mousePosition, delay }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });

  useEffect(() => {
    const handleMouseMove = () => {
      if (ref.current) {
        const dx = mousePosition.x - position.x;
        const dy = mousePosition.y - position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          setPosition((prev) => ({
            x: prev.x - (dx / distance) * force * 2,
            y: prev.y - (dy / distance) * force * 2,
          }));
        }
      }
    };

    handleMouseMove();
  }, [mousePosition, position.x, position.y]);

  return (
    <motion.div
      ref={ref}
      className="particle"
      style={{
        left: position.x,
        top: position.y,
      }}
      animate={{
        opacity: [0.3, 0.8, 0.3],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
};

// Magnetic button effect
const MagneticButton = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPosition({ x: x * 0.3, y: y * 0.3 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

export default Hero;
