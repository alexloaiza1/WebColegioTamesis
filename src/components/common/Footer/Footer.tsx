import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { SOCIAL_MEDIA } from '@utils/constants'
import logo from '@assets/images/logo.png'
import contactImage from '@assets/images/contato.png'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBlock}>
          <h4>Síguenos en</h4>
          <div className={styles.socialIcons}>
            <a
              href={SOCIAL_MEDIA.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={38} />
            </a>
            <a
              href={SOCIAL_MEDIA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={38} />
            </a>
            <a
              href={SOCIAL_MEDIA.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={38} />
            </a>
          </div>
        </div>

        <div className={styles.footerBlock}>
          <h4>Contacto</h4>
          <img
            src={contactImage}
            alt="Información de contacto"
            className={styles.contactImage}
          />
        </div>

        <div className={styles.footerBlock}>
          <h4>Estamos aquí</h4>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.308055212782!2d-75.717398590174!3d5.668521394289251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e465628318b30f1%3A0xd5a0d44ffa14b795!2sInstitucion%20Educativa%20San%20Antonio%20de%20Padua!5e0!3m2!1ses!2sco!4v1723242983002!5m2!1ses!2sco"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Ubicación IESAP"
            ></iframe>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <img
          src={logo}
          alt="IESAP Logo"
          className={styles.footerLogo}
        />
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Institución Educativa San Antonio de
          Padua - Támesis
        </p>
      </div>
    </footer>
  )
}

export default Footer
