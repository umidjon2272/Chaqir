import React from 'react'
import { useLang } from '../../context/LangContext'
import './CTA.scss'

export default function CTA() {
  const { t } = useLang()
  const CARDS = [
    { icon: '💰', uz: "O'rtacha oylik daromad", ru: 'Средний месячный доход',  vuz: "3 500 000 so'm", vru: '~400 USD' },
    { icon: '📅', uz: 'Ish jadvali',            ru: 'График работы',           vuz: "O'zingiz belgilaysiz", vru: 'Сами определяете' },
    { icon: '🤝', uz: 'Yangi mijozlar',          ru: 'Новые клиенты',          vuz: 'Har kuni', vru: 'Каждый день' },
  ]
  return (
    <section className="cta" id="for-masters">
      <div className="cta__inner">
        <div className="cta__left">
          <span className="cta__tag">{t('Ustalar uchun', 'Для мастеров')}</span>
          <h2 className="cta__title">{t("Usta bo'lsangiz —\nChaqir bilan ishlang!", "Если вы мастер —\nработайте с Chaqir!")}</h2>
          <p className="cta__desc">{t("O'z xizmatingizni taqdim eting, yangi mijozlar toping.", 'Предлагайте свои услуги, находите новых клиентов.')}</p>
          <div className="cta__btns">
            <button className="btn-orange">{t("Ro'yxatdan o'tish", 'Зарегистрироваться')}</button>
            <button className="btn-ghost">{t('Biznes uchun', 'Для бизнеса')}</button>
          </div>
        </div>
        <div className="cta__cards">
          {CARDS.map(c => (
            <div key={c.uz} className="cta__card">
              <div className="cta__card-icon">{c.icon}</div>
              <div>
                <span className="cta__card-label">{t(c.uz, c.ru)}</span>
                <span className="cta__card-value">{t(c.vuz, c.vru)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
