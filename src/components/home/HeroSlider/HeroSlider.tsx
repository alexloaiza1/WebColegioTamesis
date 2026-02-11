import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { SOCIAL_MEDIA } from '@utils/constants'
import banner2025 from '@assets/images/banner2025.png'
import bannermovil from '@assets/images/bannermovil.png'
import foto1 from '@assets/images/Foto 1.jpg'
import foto2 from '@assets/images/foto 2.jpg'
import foto3 from '@assets/images/foto 3.jpg'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './HeroSlider.module.css'

const HeroSlider = () => {
  return (
    <section className={styles.sliderSection}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className={styles.swiper}
      >
        {/* First Slide - Main Banner */}
        <SwiperSlide>
          <picture>
            <source srcSet={bannermovil} media="(max-width: 767px)" />
            <img src={banner2025} alt="Banner Principal 2025" className={styles.slideImage} />
          </picture>
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
        </SwiperSlide>

        {/* Second Slide - Sistemas */}
        <SwiperSlide>
          <img src={foto1} alt="Técnica en Sistemas" className={styles.slideImage} />
          <a href="/tecnicas#sistemas" className={styles.slideText}>
            Técnica en Sistemas
          </a>
        </SwiperSlide>

        {/* Third Slide - Turismo */}
        <SwiperSlide>
          <img src={foto2} alt="Técnica en Turismo" className={styles.slideImage} />
          <a href="/tecnicas#turismo" className={styles.slideText}>
            Técnica en Turismo
          </a>
        </SwiperSlide>

        {/* Fourth Slide - Música */}
        <SwiperSlide>
          <img src={foto3} alt="Media Técnica en Música" className={styles.slideImage} />
          <a href="/tecnicas#musica" className={styles.slideText}>
            Media Técnica en Música
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default HeroSlider
