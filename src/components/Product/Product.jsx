import { useContext } from "react"
import { Link } from "react-router-dom"
import styles from "../Product/Product.module.css"
import { CartContext } from "../../contexts/CartContext"


const Product = ({product}) => {
const {addToCart} = useContext(CartContext)
const {id, image, category, price, title} = product;
  return (
   <div className={styles.gridItem} key={product.id}>
     <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
            {/* image */}
            <Link to={`/product/${id}`}>
                <div className={styles.image}>
                    <img src={image} alt="" />
                </div>
            </Link>
        </div>
     </div>
     <div className={styles.AddButtonDiv}>
        <button onClick={() => addToCart(product, id)} className={styles.AddButton}>Add to cart</button>
     </div>
     <div className={styles.desc}>
        <Link style={{ textDecoration: 'none' }} to={`/product/${id}`}>
            <h5 className={styles.ProductTitle}>{title}</h5>
        </Link>
        <div>${price}</div>
     </div>
   </div>
  )
}

export default Product