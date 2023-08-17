import React from 'react'
import { removeFromCard } from '../../redux/cardSlice'
import { useDispatch } from 'react-redux'

const CardComp = ({card}) => {
  const dispatch = useDispatch();
  return (
    <div className='my-10 flex items-center justify-between'>
      <img className='w-[150px] h-[150px] object-cover ' src={card.image} alt="" />
      <div className='w-[500px]'>
        <div className='text-xl '>{card?.title}</div>
        <div>{card?.description}</div>
      </div>
      <div className='font-bold text-2xl'>{card?.price} <span>TL</span>({card?.quantity})</div>
      <div onClick={() => dispatch(removeFromCard(card?.id))} className='bg-red-500 text-white w-[150px] h-16 flex items-center justify-center rounded-md cursor-pointer'>Sil</div>
    </div>
    
  )
}

export default CardComp