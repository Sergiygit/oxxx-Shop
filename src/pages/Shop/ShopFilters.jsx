// src/pages/Shop/ShopFilters.jsx


const ShopFilters = ({
  sortOrder,
  setSortOrder,
  filterEtFrom,
  filterEtTo,
  handleEtFromChange,
  handleEtToChange,
  handleClearEtFilter
}) => {
  return (
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

      <button onClick={handleClearEtFilter}>
        Скинути фільтр ET
      </button>
    </div>
  );
};

export default ShopFilters;
