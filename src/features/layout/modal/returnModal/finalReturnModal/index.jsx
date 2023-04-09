import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { modalSliceActions } from '../../../../../settings/reducer/modalSlice';
import { returnSliceActions } from '../../../../../settings/reducer/handleReturnProduct';

const FinalReturnModal = () => {
  const dispatch = useDispatch();
  
  const rentInfo = useSelector(state => state.return);

  const returnProduct = () => {
    dispatch(modalSliceActions.toogleFinalReturn())
    dispatch(returnSliceActions.finalReturnProduct())
  }

  return (
    <div>
         <div className='book_modal  scale-up-ver-center'>
            <h2>Book A Product</h2>
            <br />
            <h3>Your Estimated price is : {rentInfo.totalPrice + '$'}</h3>

            <p>Your Used Mileage is : {rentInfo.mileage + '$'}</p>
            <br />
            <small>Do you want to procedure?</small>
            <div className='book_modal-button'>
              <button className='btn-agree' onClick={returnProduct} >Confirm</button>
            </div>
          </div>
    </div>
  )
}

export default FinalReturnModal
