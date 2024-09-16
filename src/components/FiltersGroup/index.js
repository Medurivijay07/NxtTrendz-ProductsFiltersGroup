import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    onChangeSearchInput,
    onCategoryChange,
    onChangingRating,
    onClearFilters,
  } = props

  const onChangeInput = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onChangeSearchInput(event.target.value)
    }
  }
  return (
    <div className="filters-group-container">
      <input type="search" onKeyDown={onChangeInput} placeholder="search" />
      <h1>Category</h1>
      <ul className="category-list">
        {categoryOptions.map(Item => (
          <li>
            <button
              type="button"
              key={Item.categoryId}
              onClick={() => onCategoryChange(Item.categoryId)}
              className="category-button"
            >
              <p>{Item.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1>Rating</h1>
      {ratingsList.map(Item => (
        <button
          type="button"
          className="stars-container"
          key={Item.ratingId}
          onClick={() => onChangingRating(Item.ratingId)}
        >
          <img
            src={Item.imageUrl}
            className="stars-image-width"
            alt={`rating ${Item.ratingId}`}
          />
          <p>& up</p>
        </button>
      ))}
      <button
        type="button"
        className="clear-filter-button"
        onClick={onClearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
