import React from 'react'

import './index.css'
import FinalBookModal from './finalBookModal'
import { useDispatch, useSelector } from 'react-redux'
import { modalSliceActions } from '../../../../settings/reducer/modalSlice'
import { formSliceActions } from '../../../../settings/reducer/formhandleSlice'

const BookModal = () => {

  const dispatch = useDispatch();

  const Data = useSelector(state=> state.fatching.jsonData)
  const date = useSelector(state=> state.form)

  const openBookModal = useSelector(state => state.modal.bookModal)
  const productInfo = useSelector(state => state.form)

  const handleToogle = () => {
    dispatch(modalSliceActions.toogleBookModal());
  }
  const handleChange = (e) => {
    dispatch(formSliceActions.handleChange(e))
  }
  const handleBook = () => {
    dispatch(modalSliceActions.openBookModal())
  }
  const handleagreement = () => {
    dispatch(modalSliceActions.toogleAndOpen())
    dispatch(formSliceActions.rentCalculation())
  }

  return (
    <div>
      <div className='btn-group'>
        <button className='btn-primary' onClick={handleBook}>Book Modal</button>
        <button className='btn-agree'onClick={() => dispatch(modalSliceActions.openReturnModal())} >Return Modal</button>
      </div>

      {openBookModal &&  <div className='book_modal  scale-up-ver-center'>
  
            <h3>Book { productInfo.productName } Product</h3>
            <h5>Product Price is:  { productInfo.productPrice } $</h5>
            <div className='book_modal-select'>

              <select onChange={handleChange}>
                <option value="">select a product for rent</option>
                {Data.map((element) => {
                  return <option key={element.id} value={element.price}>{element.name}</option>
                })}

              </select>
            </div>

            <div className='book_modal-input'>

              <div>
                <label htmlFor="date-label">From :</label>
                <input type="date"
                  value={date.startingDate}
                  onChange={(e) => dispatch(formSliceActions.handleStartingDate(e.target.value))} />
              </div> 
              <div>
                <label htmlFor="date-label">To :</label>
                <input type="date" 
                    value={date.endingDate}
                    onChange={(e) => dispatch(formSliceActions.handleEndingDate(e.target.value))}  />
              </div>
            </div>
            <div className='book_modal-button'>
              <button className='btn-agree' onClick={handleagreement}>Yes</button>
              <button className='btn-primary ' onClick={handleToogle}>No</button>
            </div>         
            </div>
          }

            <FinalBookModal />  
    </div>
  )
}

export default BookModal
