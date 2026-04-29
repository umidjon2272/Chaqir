import React from 'react'
import { FiEdit3, FiMapPin, FiMessageSquare, FiCheckCircle } from 'react-icons/fi'
import { useLang } from '../../context/LangContext'
import './HowItWorks.scss'

export default function HowItWorks() {
  const { t } = useLang()
  const STEPS = [
    { num: '01', icon: <FiEdit3 />,         uz: 'Muammoni yozing',   ru: 'Опишите проблему',    duz: "Qaysi asbob-uskuna buzilgani haqida yozing.",      dru: "Опишите, что сломалось и в чём проблема.",        featured: false },
    { num: '02', icon: <FiMapPin />,         uz: 'Usta tanlang',      ru: 'Выберите мастера',    duz: "Joylashuvga yaqin, reytingi yuqori ustani tanlang.", dru: "Выберите ближайшего мастера с высоким рейтингом.", featured: true  },
    { num: '03', icon: <FiMessageSquare />,  uz: 'Kelishing',         ru: 'Договоритесь',        duz: "Usta bilan chat — narx va vaqtni kelishing.",        dru: "Договоритесь о цене и времени через чат.",        featured: false },
    { num: '04', icon: <FiCheckCircle />,    uz: 'Muammo hal!',       ru: 'Готово!',             duz: "Usta ishni bajaradi, siz baho berasiz.",             dru: "Мастер выполняет работу, вы оставляете оценку.",  featured: false },
  ]
  return (
    <section className="how" id="how-it-works">
      <div className="how__inner">
        <div className="how__header">
          <span className="section-tag">{t('Qanday ishlaydi', 'Как это работает')}</span>
          <h2 className="how__title">{t('4 qadam — hal qilindi!', '4 шага — и готово!')}</h2>
          <p className="how__desc">{t('Uydan chiqmasdan, telefon orqali hal qiling.', 'Решите проблему не выходя из дома.')}</p>
        </div>
        <div className="how__grid">
          {STEPS.map(s => (
            <div key={s.num} className={`how__step${s.featured ? ' how__step--featured' : ''}`}>
              <div className="how__step-num">{s.num}</div>
              <div className="how__step-icon">{s.icon}</div>
              <h3 className="how__step-title">{t(s.uz, s.ru)}</h3>
              <p className="how__step-desc">{t(s.duz, s.dru)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
