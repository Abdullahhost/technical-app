import React from 'react'

import Search from '../search'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { modalSliceActions } from '../../../../settings/reducer/modalSlice'

const Navbar = () => {
  const dispatch = useDispatch();
  const openSlider = useSelector(state => state.modal.openSlider);

  const openModal = () => {
    dispatch(modalSliceActions.toogleSlider())
  }
  return (
    <div className='navbar'>
      <div className='navbar_brand'>
        <h3 className='background__text'>TECHNICAL APP</h3>
      </div> 

      <div className='navbar_search'>
        <Search />
        <button className='btn-agree' onClick={openModal}>{ openSlider ? 'Close' : "Slider" }</button>
      </div>  
       
    </div>
  )
}

export default Navbar
