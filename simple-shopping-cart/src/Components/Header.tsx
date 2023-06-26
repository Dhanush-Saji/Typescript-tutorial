import{useContext,} from 'react'
import './Header.css'
import { CartContext,CartType } from '../Context/CartProvider'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  type CartContextProps = {
    cartProducts: CartType[];
    addToCart: Function;
    deleteFromCart: Function;
  };
  const props:CartContextProps | null  = useContext(CartContext)
  const navigateToCart = ():void =>{
    navigate('/cart')
  }
  const navigateToHome = ():void =>{
    navigate('/')
  }
  return (
    <div className='header'>
        <h2 onClick={navigateToHome}>Happy Shopping</h2>
        <div onClick={navigateToCart}>
            <img src="https://cdn-icons-png.flaticon.com/128/1170/1170576.png" alt="cart" />
            <div className='cartAmount'>{props?.cartProducts.length}</div>
        </div>
    </div>
  )
}

export default Header