import './App.css';
import Header from './components/header/Header';
import Nav from './components/header/Nav';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/home/Home';
import Clothes from './components/clothes/Clothes';
import Electronics from './components/electronics/Electronics';
import Furniture from './components/furniture/Furniture';
import Shoes from './components/shoes/Shoes';
import Others from './components/others/Others';
import Footer from './components/footer/Footer';
import MainContextProvider from './components/context/MainContext';
import BuyItem from './components/buyitem/BuyItem';
import Cart from './components/cart/Cart';
import Added from './components/added/Added';

function App() {
  return (
    <Router>
      <MainContextProvider>
    <Header />
    <Nav/>
    <BuyItem />
    <Added />
      <Routes>
        <Route path='/'            element =  {<Home        /> } />
        <Route path='/dvecom'      element =  {<Home        /> } />
        <Route path='/clothes'     element =  {<Clothes     /> } />
        <Route path='/electronics' element =  {<Electronics /> } />
        <Route path='/furniture'   element =  {<Furniture   /> } />
        <Route path='/shose'       element =  {<Shoes       /> } />
        <Route path='/others'      element =  {<Others      /> } />
        <Route path='/cart'        element =  {<Cart        /> } />
    </Routes>
    </MainContextProvider>
    <Footer />
    </Router>
  );
}

export default App;
