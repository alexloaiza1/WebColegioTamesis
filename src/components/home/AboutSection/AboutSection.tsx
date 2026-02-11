import styles from './AboutSection.module.css'

const AboutSection = () => {
  return (
    <section id="nosotros" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>Sobre Nosotros</h2>
        <p className={styles.text}>
          ¡Bienvenidos a la Institución Educativa San Antonio de Padua - Támesis!
        </p>
        <p className={styles.text}>
          Nuestro objetivo es formar los líderes del futuro y contribuir al desarrollo regional, al municipio de Támesis y
          al futuro de nuestros estudiantes con una educación de alta calidad reconocida a nivel nacional. Brindamos un
          entorno de aprendizaje colaborativo, con aulas y grupos diseñados para asegurar la atención personalizada de
          nuestros docentes altamente calificados.
        </p>
        <p className={styles.text}>
          Aquí, los estudiantes desarrollan sus habilidades creativas, investigativas y prácticas en un ambiente que
          fomenta el crecimiento individual.
        </p>
        <p className={styles.text}>
          Descubra más sobre nuestra oferta educativa en nuestro sitio web o contáctenos para más información. ¡Estamos
          listos para ayudarle a conocer todo lo que podemos ofrecer!
        </p>
      </div>
    </section>
  )
}

export default AboutSection
