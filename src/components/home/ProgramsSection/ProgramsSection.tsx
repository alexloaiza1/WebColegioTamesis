import primaria from '@assets/images/primaria.jpg'
import bachillerato from '@assets/images/bachillerato.jpeg'
import extracurricular from '@assets/images/extracurricular.jpg'
import styles from './ProgramsSection.module.css'

const ProgramsSection = () => {
  return (
    <section className={styles.programsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestros Programas</h2>
        <div className={styles.programsGrid}>
          <div className={styles.programCard}>
            <img src={primaria} alt="Primaria" className={styles.programImage} />
            <h3 className={styles.programTitle}>Primaria</h3>
            <p className={styles.programText}>
              Educación integral para los más pequeños, desarrollando habilidades fundamentales.
            </p>
          </div>

          <div className={styles.programCard}>
            <img src={bachillerato} alt="Bachillerato" className={styles.programImage} />
            <h3 className={styles.programTitle}>Bachillerato</h3>
            <p className={styles.programText}>
              Formación académica sólida preparando a nuestros estudiantes para el futuro.
            </p>
          </div>

          <div className={styles.programCard}>
            <img src={extracurricular} alt="Actividades Extracurriculares" className={styles.programImage} />
            <h3 className={styles.programTitle}>Actividades Extracurriculares</h3>
            <p className={styles.programText}>
              Desarrollo de talentos y habilidades a través de diversas actividades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection
