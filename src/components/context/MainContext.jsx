import { createContext, useContext , useEffect, useState } from "react";


const intialState = localStorage.getItem("cartItems") ? JSON.parse( localStorage.getItem("cartItems")) : [];




export const MainContext = createContext({});

const MainContextProvider = ({ children }) => {

  const [showBuy, setShowBuy] = useState(false);
  const [allItems , setAllItems] = useState(intialState)
  const [currentItem, setCurrentItem] = useState([])
  const [showAdded, setShowAdded] = useState(false)

  useEffect( ()=>{ localStorage.setItem("cartItems", JSON.stringify(allItems))} , [allItems]  )

  const increaseQuantity = (item)=>{ setCurrentItem( {...item , count : item.count + 1}) }
  const decreaseQuantity = (item)=>{ setCurrentItem( {...item , count : item.count - 1}) }


  const addItemToAllItems = (item) => { const itemExists = allItems.some(i => i.id === item.id);
       if (itemExists) { setShowAdded(true);} else { setAllItems(prevItems => [...prevItems, item]);}  }


  const increasCartCount = (item) => {setAllItems(prevItems => prevItems.map(i => {if (i.id === item.id) {
        return { ...i, count: i.count + 1 };}return i;}));}

  const dcreasCartCount = (item) => {setAllItems(prevItems => prevItems.map(i => {if (i.id === item.id) {
        return { ...i, count: i.count - 1 };}return i;}));}
  
  
  const removeItem = (item) =>{ setAllItems(preve => preve.filter((i) => i.id !== item.id))  }

  const removeAll =()=> setAllItems([])

  const selectedItems = allItems.reduce((count, item) => item.count + count , 0)

  const getAllsallary = allItems.reduce((count, item) =>( item.count * item.sallary + count) , 0).toFixed(2)

  return (
    <MainContext.Provider
      value={{
        showBuy ,
        allItems,
        currentItem,
        showAdded,
        selectedItems,
        getAllsallary,
        setCurrentItem,
        setShowBuy ,
        increaseQuantity,
        decreaseQuantity,
        addItemToAllItems,
        increasCartCount,
        setShowAdded,
        dcreasCartCount,
        removeItem,
        removeAll
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

export const useProvider = () => {
  return useContext(MainContext);
};
