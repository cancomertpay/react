import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
      <select onChange={event => setSort(event.target.value)} className='bg-gray-100 py-3 px-5 rounded-full' name="" id="">
        <option disabled value="">Seçiniz</option>
        <option  value="inc">Artan</option>
        <option  value="dec">Azalan</option>
      </select>

    </div>
  )
}

export default Sorting