import {useState} from 'react'
import FoodList from '../food/FoodList'
import CartModal from '../food/CartModal'

export default function FoodApp(){

    // 메뉴 배열 (수정 X)
    const [food]=useState([
        {id:1, name: '치킨', price:12000},
        {id:2, name: '피자', price:15000},
        {id:3, name: '햄버거', price:8000},
    ])

    // 빈 장바구니 배열 (수정 O)
    const [cart,setCart]=useState([]);

    // 장바구니 모달 열림/닫힘 기능 (수정 O)
    const [isCartOpen,setIsCartOpen]=useState(false);

    // 실행 함수 =============================
    // 장바구니 추가 함수(선택한 해당 index알아야 함, 매개변수)
    const addCart=(selectFood)=>{
        let cartCopy=[...cart];
        
        // 선택한 메뉴가 장바구니에 있으면 -> 수량 증가
        // 선택한 메뉴가 장바구니에 없으면 -> cart[]에 추가
        const index=cart.findIndex((item)=>item.id === selectFood.id)
        if(index != -1){
            cartCopy[index].quantity+=1;
            setCart(cartCopy);
        }else{
            cartCopy.push({id:selectFood.id, name:selectFood.name, price:selectFood.price, quantity:1});
            setCart(cartCopy);
        }
        
        console.log(cart);
    }

    return(
        <>
            <h2>음식주문</h2>
            <button type='button'onClick={()=>setIsCartOpen(true)}>장바구니</button>
            {/* 장바구니 모달 */}
            {/* 장바구니가 비어있으면 -> '장바구니가 비어있습니다'
                장바구니가 존재하면   ->  cart[] 출력 */}
            {isCartOpen===true?
                <CartModal cart={cart} onClose={()=>{setIsCartOpen(false)}} plus={plus} setCart={setCart} />
            :null}

            <ul>
                {food.map((foodItem)=>(
                    <FoodList
                        // key={foodItem.id}
                        food={food}
                        // 담기 버튼 누르면 장바구니에 담기기
                        addCart={addCart}
                        foodItem={foodItem}
                    />
                ))}
            </ul>
            
            

        </>
    )
}