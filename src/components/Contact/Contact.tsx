import React, { useState } from 'react'
import { FiMail, FiPhone, FiClock } from 'react-icons/fi'
import { useLang } from '../../context/LangContext'
import './Contact.scss'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true) }

  const INFO = [
    { icon: <FiMail />,  uz: 'Email',     ru: 'Email',        val: 'info@chaqir.uz' },
    { icon: <FiPhone />, uz: 'Telefon',   ru: 'Телефон',      val: '+998 71 200 00 00' },
    { icon: <FiClock />, uz: 'Ish vaqti', ru: 'Рабочее время',val: t('Du-Sha: 09:00 – 18:00', 'Пн-Сб: 09:00 – 18:00') },
  ]

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div>
          <span className="section-tag">{t('Aloqa', 'Контакты')}</span>
          <h2 className="contact__title">{t("Biz bilan bog'laning", 'Свяжитесь с нами')}</h2>
          <p className="contact__desc">{t("Savol, taklif yoki hamkorlik bo'yicha murojaat qilsangiz — tez javob beramiz.", 'По вопросам, предложениям или сотрудничеству — ответим быстро.')}</p>
          <div className="contact__info-list">
            {INFO.map(item => (
              <div key={item.uz} className="contact__info-item">
                <div className="contact__info-icon">{item.icon}</div>
                <div>
                  <span className="contact__info-label">{t(item.uz, item.ru)}</span>
                  <span className="contact__info-value">{item.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact__form-box">
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">✅</div>
              <h3 className="contact__success-title">{t('Xabar yuborildi!', 'Сообщение отправлено!')}</h3>
              <p className="contact__success-desc">{t('Tez orada siz bilan bog\'lanamiz.', 'Мы свяжемся с вами в ближайшее время.')}</p>
            </div>
          ) : (
            <>
              <h3 className="contact__form-title">{t('Xabar yuboring', 'Напишите нам')}</h3>
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__row">
                  <div className="contact__field">
                    <label className="contact__label">{t('Ism Sharif', 'Имя Фамилия')}</label>
                    <input className="contact__input" placeholder={t('Ismoil Karimov', 'Иван Иванов')} value={form.name} onChange={set('name')} required />
                  </div>
                  <div className="contact__field">
                    <label className="contact__label">{t('Telefon raqam', 'Номер телефона')}</label>
                    <input className="contact__input" placeholder="+998 90 000 00 00" value={form.phone} onChange={set('phone')} required />
                  </div>
                </div>
                <div className="contact__field">
                  <label className="contact__label">{t('Xabar', 'Сообщение')}</label>
                  <textarea className="contact__textarea" placeholder={t('Muammo yoki savol haqida yozing...', 'Напишите о проблеме или вопросе...')} value={form.message} onChange={set('message')} required />
                </div>
                <button type="submit" className="contact__submit">{t('Yuborish →', 'Отправить →')}</button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
