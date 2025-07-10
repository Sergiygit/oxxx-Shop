import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams, useParams } from 'react-router-dom'
import Preloader from '../../components/Preloader/Preloader'
import Section from '../../components/Section/Section'
import PageTitle from '../../components/Title/PageTitle'
import { useShopItems } from '../../hooks/useShopitems'



// components
import ShopCard from './ShopCard'
import ShopCategoryList from './ShopCategoryList'
import ShopFilters from './ShopFilters'

const ShopPage = () => {
  const { items = [], isLoading } = useShopItems()
  const [searchParams, setSearchParams] = useSearchParams()

  // з URL беремо size і pcd
  const { size: paramSize, pcd: paramPCD } = useParams()

  const [filtered, setFiltered] = useState([])
  const [sortOrder, setSortOrder] = useState('asc')

  // з URL беремо параметри ET
  const etFromParam = searchParams.get('etFrom') || ''
  const etToParam = searchParams.get('etTo') || ''

  const [filterEtFrom, setFilterEtFrom] = useState(etFromParam)
  const [filterEtTo, setFilterEtTo] = useState(etToParam)

  // оновлюємо локальний стан при зміні URL
  useEffect(() => {
    setFilterEtFrom(etFromParam)
    setFilterEtTo(etToParam)
  }, [etFromParam, etToParam])

  const baseItems = filtered.length ? filtered : items

  // фільтрація по ET
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

  // сортування по ціні
  const sortedItems = useMemo(() => {
    return [...filteredByEt].sort((a, b) => {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    })
  }, [filteredByEt, sortOrder])

  // зміни полів ET
  const handleEtFromChange = e => {
    const val = e.target.value
    setFilterEtFrom(val)

    const params = Object.fromEntries(searchParams.entries())
    if (val) params.etFrom = val
    else delete params.etFrom

    setSearchParams(params)
  }

  const handleEtToChange = e => {
    const val = e.target.value
    setFilterEtTo(val)

    const params = Object.fromEntries(searchParams.entries())
    if (val) params.etTo = val
    else delete params.etTo

    setSearchParams(params)
  }

  const handleClearEtFilter = () => {
    setFilterEtFrom('')
    setFilterEtTo('')
    const params = Object.fromEntries(searchParams.entries())
    delete params.etFrom
    delete params.etTo
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
            <ShopCategoryList
              filtered={filtered}
              setFiltered={setFiltered}
              selectedSize={paramSize}
              selectedPCD={paramPCD}
            />

            <ShopFilters
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              filterEtFrom={filterEtFrom}
              filterEtTo={filterEtTo}
              handleEtFromChange={handleEtFromChange}
              handleEtToChange={handleEtToChange}
              handleClearEtFilter={handleClearEtFilter}
            />

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
