import SEO from '@components/common/SEO/SEO'
import HeroSlider from '@components/home/HeroSlider/HeroSlider'
import AboutSection from '@components/home/AboutSection/AboutSection'
import AnnouncementCards from '@components/home/AnnouncementCards/AnnouncementCards'
import ProgramsSection from '@components/home/ProgramsSection/ProgramsSection'
import bannertec2 from '@assets/images/bannertec2.png'
import bannertecnicas from '@assets/images/bannertecnicas.gif'

const Home = () => {
  return (
    <>
      <SEO
        title="Inicio - IESAP Támesis"
        description="Institución Educativa San Antonio de Padua - Támesis. Formando los líderes del futuro."
        keywords="educación, Támesis, colegio, San Antonio de Padua, IESAP"
      />
      
      <HeroSlider />

      {/* Banner Técnicas */}
      <a href="/tecnicas">
        <img
          src={bannertecnicas}
          alt="Programas Técnicos"
          style={{ width: '100%', height: 'auto', maxHeight: '90px', marginTop: '-3px' }}
        />
      </a>
      <a href="/tecnicas">
        <img
          src={bannertec2}
          alt="Inscripciones Técnicas"
          style={{ width: '100%', height: 'auto', maxHeight: '90px', marginTop: '-5px' }}
        />
      </a>

      <AboutSection />

      <AnnouncementCards />

      <ProgramsSection />
    </>
  )
}

export default Home
