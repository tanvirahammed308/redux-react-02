
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
const Product = ({product}) => {
    const {title,description,price,image}=product;

    const dispatch=useDispatch()
    const handleAddToCart=()=>{
      console.log('add to cart is ok')
      dispatch(add(product))
    }
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes"  width={150}/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h3>{price}</h3>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  </div>
</div>
  )
}

Product.propTypes = {

  product: PropTypes.array,
}

export default Product