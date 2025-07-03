import React, { useEffect, useMemo } from 'react';
import { useShopItems } from '../../hooks/useShopitems';
import { Link, useParams, useNavigate, useSearchParams } from 'react-router-dom';

const ShopCategoryList = ({ filtered, setFiltered }) => {
  const { items = [] } = useShopItems();
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Зберемо поточні параметри у рядок
  const queryString = searchParams.toString(); // наприклад 'etFrom=40&etTo=50'

  const tabs = useMemo(() => [...new Set(items.map(({ category }) => category))], [items]);

  // фільтруємо автоматично, якщо в URL є категорія
  useEffect(() => {
    if (category) {
      const match = items.filter((item) => item.category === category);
      setFiltered(match);
    } else {
      setFiltered([]);
    }
  }, [category, items, setFiltered]);

  return (
    <div className='shop-list__category'>
      <li
        className={`shop-list__category-item ${!category ? 'active' : ''}`}
        onClick={() => navigate(`/shop${queryString ? `?${queryString}` : ''}`)}
      >
        All Categories
      </li>

      {tabs.map((tab, idx) => (
        <li
          key={idx}
          className={`shop-list__category-item ${category === tab ? 'active' : ''}`}
        >
          <Link to={`/shop/category/${encodeURIComponent(tab)}${queryString ? `?${queryString}` : ''}`}>
            {tab}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default ShopCategoryList;
