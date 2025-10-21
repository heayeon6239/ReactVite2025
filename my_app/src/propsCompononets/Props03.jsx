function Product03({name, price}){
    return(
        <div style={{border:'1px solid lightgray',padding:'10px 20px', margin:'15px'}}>
            <h2>{name}</h2>
            <p>가격:{price.toLocaleString()}원</p>
        </div>
    )
}
export default Product03