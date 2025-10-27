import {useState} from 'react'
import ProductItem from './ProductItem'

export default function ProductList(props){
    // <ul>만 생성할 예정
    return(
        <ul>
            {props.products.map((product)=>(
                <ProductItem
                    key={product.id}
                    products={product}
                    addCart={props.addCart}
                />
            ))}
        </ul>
    )
}