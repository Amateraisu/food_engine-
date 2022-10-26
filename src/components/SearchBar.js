
import React , {useState} from 'react'

const SearchBar = ({onChangeHandler, onClickHandler}) => {
    return (
    <div className = 'header' >
      <form className = 'add-form' onChange={onChangeHandler}>
        <div className = 'form-control'>
            <input 
                type='text' 
                placeholder='Find Restaurants...'
                class = "rounded-pill"
                className = 'search rounded-pill'
            />
            <input  type='submit' value='SEARCH' className='btn btn-block' onClick={onClickHandler}></input>
        </div>
        
      </form>

    </div>
  )
}

export default SearchBar