import styles from './AnnouncementCards.module.css'

const AnnouncementCards = () => {
  return (
    <>
      <h2 id="comunicados" className={styles.sectionTitle}>
        Comunicados
      </h2>
      <section className={styles.cardsSection}>
        <div className={styles.container}>
          <article className={`${styles.card} ${styles.card1}`}>
            <div className={styles.overlay}></div>
            <div className={styles.glows}></div>
            <span className={styles.badge}>
              <span>22 de Noviembre 2024</span>
            </span>
            <h5 className={styles.cardTitle}>
              🎉 ¡Felicitaciones, Lucas Escobar Sepúlveda, por obtener el mejor puntaje ICFES 2024! ¡Eres un orgullo para
              nuestra institución! 🙌
            </h5>
          </article>

          <article className={`${styles.card} ${styles.card2}`}>
            <div className={styles.overlay}></div>
            <div className={styles.glows}></div>
            <span className={styles.badge}>
              <span>Noviembre 2024</span>
            </span>
            <h5 className={styles.cardTitle}>
              📚 Comunicado importante sobre el calendario académico 2025
            </h5>
          </article>

          <article className={`${styles.card} ${styles.card3}`}>
            <div className={styles.overlay}></div>
            <div className={styles.glows}></div>
            <span className={styles.badge}>
              <span>Octubre 2024</span>
            </span>
            <h5 className={styles.cardTitle}>
              🎓 Matrículas abiertas para el año 2025. ¡Inscríbete ahora!
            </h5>
          </article>
        </div>
      </section>
    </>
  )
}

export default AnnouncementCards
