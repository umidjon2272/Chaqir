import React from 'react'
import { useLang } from '../../context/LangContext'
import './About.scss'

export default function AboutPage() {
  const { t } = useLang()

  const STATS = [
    { num: '5000+', uz: 'Tekshirilgan usta',     ru: 'Проверенных мастеров' },
    { num: '20 000+', uz: 'Bajarilgan buyurtma', ru: 'Выполненных заказов' },
    { num: '4.8★', uz: "O'rtacha reyting",       ru: 'Средний рейтинг' },
    { num: '2024', uz: 'Tashkil etilgan',        ru: 'Год основания' },
  ]

  const VALUES = [
    { icon: '🤝', uz: 'Ishonch',     ru: 'Доверие',      duz: "Har bir usta tekshirilgan. Har bir to'lov xavfsiz.",   dru: "Каждый мастер проверен. Каждый платёж в безопасности." },
    { icon: '⚡', uz: 'Tezlik',      ru: 'Скорость',     duz: "Muammo paydo bo'lganda bir daqiqada yechim topiladi.", dru: "Решение находится в течение минуты после обращения." },
    { icon: '🌿', uz: 'Soddalik',    ru: 'Простота',     duz: "Ilova ishlatish juda oson.",                           dru: "Приложение очень простое в использовании." },
    { icon: '📍', uz: 'Mahalliylik', ru: 'Близость',     duz: "Har bir usta sizning mahallangizdan.",                 dru: "Каждый мастер из вашего района — быстро и дёшево." },
    { icon: '💬', uz: 'Muloqot',     ru: 'Общение',      duz: "Mijoz va usta o'rtasida to'g'ridan-to'g'ri muloqot.", dru: "Прямое общение между клиентом и мастером." },
    { icon: '📈', uz: "O'sish",      ru: 'Рост',         duz: "Ustalar uchun yangi mijozlar har kuni.",               dru: "Новые клиенты для мастеров каждый день." },
  ]

  return (
    <main className="about-page">

      <section className="about-page__hero">
        <div className="about-page__hero-inner">
          <span className="section-tag">{t('Biz haqimizda', 'О нас')}</span>
          <h1 className="about-page__hero-title">
            {t('Chaqir — xizmat bozorida ishonch va qulaylik', 'Chaqir — доверие и удобство на рынке услуг')}
          </h1>
          <p className="about-page__hero-desc">
            {t(
              "Biz 2024-yilda Toshkentda tashkil topgan startapmiz. Maqsadimiz — uy muammolarini hal qilishni oson, tez va ishonchli qilish.",
              "Мы стартап, основанный в 2024 году в Ташкенте. Наша цель — сделать решение домашних проблем простым, быстрым и надёжным."
            )}
          </p>
        </div>
      </section>

      <section className="about-page__mission">
        <div className="about-page__mission-inner">
          <div>
            <span className="section-tag">{t('Bizning missiyamiz', 'Наша миссия')}</span>
            <h2 className="about-page__mission-title">
              {t('Har bir uy muammosi ', 'Каждая проблема дома ')}<span>{t('hal qilinsin', 'должна быть решена')}</span>
            </h2>
            <p className="about-page__mission-text">
              {t(
                "O'zbekistonda har kuni minglab odamlar uy muammolari bilan yuzlashadi — haladilnik ishlamaydi, quvur sizib ketdi, elektr o'chib qoldi. Lekin ishonchli usta topish qiyin.",
                "В Узбекистане каждый день тысячи людей сталкиваются с домашними проблемами — холодильник не работает, труба течёт, свет отключился. Но найти надёжного мастера сложно."
              )}
            </p>
            <p className="about-page__mission-text">
              {t(
                "Chaqir platformasi orqali siz bir necha daqiqada tekshirilgan, eng yaqin ustani topasiz.",
                "Через платформу Chaqir вы за несколько минут найдёте проверенного ближайшего мастера."
              )}
            </p>
          </div>
          <div className="about-page__mission-visual">🌿</div>
        </div>
      </section>

      <section className="about-page__stats">
        <div className="about-page__stats-inner">
          <h2 className="about-page__stats-title">{t("Raqamlarda Chaqir", 'Chaqir в цифрах')}</h2>
          <div className="about-page__stats-grid">
            {STATS.map(s => (
              <div key={s.uz} className="about-page__stats-card">
                <div className="about-page__stats-num">{s.num}</div>
                <div className="about-page__stats-label">{t(s.uz, s.ru)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page__values">
        <div className="about-page__values-inner">
          <div className="about-page__values-header">
            <span className="section-tag">{t('Qadriyatlar', 'Ценности')}</span>
            <h2 className="about-page__values-title">{t('Biz nimaga ishonamiz', 'Во что мы верим')}</h2>
            <p className="about-page__values-desc">{t('Bu qadriyatlar har bir qarorimizda namoyon bo\'ladi.', 'Эти ценности проявляются в каждом нашем решении.')}</p>
          </div>
          <div className="about-page__values-grid">
            {VALUES.map(v => (
              <div key={v.uz} className="about-page__values-card">
                <div className="about-page__values-icon">{v.icon}</div>
                <h3 className="about-page__values-card-title">{t(v.uz, v.ru)}</h3>
                <p className="about-page__values-card-desc">{t(v.duz, v.dru)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
