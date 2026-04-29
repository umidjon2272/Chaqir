import React from 'react'
import { FiCheck, FiSearch } from 'react-icons/fi'
import { MdHomeRepairService } from 'react-icons/md'
import { BsShieldCheck, BsLightningCharge, BsChatDots } from 'react-icons/bs'
import { HiHome, HiMap, HiUser } from 'react-icons/hi'
import { useLang } from '../../context/LangContext'
import './Hero.scss'

export default function Hero() {
  const { t } = useLang()

  const MASTERS = [
    { emoji: '👷', name: 'Sherzod K.', spec: t('Haladilnik, Konditsioner', 'Холодильник, Кондиционер'), rating: '4.9', dist: '0.8 km' },
    { emoji: '🔧', name: 'Jasur T.',   spec: t("Elektrik, Ta'mir", 'Электрик, Ремонт'),               rating: '4.8', dist: '1.2 km' },
    { emoji: '🚿', name: 'Bobur Y.',   spec: t('Santexnika', 'Сантехника'),                            rating: '4.7', dist: '2.1 km' },
  ]

  return (
    <section className="hero" id="hero">
      <div className="hero__inner">

        <div className="hero__content">
          <div className="hero__badge">
            <MdHomeRepairService />
            {t('Xizmat bozori platformasi', 'Платформа рынка услуг')}
          </div>

          <h1 className="hero__title">
            {t('Ishonchli usta toping,', 'Найдите надёжного мастера,')}
            {' '}<span>{t('muammoingizni hal qiling', 'решите вашу проблему')}</span>
          </h1>

          <p className="hero__desc">
            {t(
              'Haladilnik, santexnika, elektr va boshqa muammolar uchun — eng yaqin, tekshirilgan ustalarga bir daqiqada ulaning.',
              'Холодильник, сантехника, электрика и другие проблемы — свяжитесь с ближайшим проверенным мастером за минуту.'
            )}
          </p>

          <div className="hero__features">
            {[
              { icon: <BsShieldCheck />, uz: 'Xavfsiz',   ru: 'Безопасно' },
              { icon: <BsLightningCharge />, uz: 'Tez',   ru: 'Быстро' },
              { icon: <BsChatDots />, uz: '24/7 aloqa',   ru: '24/7 поддержка' },
            ].map(f => (
              <div key={f.uz} className="hero__feature">
                <div className="hero__feature-icon">{f.icon}</div>
                {t(f.uz, f.ru)}
              </div>
            ))}
          </div>

          <div className="hero__stores">
            {[
              { icon: '🍎', small: 'Download on the', big: 'App Store' },
              { icon: '▶',  small: 'Get it on',       big: 'Google Play' },
            ].map(s => (
              <button key={s.big} className="hero__store-btn">
                <span className="hero__store-btn__icon">{s.icon}</span>
                <div className="hero__store-btn__texts">
                  <span className="hero__store-btn__small">{s.small}</span>
                  <span className="hero__store-btn__big">{s.big}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="hero__stats">
            {[
              { num: '5000+', uz: 'Ustalari',    ru: 'Мастеров' },
              { num: '20K+',  uz: 'Bajarilgan',  ru: 'Выполнено' },
              { num: '4.8★',  uz: 'Reyting',     ru: 'Рейтинг' },
            ].map(s => (
              <div key={s.uz}>
                <div className="hero__stat-num">{s.num}</div>
                <div className="hero__stat-label">{t(s.uz, s.ru)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TELEFON */}
        <div className="hero__visual">
          <div className="hero__phone-wrap">
            <div className="hero__float hero__float--top-left">
              <div className="hero__float-icon"><FiCheck /></div>
              {t('Muvaffaqiyatli buyurtma', 'Заказ выполнен')}
            </div>
            <div className="hero__float hero__float--top-right">
              <div className="hero__float-icon">⚡</div>
              {t('Tezkor xizmat', 'Быстрый сервис')}
            </div>
            <div className="hero__float hero__float--bottom-right">
              <div className="hero__float-icon"><BsChatDots /></div>
              {t("24/7 qo'llab-quvvatlash", '24/7 поддержка')}
            </div>

            <div className="hero__phone">
              <div className="hero__phone-screen">
                <div className="hero__phone-head">
                  <div className="hero__phone-time"><span>9:41</span><span>●●●</span></div>
                  <div className="hero__phone-greeting">{t('Salom, Dilnora! 👋', 'Привет, Дилнора! 👋')}</div>
                  <div className="hero__phone-search">
                    <FiSearch style={{ opacity: 0.6 }} />
                    {t('Usta yoki xizmat...', 'Мастер или услуга...')}
                  </div>
                </div>

                <div className="hero__phone-body">
                  <div className="hero__phone-cats">
                    {[
                      t('Hammasi', 'Все'),
                      t('Elektrik', 'Электрик'),
                      t('Santex', 'Сантех'),
                    ].map((c, i) => (
                      <div key={c} className={`hero__phone-cat${i === 0 ? ' hero__phone-cat--active' : ''}`}>{c}</div>
                    ))}
                  </div>
                  <div className="hero__phone-cards">
                    {MASTERS.map(m => (
                      <div key={m.name} className="hero__phone-card">
                        <div className="hero__phone-avatar">{m.emoji}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className="hero__phone-name">{m.name}</div>
                          <div className="hero__phone-spec">{m.spec}</div>
                          <div className="hero__phone-dist">📍 {m.dist}</div>
                        </div>
                        <div className="hero__phone-rating">★ {m.rating}</div>
                      </div>
                    ))}
                  </div>
                  <div className="hero__phone-nav">
                    <HiHome className="hero__phone-nav-icon hero__phone-nav-icon--active" />
                    <HiMap  className="hero__phone-nav-icon" />
                    <BsChatDots className="hero__phone-nav-icon" />
                    <HiUser className="hero__phone-nav-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
