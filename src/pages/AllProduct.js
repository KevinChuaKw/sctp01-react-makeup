import react, {useContext} from "react"; 
import { ProductContext } from "../ProductsContext";
import ProductCard from "../ProductCard";

export default function(){
    const context = useContext(ProductContext)
    const products = context.getProducts(); 
    return (<div>
            <h1>All Products</h1>
            {
                products.map(p => <ProductCard product ={p} key={p.product_id}/>)
            }
        </div>)
}
