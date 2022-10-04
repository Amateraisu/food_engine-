import React , {useState} from 'react'

const Header = ({onChangeHandler, onClickHandler}) => {
    return (
    <div className = 'header' >
      <form className = 'add-form' onChange={onChangeHandler}>
        <div className = 'form-control'>
            <input 
                type='text' 
                placeholder='Find Restaurants...'
                
                className = 'search'
            />
            <input  type='submit' value='SEARCH' className='btn btn-block' onClick={onClickHandler}></input>
        </div>
        
      </form>

    </div>
  )
}

export default Header
