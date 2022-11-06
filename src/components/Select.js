import React from 'react'

const Select = ({ onChangeHandler }) => {
  return (
    <div className="selectType">
        <form className="selectCuisine">
            <p>Filters:</p>
            <select id="select1" onChange={onChangeHandler}>
                <option value="None" >-</option>
                <option value="RateDesc" >Ratings - Descending</option>
                <option value="RateAsce">Ratings - Ascending</option>
            </select>
        </form>
    </div>
  )
}

export default Select
