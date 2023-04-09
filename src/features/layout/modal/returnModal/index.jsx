import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { returnSliceActions } from '../../../../settings/reducer/handleReturnProduct';
import { modalSliceActions } from '../../../../settings/reducer/modalSlice';
import FinalReturnModal from './finalReturnModal';
const ReturnModal = () => {
  const returnState = useSelector(state => state.modal);
  const productInfo = useSelector(state => state.return);

  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(returnSliceActions.handleChange(e.target.value))
  }

  const handleFinalagreement = () => {
    dispatch(modalSliceActions.toogleAndOpenReturn())
    dispatch(returnSliceActions.returnProduct())
  }
  return (
    <div>
        {returnState.returnBookModal && <div className='book_modal  scale-up-ver-center'>
            <h3>Book { productInfo.productName} Product</h3>
            <div className='book_modal-select'>
              <select onChange={handleChange}>
                <option value="">select a product for rent</option>
                {JSON.parse(localStorage.getItem('rentInfo'))?.map((element) => {
                  return <option key={element.id}  value={element.name}>{element.name}</option>
                })}
              </select>
            </div>
                
            <div className='book_modal-button'>
                <button className='btn-agree' onClick={handleFinalagreement}>Yes</button>
                <button className='btn-primary' onClick={() => dispatch(modalSliceActions.toogleReturn())}>No</button>
            </div>         
            </div>
          }

        {returnState.finalReturnBookModal &&  <FinalReturnModal />}
          
    </div>
  )
}

export default ReturnModal
