import { useContext } from "react"
import { Link } from "react-router-dom"
import styles from "../Product/Product.module.css"
import {} from 'react-icons/bs'

const Product = ({product}) => {
console.log(product)
const {id, image, category, price, title} = product;
  return (
   <div className={styles.gridItem} key={product.id}>
     <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
            {/* image */}
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
        </div>
     </div>
     <div>
        <h2>{title}</h2>
        <div>{price}</div>
     </div>
   </div>
  )
}

export default Product