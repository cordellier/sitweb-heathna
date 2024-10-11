import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CustomWebServicesPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="custom-web-services">
      <header className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Sites Web Sur-Mesure
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Créez une présence en ligne unique qui reflète votre marque
        </motion.p>
      </header>

      <section className="services" ref={ref}>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={controls}
        >
          <motion.div className="service-card" variants={fadeInUp}>
            <h3>Design Personnalisé</h3>
            <p>Un design unique qui capte l'essence de votre marque</p>
          </motion.div>
          <motion.div className="service-card" variants={fadeInUp}>
            <h3>Développement Sur-Mesure</h3>
            <p>Des fonctionnalités adaptées à vos besoins spécifiques</p>
          </motion.div>
          <motion.div className="service-card" variants={fadeInUp}>
            <h3>Optimisation SEO</h3>
            <p>Améliorez votre visibilité en ligne</p>
          </motion.div>
        </motion.div>
      </section>

      <section className="video-section">
        <h2>Découvrez Notre Processus</h2>
        <div className="video-container">
          <video controls>
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </section>

      <section className="cta-section">
        <h2>Prêt à Créer Votre Site Web Sur-Mesure ?</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Commencez Votre Projet
        </motion.button>
      </section>
    </div>
  );
};

export default CustomWebServicesPage;