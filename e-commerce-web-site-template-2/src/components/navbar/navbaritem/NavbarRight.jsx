import React, {useEffect} from 'react'
import {BsSearch} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {FiShoppingCart} from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux'
import { getCardTotal } from '../../../redux/cardSlice'
import { useNavigate } from 'react-router-dom'


const NavbarRight = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {itemCount} = useSelector(state  => state.cards)
  
  useEffect(() => {
    dispatch(getCardTotal())
  }, [dispatch])

  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200' >
        <input className='bg-gray-200 outline-none' type="text" placeholder='Arama Yapınız...' />
        <BsSearch size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div onClick={() => navigate("card")} className="relative cursor-pointer">
        <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center ' >{itemCount}</div>
        <FiShoppingCart size={28} />
      </div>
    </div>
  )
}

export default NavbarRight