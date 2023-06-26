import{useContext} from 'react'
import { CartContext } from '../Context/CartProvider';

const Cart = () => {
    const cartContext = useContext(CartContext);
  const { deleteFromCart,cartProducts } = cartContext || {};
  return (
    <div className='cartImagesGrid'>
    {
        cartProducts?.map((item)=>(
            <div key={item.id}>
                <img src={item.image} alt="product images" />
                <h4>{item.title}</h4>
                <p>{item.price}</p>
                <button onClick={() => deleteFromCart && deleteFromCart(item)}>Delete</button>
            </div>
        ))
    }
</div>
  )
}

export default Cart