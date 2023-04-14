import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux';

import './index.css'

const Table = ({data}) => {
  const Data = useSelector(state => state.fatching.jsonData)
  const forBlur = useSelector(state => state.modal)

  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(Data));
  }, [Data]);


  useEffect(() => {
    let curentDate = new Date();
  
    const interval = setInterval(() => {
      const newDate = new Date();
      if(newDate !== curentDate ){

        const functionalData = JSON.parse(localStorage.getItem('rentInfo'));
        const addingNumber = functionalData.map((element) => {
          if(element.type === 'meter'){
            
            return {...element, durability: element.durability-4, mileage:  element.mileage + 10}
          }else{
            return {...element , durability: element.durability-1, mileage: 0 };
          }
        })

        localStorage.setItem('rentInfo', JSON.stringify(addingNumber));
      }
      
    }, 60 * 60 * 24 * 1000)
    
    return () => clearInterval(interval)
  }, [])



  return (
    <div className='tableSection' style={forBlur.bookModal || forBlur.finalBookModal || forBlur.returnBookModal || forBlur.finalReturnBookModal ? {filter: 'blur(5px)', transform: 'scale(.8)', transition: 'all ease 800ms'} : {filter : 'none', transition: 'transform 350ms cubic-bezier(0, -0.34, 0.09, 1.52)'} }>
      <table>
        <thead>
        <tr>
        <th>No.</th>
          <th>Name</th>
          <th>Co</th>
          <th>Avvailiblity</th>
          <th>Need to repair</th>
          <th>Durablity</th>
          <th>Mileage</th>
        </tr>
        </thead>

        <tbody>
          { data?.map((item, index) => {
            const {id, code, name, availability, durability, mileage, needing_repair} = item;
          
            return(
              <tr key={id} className={index % 2!== 0 ? "odd_class" : 'even_class'}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{code}</td>
                <td>{availability.toString()}</td>
                <td>{needing_repair.toString()}</td>
                <td>{durability}</td>
                <td>{mileage}</td>
              </tr>
            )
          
          }) }
        </tbody>
      </table>
    </div>
  )
}

export default Table
