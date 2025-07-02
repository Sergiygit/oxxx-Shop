// import React, { useCallback } from 'react';
// import { useShopItems } from '../../hooks/useShopitems';
// import { Link } from 'react-router-dom';

// const ShopCategoryList = ({ filtered, setFiltered }) => {
// 	const { items = [] } = useShopItems();

// 	const tabs = [...new Set(items.map(({ category }) => category))];
// 	const filterCategory = filtered.map((el) => el.category)

// 	const toggleTab = useCallback((tab) => {
// 		if (tab === null) {
// 			setFiltered([]);
// 		} else {
// 			setFiltered(items.filter((item) => item.category === tab));

// 		}
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, []);

// 	return (
// 		<div className='shop-list__category'>
// 			<li
// 				className={`shop-list__category-item ${filterCategory.length === 0 ? 'active' : ''}`}
// 				onClick={() => toggleTab(null)}
// 			>
// 				All Categories
// 			</li>

// 			{tabs.map((category, idx) => (
// 				// <Link to={`/shop/${category}`}
// 				<li
// 					className={`shop-list__category-item ${filterCategory[0] !== category ? '' : 'active'}`}
// 					key={idx} onClick={() => toggleTab(category)}>
// 					{category}
// 				 {/* </Link> */}
// </li>
// 			))}

// 		</div>
		
// 	);
// };

// export default ShopCategoryList;


// import React, { useEffect, useMemo } from 'react';
// import { useShopItems } from '../../hooks/useShopitems';
// import { Link, useParams, useNavigate } from 'react-router-dom';

// const ShopCategoryList = ({ filtered, setFiltered }) => {
//   const { items = [] } = useShopItems();
//   const { category } = useParams();
//   const navigate = useNavigate();

//   const tabs = useMemo(() => [...new Set(items.map(({ category }) => category))], [items]);
//   const filterCategory = filtered.map((el) => el.category);

//   // фільтруємо автоматично, якщо в URL є категорія
//   useEffect(() => {
//     if (category) {
//       const match = items.filter((item) => item.category === category);
//       setFiltered(match);
//     } else {
//       setFiltered([]);
//     }
//   }, [category, items, setFiltered]);

//   return (
//     <div className='shop-list__category'>
//       <li
//         className={`shop-list__category-item ${!category ? 'active' : ''}`}
//         onClick={() => navigate('/shop')}
//       >
//         All Categories
//       </li>

//       {tabs.map((tab, idx) => (
//         <li
//           key={idx}
//           className={`shop-list__category-item ${category === tab ? 'active' : ''}`}
//         >
//           <Link to={`/shop/${tab}`}>
//             {tab}
//           </Link>
//         </li>
//       ))}
//     </div>
//   );
// };

// export default ShopCategoryList;



import React, { useEffect, useMemo } from 'react';
import { useShopItems } from '../../hooks/useShopitems';
import { Link, useParams, useNavigate } from 'react-router-dom';

const ShopCategoryList = ({ filtered, setFiltered }) => {
  const { items = [] } = useShopItems();
  const { category } = useParams();
  const navigate = useNavigate();

  const tabs = useMemo(() => [...new Set(items.map(({ category }) => category))], [items]);
  const filterCategory = filtered.map((el) => el.category);

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
        onClick={() => navigate('/shop')}
      >
        All Categories
      </li>

      {tabs.map((tab, idx) => (
        <li
          key={idx}
          className={`shop-list__category-item ${category === tab ? 'active' : ''}`}
        >
          <Link to={`/shop/category/${tab}`}>
            {tab}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default ShopCategoryList;