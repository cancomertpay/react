import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let card = localStorage.getItem("card");
  if(card) {
    return JSON.parse(card)
  }else {
    return [];
  }
}

const storeInLocalStorage = (data) => {
  localStorage.setItem('card', JSON.stringify(data))
} 

const initialState = {
  cards: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0
}

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      const isItemCard = state.cards.find(item => item.id === action.payload.id)

      if(isItemCard) {
        const tempCard = state.cards.map(item => {
          if(item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty + item.price;
            return {
              ...item, quantity: tempQty, totalPrice: tempTotalPrice
            }
          } else {
            return item
          }
        })
        state.cards = tempCard;
        storeInLocalStorage(state.cards)
      } else {
        state.cards.push(action.payload)
        storeInLocalStorage(state.cards)
      }
    },
    removeFromCard : (state,action) => {
      const tempCard = state.cards.filter(item => item.id !== action.payload )
      state.cards = tempCard
      storeInLocalStorage(state.cards)
    },
    clearCard : (state) => {
      state.cards = []
      storeInLocalStorage(state.cards)
    },
    getCardTotal : (state) => {
      state.totalAmount = state.cards.reduce((cardTotal, cardItem) => {
        return cardTotal += cardItem.price * cardItem.quantity
      }, 0)
      state.itemCount = state.cards.length
    },
  }
})

export const {addToCard, removeFromCard, clearCard, getCardTotal} = cardSlice.actions
export default cardSlice.reducer