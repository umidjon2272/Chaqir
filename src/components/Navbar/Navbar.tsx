import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiDownload } from 'react-icons/fi'
import { useLang } from '../../context/LangContext'
import logoImg from '../../assets/images/logo.png'
import './Navbar.scss'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, t } = useLang()
  const navigate = useNavigate()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* Anchor link — smooth scroll */
  const goAnchor = (e: React.MouseEvent, to: string) => {
    e.preventDefault()
    setMenuOpen(false)
    if (!to.includes('#')) return
    const [path, hash] = to.split('#')
    const scroll = () => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    if (window.location.pathname !== '/' && path === '/') {
      navigate('/')
      setTimeout(scroll, 150)
    } else scroll()
  }

  /* "Biz haqimizda" - navigate va sahifa tepasiga */
  const goAbout = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(false)
    navigate('/about')
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)
  }

  const LINKS = [
    { label: t('Asosiy', 'Главная'),          to: '/',        isAbout: false },
    { label: t('Biz haqimizda', 'О нас'),     to: '/about',   isAbout: true  },
    { label: t('Xizmatlar', 'Услуги'),        to: '/#features', isAbout: false },
    { label: t('Ustalar', 'Мастера'),         to: '/masters', isAbout: false },
    { label: t('FAQ', 'FAQ'),                 to: '/#faq',    isAbout: false },
    { label: t('Aloqa', 'Контакты'),          to: '/#contact',isAbout: false },
  ]

  const renderLink = (link: typeof LINKS[0], cls: string, close?: () => void) => {
    if (link.isAbout) {
      return (
        <a key={link.label} href="/about" className={cls} onClick={(e) => { goAbout(e); close?.() }}>
          {link.label}
        </a>
      )
    }
    if (link.to.includes('#')) {
      return (
        <a key={link.label} href={link.to} className={cls} onClick={(e) => goAnchor(e, link.to)}>
          {link.label}
        </a>
      )
    }
    return (
      <NavLink
        key={link.label}
        to={link.to}
        end
        className={({ isActive }) => `${cls}${isActive ? ' active' : ''}`}
        onClick={() => close?.()}
      >
        {link.label}
      </NavLink>
    )
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner">

          <NavLink to="/" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logoImg} alt="Chaqir" />
          </NavLink>

          <ul className="navbar__links">
            {LINKS.map(link => <li key={link.label}>{renderLink(link, 'navbar__link')}</li>)}
          </ul>

          <div className="navbar__right">
            {/* Til tugmasi */}
            <button
              className={`navbar__lang${lang === 'uz' ? '' : ' navbar__lang--active'}`}
              onClick={() => setLang(lang === 'uz' ? 'ru' : 'uz')}
            >
              {lang === 'uz' ? '🇺🇿 UZ' : '🇷🇺 RU'}
            </button>

            <button className="navbar__download">
              <FiDownload />
              {t('Yuklab olish', 'Скачать')}
            </button>

            <button
              className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
              onClick={() => setMenuOpen(p => !p)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menyu */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <div className="mobile-menu__backdrop" onClick={() => setMenuOpen(false)} />
        <div className="mobile-menu__panel">
          {LINKS.map(link => renderLink(link, 'mobile-menu__link', () => setMenuOpen(false)))}
          <div className="mobile-menu__divider" />
          <button className="mobile-menu__btn"><FiDownload /> App Store</button>
          <button className="mobile-menu__btn mobile-menu__btn--dark"><FiDownload /> Google Play</button>
        </div>
      </div>
    </>
  )
}
