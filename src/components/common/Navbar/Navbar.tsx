import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '@assets/images/newlogo3.png'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => {
    setIsOpen(false)
    setIsDropdownOpen(false)
  }

  const isHomePage = location.pathname === '/'

  return (
    <section className={styles.navbarSection}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="IESAP Logo" className={styles.logoImg} />
            </Link>
          </div>

          <ul className={styles.links}>
            {isHomePage && (
              <li>
                <a href="#nosotros">Nosotros</a>
              </li>
            )}
            <li className={styles.dropdown}>
              <button
                className={styles.dropdownToggle}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Nuestro Colegio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className={styles.dropdownIcon}
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul
                  className={styles.dropdownMenu}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <li>
                    <Link to="/corporativo" onClick={closeMenu}>
                      Misión
                    </Link>
                  </li>
                  <li>
                    <Link to="/corporativo" onClick={closeMenu}>
                      Visión
                    </Link>
                  </li>
                  <li>
                    <Link to="/corporativo#historia" onClick={closeMenu}>
                      Historia
                    </Link>
                  </li>
                  <li>
                    <Link to="/directivos" onClick={closeMenu}>
                      <span className={styles.lineBreak}>Gestión</span>
                      <span className={styles.lineBreak}>Administrativa</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/gobierno" onClick={closeMenu}>
                      <span className={styles.lineBreak}>Gobierno</span>
                      <span className={styles.lineBreak}>Estudiantil</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/talentohumano" onClick={closeMenu}>
                      <span className={styles.lineBreak}>Talento</span>
                      <span className={styles.lineBreak}>Humano</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/sedes" onClick={closeMenu}>
                Sedes
              </Link>
            </li>
            <li>
              <Link to="/proyectos" onClick={closeMenu}>
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="/contacto" onClick={closeMenu}>
                PQRS
              </Link>
            </li>
            <li>
              <Link to="/calificaciones" onClick={closeMenu}>
                Calificaciones
              </Link>
            </li>
          </ul>

          <Link
            to="/#comunicados"
            className={styles.actionBtn}
            onClick={closeMenu}
          >
            Últimos Comunicados
          </Link>

          <button className={styles.toggleBtn} onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className={styles.dropdownMenuMobile}>
            {isHomePage && (
              <li className={styles.item}>
                <a href="#nosotros" onClick={closeMenu}>
                  Nosotros
                </a>
              </li>
            )}
            <li className={`${styles.item} ${styles.dropdownMobile}`}>
              <button
                className={styles.dropdownToggle}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Nuestro Colegio
              </button>
              {isDropdownOpen && (
                <ul className={styles.dropdownMenuInner}>
                  <li>
                    <Link to="/corporativo" onClick={closeMenu}>
                      Misión
                    </Link>
                  </li>
                  <li>
                    <Link to="/corporativo" onClick={closeMenu}>
                      Visión
                    </Link>
                  </li>
                  <li>
                    <Link to="/corporativo#historia" onClick={closeMenu}>
                      Historia
                    </Link>
                  </li>
                  <li>
                    <Link to="/directivos" onClick={closeMenu}>
                      Gestión Administrativa
                    </Link>
                  </li>
                  <li>
                    <Link to="/gobierno" onClick={closeMenu}>
                      Gobierno Estudiantil
                    </Link>
                  </li>
                  <li>
                    <Link to="/talentohumano" onClick={closeMenu}>
                      Talento Humano
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className={styles.item}>
              <Link to="/sedes" onClick={closeMenu}>
                Sedes
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/proyectos" onClick={closeMenu}>
                Proyectos
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/contacto" onClick={closeMenu}>
                PQRS
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/calificaciones" onClick={closeMenu}>
                Calificaciones
              </Link>
            </li>
            <Link
              to="/#comunicados"
              className={styles.actionBtn}
              onClick={closeMenu}
            >
              Últimos Comunicados
            </Link>
          </div>
        )}
      </header>
    </section>
  )
}

export default Navbar
