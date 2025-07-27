import React from 'react'
import Side_Nav from '../Side_Nav';
import Search_Car from './Search_Car';
document.title = "Cars Selection";

const Cars_Selection = () => {
  return (
    <div className="w-screen overflow-x-hidden h-screen bg-[#333333] flex flex-row">
      <Side_Nav/>
      <Search_Car/>
    </div>
  )
}

export default Cars_Selection