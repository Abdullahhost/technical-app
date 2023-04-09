import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { modalSliceActions } from '../../../../../settings/reducer/modalSlice';


const FinalBookModal = () => {

  const finalModal = useSelector(state => state.modal.finalBookModal);
  const calculationPrice = useSelector(state => state.form);

  const dispatch = useDispatch();

  const handleFinalAggrement = () => {
    window.location.reload()    
    dispatch(modalSliceActions.toogleFinalBookModal())
  }

  return (
    <div>
      { finalModal && <div className='book_modal  scale-up-ver-center'>
            <h3>Book a  { calculationPrice.productName  } Product</h3>
            <p>Your Estimated price is : {calculationPrice.calculatePrice + '$'}</p>
            <p>Do you want to procedure?</p>
            <div className='book_modal-button'>
              <button className='btn-agree' onClick={handleFinalAggrement}>Yes</button>
              <button className='btn-primary' onClick={() => dispatch(modalSliceActions.toogleFinalBookModal())} >No </button>             
            </div>
        </div>
      }
    </div>
  )
}

export default FinalBookModal
