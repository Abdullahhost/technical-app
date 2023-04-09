import React from 'react'

import './index.css'
import { useDispatch } from 'react-redux'
import { searchSliceActions } from '../../../../settings/reducer/searchFucnSlice';

const Search = () => {
const dispatch = useDispatch();

  return (
    <div className='search-container '>
      <input type="text"
        placeholder='search...'
        onChange={(e) => dispatch(searchSliceActions.handleChange(e.target.value))}
      />
    </div>
  )
}

export default Search
