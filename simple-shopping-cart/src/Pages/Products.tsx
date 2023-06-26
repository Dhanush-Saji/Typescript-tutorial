import{useContext} from 'react'
import { ProductsContext } from '../Context/ProductsProvider'
import './Products.css'
import { CartContext } from '../Context/CartProvider'
const Products = () => {
    const productArray  = useContext(ProductsContext)
      const cartContext = useContext(CartContext);
  const { addToCart } = cartContext || {};
      
  return (
    <div className='productImagesGrid'>
        {
            productArray?.map((item)=>(
                <div key={item.id}>
                    <img src={item.image} alt="product images" />
                    <h4>{item.title}</h4>
                    <p>{item.price}</p>
                    <button onClick={() => addToCart && addToCart(item)}>Add to cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products