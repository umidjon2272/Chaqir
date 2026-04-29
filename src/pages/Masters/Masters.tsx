import React, { useState } from 'react'
import { useLang } from '../../context/LangContext'
import './Masters.scss'

const CATEGORIES_UZ = ['Hammasi', 'Haladilnik', 'Santexnika', 'Elektrik', "Uy ta'miri", 'Konditsioner']
const CATEGORIES_RU = ['Все', 'Холодильник', 'Сантехника', 'Электрика', 'Ремонт', 'Кондиционер']

const MASTERS = [
  {
    emoji: '👷', name: 'Sherzod Karimov',
    specUz: "Haladilnik ta'miri mutaxassisi", specRu: 'Специалист по ремонту холодильников',
    tagsUz: ['Haladilnik', 'Konditsioner', 'Muzlatgich'], tagsRu: ['Холодильник', 'Кондиционер', 'Морозилка'],
    rating: '4.9', orders: 234, exp: 8, reviews: 198,
    works: ['❄️', '🔧', '🌡️', '⚙️', '🛠️', '❄️'],
    cat: 'Haladilnik',
  },
  {
    emoji: '🔌', name: 'Jasur Toshmatov',
    specUz: "Elektrik ishlar bo'yicha usta", specRu: 'Мастер по электрическим работам',
    tagsUz: ['Elektrik', 'Provodka', 'Rozetka'], tagsRu: ['Электрика', 'Проводка', 'Розетки'],
    rating: '4.8', orders: 187, exp: 6, reviews: 154,
    works: ['💡', '🔌', '⚡', '🔦', '🛠️', '📦'],
    cat: 'Elektrik',
  },
  {
    emoji: '🚿', name: 'Bobur Yusupov',
    specUz: 'Santexnika mutaxassisi', specRu: 'Специалист по сантехнике',
    tagsUz: ['Santexnika', 'Quvur', 'Kran'], tagsRu: ['Сантехника', 'Трубы', 'Краны'],
    rating: '4.7', orders: 312, exp: 10, reviews: 278,
    works: ['🚿', '🚰', '🪠', '🔧', '💧', '🛁'],
    cat: 'Santexnika',
  },
  {
    emoji: '🏠', name: 'Mirzo Nazarov',
    specUz: "Uy ta'miri bo'yicha usta", specRu: 'Мастер по ремонту жилья',
    tagsUz: ["Devor ta'miri", 'Pol', 'Shiplar'], tagsRu: ['Стены', 'Полы', 'Потолки'],
    rating: '4.9', orders: 156, exp: 12, reviews: 143,
    works: ['🏠', '🪣', '🔨', '🖌️', '🛠️', '🏗️'],
    cat: "Uy ta'miri",
  },
  {
    emoji: '❄️', name: 'Sardor Aliyev',
    specUz: 'Konditsioner o\'rnatish va ta\'miri', specRu: 'Установка и ремонт кондиционеров',
    tagsUz: ['Konditsioner', 'O\'rnatish', 'Ta\'mir'], tagsRu: ['Кондиционер', 'Установка', 'Ремонт'],
    rating: '4.8', orders: 203, exp: 7, reviews: 187,
    works: ['❄️', '🌬️', '🔧', '⚙️', '🛠️', '❄️'],
    cat: 'Konditsioner',
  },
  {
    emoji: '🔧', name: 'Ulugbek Rahimov',
    specUz: 'Kir yuvish mashina ta\'miri', specRu: 'Ремонт стиральных машин',
    tagsUz: ['Kir mashina', 'Texnika', 'Ta\'mir'], tagsRu: ['Стиральная машина', 'Техника', 'Ремонт'],
    rating: '4.6', orders: 128, exp: 5, reviews: 112,
    works: ['🫧', '🔧', '⚙️', '🛠️', '🔌', '🪛'],
    cat: 'Haladilnik',
  },
]

export default function MastersPage() {
  const { t } = useLang()
  const [activeFilter, setActiveFilter] = useState(0)

  const categories = t(CATEGORIES_UZ.join('|'), CATEGORIES_RU.join('|')).split('|')

  const filtered = activeFilter === 0
    ? MASTERS
    : MASTERS.filter(m => m.cat === CATEGORIES_UZ[activeFilter])

  return (
    <main className="masters-page">

      <div className="masters-page__hero">
        <div className="masters-page__hero-inner">
          <span className="section-tag">{t('Mutaxassislar', 'Специалисты')}</span>
          <h1 className="masters-page__hero-title">
            {t('Bizning ustalarimiz', 'Наши мастера')}
          </h1>
          <p className="masters-page__hero-desc">
            {t(
              "Barcha ustalar tekshirilgan va sertifikatlangan. Ularning ishlari va reytinglarini ko'ring.",
              'Все мастера проверены и сертифицированы. Смотрите их работы и рейтинги.'
            )}
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="masters-page__filter">
        <div className="masters-page__filter-inner">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`masters-page__filter-btn${activeFilter === i ? ' masters-page__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(i)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="masters-page__content">
        <div className="masters-page__content-inner">
          <div className="masters-page__grid">
            {filtered.map(master => (
              <div key={master.name} className="masters-page__card">

                <div className="masters-page__card-header">
                  <div className="masters-page__card-avatar">{master.emoji}</div>
                  <div className="masters-page__card-info">
                    <div className="masters-page__card-name">{master.name}</div>
                    <div className="masters-page__card-spec">{t(master.specUz, master.specRu)}</div>
                    <div className="masters-page__card-rating">⭐ {master.rating}</div>
                  </div>
                </div>

                <div className="masters-page__card-body">
                  <div className="masters-page__card-tags">
                    {(t(master.tagsUz.join('|'), master.tagsRu.join('|'))).split('|').map(tag => (
                      <span key={tag} className="masters-page__card-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="masters-page__card-stats">
                    <div className="masters-page__card-stat">
                      <div className="masters-page__card-stat-num">{master.orders}</div>
                      <div className="masters-page__card-stat-label">{t('Buyurtma', 'Заказов')}</div>
                    </div>
                    <div className="masters-page__card-stat">
                      <div className="masters-page__card-stat-num">{master.exp}</div>
                      <div className="masters-page__card-stat-label">{t('Yil tajriba', 'Лет опыта')}</div>
                    </div>
                    <div className="masters-page__card-stat">
                      <div className="masters-page__card-stat-num">{master.reviews}</div>
                      <div className="masters-page__card-stat-label">{t('Sharh', 'Отзывов')}</div>
                    </div>
                  </div>

                  {/* Bajarilgan ishlar */}
                  <div className="masters-page__card-works">
                    <div className="masters-page__card-works-title">
                      {t("Bajarilgan ishlar", 'Выполненные работы')}
                    </div>
                    <div className="masters-page__card-works-grid">
                      {master.works.map((w, i) => (
                        <div key={i} className="masters-page__card-works-img">{w}</div>
                      ))}
                    </div>
                  </div>

                  <button className="masters-page__card-btn">
                    {t("Usta bilan bog'lanish", 'Связаться с мастером')}
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  )
}
