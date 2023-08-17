import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCard } from '../../redux/cardSlice';

const DetailComp = ({productDetail}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0)

  const decrement = () => {
    if(quantity > 0) setQuantity(prev => prev - 1)
  }

  const increment = () => {
    if(quantity < productDetail?.rating?.count) setQuantity(prev => prev + 1)
  }

  const addBasket = () => {
    dispatch(
      addToCard(
        {
          id: productDetail?.id, 
          title: productDetail?.title, 
          image: productDetail.image,
          price: productDetail.price, 
          quantity: quantity
        }
      )
    );
  }

  return (
    <div className='flex gap-10 my-10'>
      <img className='w-[700px] h-[500px] object-cover' src={productDetail?.image} alt="" />
      <div className=''>
        <div className='text-4xl font-bold'>{productDetail?.title}</div>
        <div className='my-3'>{productDetail?.description}</div>
        <div className='my-2 text-xl text-red-200 '>Rating: {productDetail?.rating?.rate}</div>
        <div className='my-2 text-xl text-red-200 '>Count: {productDetail?.rating?.count}</div>
        <div className='text-5xl font-bold'>{productDetail?.price} <span className='text-sm'>TL</span></div>

        <div className='flex items-center gap-5 my-4 cursor-pointer'>
          <div onClick={decrement} className='text-4xl'>-</div>
          <input className='w-20 text-center text-4xl font-bold' type="text" value={quantity} />
          <div onClick={increment} className='text-4xl'>+</div>
        </div>

        <div onClick={addBasket} className='border my-4 p-3 w-[200px] text-2xl rounded-md bg-gray-100 cursor-pointer h-16p flex items-center justify-center'>Sepete Ekle ({quantity})</div>
      </div>
      
      
    </div>
  )
}

export default DetailComp