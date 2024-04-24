import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export function ProductContextData(props) {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get("https://3000-kunxinchor-sctp02modern-nzm7w5ee8kv.ws-us110.gitpod.io/api/products")
            setProducts(response.data.products)
        }
        fetchData(); 
    },[]); 

    const dataOperations = {
        getProducts: () => {
            return products;
        },
        async addProduct(newProduct){
            
        }



    }

    return <ProductContext.Provider value={dataOperations}>
        {props.children}
    </ProductContext.Provider>


};



