
import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams, useParams,  } from 'react-router-dom'
import Preloader from '../../components/Preloader/Preloader'
import Section from '../../components/Section/Section'
import PageTitle from '../../components/Title/PageTitle'
import { useShopItems } from '../../hooks/useShopitems'

// components
import ShopCard from './ShopCard'
import ShopCategoryList from './ShopCategoryList'

const ShopPage = () => {
  const { items = [], isLoading } = useShopItems()
  const { category } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
 

  const [filtered, setFiltered] = useState([])

  const [sortOrder, setSortOrder] = useState('asc')

  // Отримаємо значення з URL query params
  const etFromParam = searchParams.get('etFrom') || ''
  const etToParam = searchParams.get('etTo') || ''

  // Локальний стан для полів виліту
  const [filterEtFrom, setFilterEtFrom] = useState(etFromParam)
  const [filterEtTo, setFilterEtTo] = useState(etToParam)

  // Синхронізуємо локальний стан з параметрами в URL при зміні category або params
  useEffect(() => {
    setFilterEtFrom(etFromParam)
    setFilterEtTo(etToParam)
  }, [etFromParam, etToParam, category])

  // Обираємо товари для показу (фільтровані чи всі)
  const baseItems = filtered.length ? filtered : items

  // Фільтрація по виліту в діапазоні
  const filteredByEt = useMemo(() => {
    if (!filterEtFrom && !filterEtTo) return baseItems

    const from = filterEtFrom ? Number(filterEtFrom) : -Infinity
    const to = filterEtTo ? Number(filterEtTo) : Infinity

    return baseItems.filter(el => {
      const match = el.title.match(/ET\s?(\d+)/i)
      if (!match) return false

      const etValue = Number(match[1])
      return etValue >= from && etValue <= to
    })
  }, [baseItems, filterEtFrom, filterEtTo])

  // Сортуємо по ціні
  const sortedItems = useMemo(() => {
    return [...filteredByEt].sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price
      else return b.price - a.price
    })
  }, [filteredByEt, sortOrder])

  // При зміні полів виліту — оновлюємо URL query params
  const handleEtFromChange = e => {
    const val = e.target.value
    setFilterEtFrom(val)

    // Оновлюємо query params
    const params = Object.fromEntries(searchParams.entries())
    if (val) {
      params.etFrom = val
    } else {
      delete params.etFrom
    }
    setSearchParams(params)
  }

  const handleEtToChange = e => {
    const val = e.target.value
    setFilterEtTo(val)

    const params = Object.fromEntries(searchParams.entries())
    if (val) {
      params.etTo = val
    } else {
      delete params.etTo
    }
    setSearchParams(params)
  }

  return (
    <Section className="shop-section page">
      <div className="container">
        <PageTitle text="Shop" />

        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <ShopCategoryList filtered={filtered} setFiltered={setFiltered} />

            <div
              style={{
                margin: '1rem 0',
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <label>
                Сортувати за ціною:{' '}
                <select
                  value={sortOrder}
                  onChange={e => setSortOrder(e.target.value)}
                >
                  <option value="asc">Від дешевших до дорожчих</option>
                  <option value="desc">Від дорожчих до дешевших</option>
                </select>
              </label>

              <label>
                Виліт ET від:{' '}
                <input
                  type="number"
                  placeholder="40"
                  value={filterEtFrom}
                  onChange={handleEtFromChange}
                  style={{ width: '80px' }}
                  min={0}
                />
              </label>

              <label>
                Виліт ET до:{' '}
                <input
                  type="number"
                  placeholder="50"
                  value={filterEtTo}
                  onChange={handleEtToChange}
                  style={{ width: '80px' }}
                  min={0}
                />
              </label>

              <button
                onClick={() => {
                  setFilterEtFrom('')
                  setFilterEtTo('')
                  // При очищенні фільтра очищаємо параметри з URL
                  const params = Object.fromEntries(searchParams.entries())
                  delete params.etFrom
                  delete params.etTo
                  setSearchParams(params)
                }}
              >
                Скинути фільтр ET
              </button>
            </div>

            <ul className="shop-list">
              {sortedItems.map(el => (
                <ShopCard key={el.sys.id} el={el} />
              ))}
            </ul>
          </>
        )}
      </div>
    </Section>
  )
}

export default ShopPage
