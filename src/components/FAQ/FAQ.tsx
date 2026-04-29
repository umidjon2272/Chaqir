import React, { useState } from 'react'
import { FiMessageCircle } from 'react-icons/fi'
import { useLang } from '../../context/LangContext'
import './FAQ.scss'

export default function FAQ() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(0)

  const FAQS = [
    { quz: 'Chaqir nima?',                              qru: 'Что такое Chaqir?',                       auz: "Chaqir — uy va ofis muammolaringizni hal qiladigan eng yaqin ustani topishga yordam beruvchi platforma.",  aru: "Chaqir — платформа для поиска ближайшего мастера, который решит ваши домашние и офисные проблемы." },
    { quz: "Qanday xizmatlarga usta topsa bo'ladi?",    qru: 'Какие услуги доступны?',                  auz: "Haladilnik, santexnika, elektrik, uy ta'miri, konditsioner va ko'plab boshqa xizmatlar.",                aru: "Холодильник, сантехника, электрика, ремонт, кондиционер и многие другие услуги." },
    { quz: "Usta qanchalik tez keladi?",                qru: 'Как быстро приедет мастер?',              auz: "Ko'p holatlarda eng yaqin usta 30–60 daqiqa ichida keladi.",                                             aru: "В большинстве случаев ближайший мастер приезжает в течение 30–60 минут." },
    { quz: "To'lov qanday amalga oshiriladi?",          qru: 'Как происходит оплата?',                  auz: "Xavfsiz to'lov: ish bajarilmaguncha pul saqlanib turadi.",                                               aru: "Безопасная оплата: деньги хранятся до выполнения работы." },
    { quz: "Usta sifatida ro'yxatdan o'tsa bo'ladimi?", qru: 'Можно ли зарегистрироваться мастером?',  auz: "Ha! Ilovada ro'yxatdan o'ting. Hujjatlar tekshirilgach, yangi mijozlar topa boshlaysiz.",                  aru: "Да! Зарегистрируйтесь в приложении. После проверки документов начнёте получать клиентов." },
    { quz: "Xizmat qaysi shaharlarda mavjud?",          qru: 'В каких городах работает сервис?',        auz: "Hozirda Toshkent va Toshkent viloyatida faoliyat yuritamiz.",                                             aru: "Сейчас работаем в Ташкенте и Ташкентской области." },
  ]

  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <div className="faq__left">
          <span className="section-tag">{t('Savol-Javob', 'Вопрос-Ответ')}</span>
          <h2 className="faq__title">{t("Ko'p so'raladigan savollar", 'Часто задаваемые вопросы')}</h2>
          <p className="faq__desc">{t("Javob topa olmadingizmi? Bizga murojaat qiling.", 'Не нашли ответ? Обратитесь к нам.')}</p>
          <button className="faq__contact-btn"><FiMessageCircle /> {t('Aloqa', 'Контакты')}</button>
        </div>
        <div className="faq__list">
          {FAQS.map((item, i) => (
            <div key={i} className={`faq__item${open === i ? ' faq__item--open' : ''}`}>
              <div className="faq__question" onClick={() => setOpen(open === i ? null : i)}>
                <span className="faq__q-text">{t(item.quz, item.qru)}</span>
                <div className="faq__icon">+</div>
              </div>
              <div className={`faq__answer${open === i ? ' faq__answer--open' : ''}`}>{t(item.auz, item.aru)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
