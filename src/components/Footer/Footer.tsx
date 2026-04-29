import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiSend } from 'react-icons/fi'
import { useLang } from '../../context/LangContext'
import logoImg from '../../assets/images/logo.png'
import './Footer.scss'

export default function Footer() {
  const { t } = useLang()
  const navigate = useNavigate()

  const goAbout = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/about')
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">

          <div className="footer__brand">
            <NavLink to="/" className="footer__logo">
              <img src={logoImg} alt="Chaqir" />
            </NavLink>
            <p className="footer__tagline">
              {t('Eng yaqin, ishonchli ustani bir daqiqada toping.', 'Найдите ближайшего надёжного мастера за минуту.')}
            </p>
            <div className="footer__socials">
              <div className="footer__social"><FiFacebook /></div>
              <div className="footer__social"><FiInstagram /></div>
              <div className="footer__social"><FiSend /></div>
            </div>
          </div>

          <div>
            <div className="footer__col-title">{t('Platforma', 'Платформа')}</div>
            <div className="footer__col-links">
              <NavLink to="/" className="footer__col-link">{t('Asosiy', 'Главная')}</NavLink>
              <a href="/about" className="footer__col-link" onClick={goAbout}>{t('Biz haqimizda', 'О нас')}</a>
              <a href="/#features" className="footer__col-link">{t('Xizmatlar', 'Услуги')}</a>
              <NavLink to="/masters" className="footer__col-link">{t('Ustalar', 'Мастера')}</NavLink>
              <a href="/#faq" className="footer__col-link">FAQ</a>
            </div>
          </div>

          <div>
            <div className="footer__col-title">{t('Aloqa', 'Контакты')}</div>
            <div className="footer__col-links">
              <a href="/#contact" className="footer__col-link">{t('Murojaat', 'Обратная связь')}</a>
              <a href="mailto:info@chaqir.uz" className="footer__col-link">info@chaqir.uz</a>
              <a href="tel:+998712000000" className="footer__col-link">+998 71 200 00 00</a>
            </div>
          </div>

        </div>

        <div className="footer__bottom">
          <span className="footer__copy">© 2026 Chaqir. {t('Barcha huquqlar himoyalangan.', 'Все права защищены.')} 🇺🇿</span>
          <div className="footer__stores">
            <div className="footer__store">🍎 App Store</div>
            <div className="footer__store">▶ Google Play</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
