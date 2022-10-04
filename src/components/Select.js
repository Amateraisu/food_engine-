import React from 'react'

const Select = ({ onChangeHandler, onClickHandler }) => {
  return (
    <div className="selectType">
        <form className="selectCuisine">
            <p>Choose Cuisine:</p>
            <select id="select1" onChange={onChangeHandler}>
                <option value="All" >All</option>
                <option value="Chinese" >Chinese</option>
                <option value="Japanese">Japanese</option>
                <option value="Pizza">Pizza</option>
            </select>
            <input  type='submit' value='FILTER' className='btn btn-block' onClick ={onClickHandler} ></input>
        </form>
    </div>
  )
}

export default Select
