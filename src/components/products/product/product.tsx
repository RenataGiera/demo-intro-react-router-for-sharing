import { useParams } from "react-router-dom";

const Product = () => {
   const {productId} = useParams()

    return(<section className='content has-text-centered'>
        <p>Welcome to the page for product: </p>
        <p><strong className='is-size-1'> {productId} </strong></p>
    </section>)}

export default Product;