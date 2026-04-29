import React from 'react'
import { FiMapPin, FiCheckCircle, FiMessageSquare, FiLock } from 'react-icons/fi'
import { MdStorefront } from 'react-icons/md'
import { useLang } from '../../context/LangContext'
import './Features.scss'

export default function Features() {
  const { t } = useLang()

  const CARDS = [
    { icon: <FiMapPin />,        uz: 'Eng yaqin ustalar',           ru: 'Ближайшие мастера',          duz: "GPS orqali sizga eng yaqin va hozir bo'sh ustalari chiqaradi.", dru: "GPS показывает ближайших свободных мастеров." },
    { icon: <FiCheckCircle />,   uz: 'Tekshirilgan mutaxassislar',   ru: 'Проверенные специалисты',    duz: "Barcha ustalar hujjatlari tekshirilgan. Reyting va sharhlarni ko'ring.", dru: "Все мастера проверены. Смотрите рейтинг и отзывы." },
    { icon: <FiMessageSquare />, uz: 'Jonli chat',                   ru: 'Живой чат',                  duz: "Usta bilan bevosita muloqot qiling, narx va vaqtni kelishing.", dru: "Общайтесь с мастером напрямую, договаривайтесь о цене." },
    { icon: <FiLock />,          uz: "Xavfsiz to'lov",               ru: 'Безопасная оплата',          duz: "Ish bajarilmaguncha pul saqlanib turadi.", dru: "Деньги хранятся до выполнения работы." },
  ]

  return (
    <section className="features" id="features">
      <div className="features__inner">
        <div className="features__header">
          <span className="section-tag">{t('Nima uchun Chaqir', 'Почему Chaqir')}</span>
          <h2 className="features__title">{t('Hammasi bir joyda', 'Всё в одном месте')}</h2>
          <p className="features__desc">{t("Usta topishdan to'lovgacha — barchasi qulay, tez va ishonchli.", 'От поиска мастера до оплаты — всё удобно, быстро и надёжно.')}</p>
        </div>
        <div className="features__grid">
          {CARDS.map(c => (
            <div key={c.uz} className="features__card">
              <div className="features__card-icon">{c.icon}</div>
              <h3 className="features__card-title">{t(c.uz, c.ru)}</h3>
              <p className="features__card-desc">{t(c.duz, c.dru)}</p>
            </div>
          ))}
          <div className="features__card features__card--wide">
            <div>
              <div className="features__card-icon"><MdStorefront /></div>
              <h3 className="features__card-title">{t("Biznes va do'kon egalari uchun", 'Для бизнеса и владельцев магазинов')}</h3>
              <p className="features__card-desc">{t("Do'koningizni ro'yxatga oling — minglab yangi mijozlar toping.", 'Зарегистрируйте магазин — привлекайте тысячи новых клиентов.')}</p>
            </div>
            <div className="features__card-emoji">🏪</div>
          </div>
        </div>
      </div>
    </section>
  )
}
