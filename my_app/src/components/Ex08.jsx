function Ex08(){
    const foodMenu=[
        { id:1, name:'김치찌개', text:'얼큰한 김치찌개', price:8000},
        { id:2, name:'된장찌개', text:'구수한 된장찌개', price:7000},
        { id:3, name:'비빔밥', text:'건강한 비빔밥', price:9000},
    ]
    return(
        <>
            {foodMenu.map((item,index)=>(
                <div className="foodBox" key={item.id}>
                    <h3 className="food">{item.name}</h3>
                    <p className="foodText">{item.text}</p>
                    <p className="foodPrice">{item.price}원</p>
                </div>
            ))}
            
        </>
    )
}
export default Ex08