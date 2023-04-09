
import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'

import { Navbar, ProductSlider, Table, Footer, BookModal, ReturnModal } from './settings/helpingImport'

function App() {
  const Data = useSelector(state => state.fatching.jsonData)
  const selectState = useSelector(state => state.search.searchQuery);

  const searchFunc = (data) => {
    return data.filter((item) => item.name.toLowerCase().includes(selectState))
  }

  return (
    <div className="container">
       <Navbar /> 
       <ProductSlider />
       <Table data={searchFunc(Data)}/>
       <BookModal />
       <ReturnModal />
       <Footer />
    </div>
  )
}
export default App
