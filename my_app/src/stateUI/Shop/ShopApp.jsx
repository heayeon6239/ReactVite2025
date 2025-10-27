import {useState} from 'react'
import ProductList from '../Shop/ProductList'
import CartModal from '../Shop/CartModal'

export default function ShopApp(){
    // 01. product에 setProducts를 만들지 않은 이유 : 원본 불변 유지 법칙을 위해
    const [products] = useState([
        { id: 1, name: '노트북', price: 1200000 },
        { id: 2, name: '마우스', price: 25000 },
        { id: 3, name: '키보드', price: 50000 },
    ]);

    // 02. 상품목록엔 수량이 존재 X, 수정 X 
    //     cart에 수량을 추가하여 담기 => 기존 상품의 수량을 비교
    //     상품이 존재하면 수량만 증가 기능을 구현
    const [cart,setCart]=useState([]);

    // 03. 장바구니 모달 창 출력을 위한 변수 (출력 여부를 제어 / 현재 false => 모달 close)
    const [showCart,setShowCart]=useState(false);


    // 04. 기존의 장바구니에 담긴 상품이 존재하는지 비교
    //     ( 존재 -> 수량만 +1 / 존재 X -> products 모두 추가)
    //     기존의 상품이 존재하는지의 여부를 판단하려면 상품 매개변수로 필요
    //  - 아래 addCart()함수는 < 자바스크립트 방식 > 으로 구현
    const addCart=(product)=>{
        // cart 얕은 복사 =>
        let cartCopy=[...cart];
        let findCheck=false; //  05. 같은 상품이 존재하는지 여부 체크 !!!!!!!

        //  -- 장바구니에 담긴 상품과 상품목록의 상품의 id가 같은게 존재하는지 확인하고 수량만 증가하는 부분
        for(let i=0; i<cartCopy.length; i++){
            // 상품비교는 product의 id와 비교 : 고유한 값이기 때문
            if(product.id === cartCopy[i].id){
                // 같은 상품이 존재 -> 수량만 증가
                cartCopy[i].quantity+=1;
                findCheck=true;
                break;
            }
        }
            
        // -- 장바구니에 기존의 상품과 같은 상품이 없을 때는 cart배열에 상품 추가
        if(!findCheck){
            cartCopy.push({id:product.id, name:product.name, price:product.price, quantity:1});
        }
        setCart(cartCopy);
        console.log('장바구니 담김?'+cartCopy)
    }

    // - < React 방식 >
    // const addCart=(product)=>{
    //     // cart 얕은 복사 =>
    //     let cartCopy=[...cart];

    //     //  -- 장바구니에 담긴 상품과 상품목록의 상품의 id가 같은게 존재하는지 확인하고 수량만 증가하는 부분
    //     //  배열이름.findIndex((요소,인덱스,원본배열)=> return 조건) !!!!!!!!!!!!!!!!!!!!
    //     //  => 찾고자하는 항목이 존재 O  ->  그 항목이 존재하는 배열의 인덱스 번호를 반환
    //     //  => 찾고자하는 항목이 존재 X  ->  -1를 반환
    //     const index = cart.findIndex((item)=>item.id === product.id)
    //     // => 존재하면 index = 1(해당 index번호), 없으면 index = -1
    //     // 장바구니에 상품이 존재한다 => index != -1
    //     if(index != -1){
    //         cartCopy[index].quantity+=1;
    //     }else{
    //         cartCopy.push({id:product.length, name:product.name, price:product.price, quantity:1});
    //     }
    //     setCart(cartCopy);
    //     console.log('장바구니 담김?'+cartCopy)
    // }

    // }
    

    return(
        <>
            <h2>쇼핑몰</h2>
            <button onClick={()=>setShowCart(true)}>장바구니 보기</button>
            {/* 자식 컴포넌트 */}
            {/* productList는 상품목록 UI 출력 */}
            <ProductList 
                products={products}
                addCart={addCart}
            />
            {/* 모달이 showCart = true이면 CartModal 보이기,
                아니면 null  */}
                {/* cartModal은 장바구니에 담긴 목록 UI 출력 */}
                {showCart === true ? <CartModal cart={cart} onClose={()=>setShowCart(false)}/>:null}
        </>
    )
}