import {useState,useEffect} from 'react'
import MenuList from '../TableOrder/MenuList'
import CartModal from './CartModal';
import '../TableOrder/tableOrder.css'

export default function TableOrderApp(){

    // 메뉴 배열
    const [tableMenu]=useState([
        {id:1, name:'김햄찌아바타',img:'food01_01.jpg' ,price:9000, category:1},
        {id:2, name:'치킨 치아바타',img:'food01_02.jpg' ,price:8700, category:1},
        {id:3, name:'튜나 치아바타',img:'food01_03.jpg' ,price:9500, category:1},
        {id:4, name:'비프에그마요 치아바타',img:'food01_04.jpg' ,price:9000, category:1},
        {id:5, name:'바질연어 치아바타',img:'food01_05.jpg' ,price:10500, category:1},
        {id:6, name:'크런치비프 라이트랩',img:'food01_06.jpg' ,price:8500, category:1},
        {id:7, name:'그라브락스 연어 포케볼',img:'food01_07.png' ,price:12000, category:1},
        {id:8, name:'멕시칸 랩',img:'food01_08.png' ,price:8500, category:1},
        {id:9, name:'칠리베이컨 포케볼',img:'food01_09.png' ,price:13000, category:1},
        {id:10, name:'더블 치킨 파스타 박스',img:'food01_10.png' ,price:12500, category:1},
        {id:11, name:'로스트닭다리살 샐러디',img:'food01_11.png' ,price:10500, category:1},
        {id:12, name:'그라브락스 연어 샐러디',img:'food01_12.png' ,price:13500, category:1},

        {id:13, name:'페이머스 글레이즈드',img:'food02_01.png' ,price:3500, category:2},
        {id:14, name:'플레인스콘',img:'food02_02.png' ,price:3700, category:2},
        {id:15, name:'서울우유 크림도넛',img:'food02_03.png' ,price:3500, category:2},
        {id:16, name:'레몬 파운드 도넛',img:'food02_04.png' ,price:5500, category:2},
        {id:17, name:'딸기 듬뿍 스마일 도넛',img:'food02_05.png' ,price:4600, category:2},
        {id:18, name:'딸기 크림 가득 수줍은 스마일',img:'food02_06.png' ,price:4600, category:2},
        {id:19, name:'카스테라 도넛',img:'food02_07.png' ,price:4500, category:2},
        {id:20, name:'하이 카카오 도넛',img:'food02_08.png' ,price:3500, category:2},
        {id:21, name:'카카오하니딥',img:'food02_09.png' ,price:3500, category:2},
        {id:22, name:'올리브 츄이스티',img:'food02_10.png' ,price:2500, category:2},
        {id:23, name:'초코 크러쉬 도넛',img:'food02_11.png' ,price:3000, category:2},
        {id:24, name:'소프트 우유크림 도넛',img:'food02_12.png' ,price:4800, category:2},

        {id:25, name:'나이트로 바닐라 크림',img:'food03_01.jpg' ,price:7500, category:3},
        {id:26, name:'나이트로 콜드 브루',img:'food03_02.jpg' ,price:8000, category:3},
        {id:27, name:'돌체 콜드 브루',img:'food03_03.jpg' ,price:7000, category:3},
        {id:28, name:'리저브 나이트로',img:'food03_04.jpg' ,price:6500, category:3},
        {id:29, name:'리저브 콜드 브루',img:'food03_05.jpg' ,price:8500, category:3},
        {id:30, name:'민트 콜드 브루',img:'food03_06.jpg' ,price:7000, category:3},
        {id:31, name:'바닐라 크림 콜드 브루',img:'food03_07.jpg' ,price:6500, category:3},
        {id:32, name:'베르가못 콜드 브루',img:'food03_08.jpg' ,price:8500, category:3},
        {id:33, name:'여수 윤슬 헤이즐넛 콜드브루',img:'food03_09.jpg' ,price:9500, category:3},
        {id:34, name:'오트 콜드 브루',img:'food03_10.jpg' ,price:8000, category:3},
        {id:35, name:'콜드 브루',img:'food03_11.jpg' ,price:6500, category:3},
        {id:36, name:'콜드 브루 몰트',img:'food03_12.jpg' ,price:7000, category:3},
    ]);

    const [menuTab,setMenuTab]=useState(1)
    // < 해당 메뉴 탭을 클릭 -> 해당 메뉴가 출력 >
    const filterImg=tableMenu.filter((imgItem)=>imgItem.category===menuTab);

    // < 주문내역 빈 배열>
    const [orderCart,setOrderCart]=useState([]);

    // < 담기 버튼 누르면 주문 내역에 담김 > (index 매개변수)
    // (중복 담기 -> 수량 증가, 아니면 배열 추가)
    const addCart=(pick)=>{
        let orderCartCopy=[...orderCart];

        // 중복 담기인지 id로 확인하는 변수!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        const index=orderCart.findIndex((item)=>item.id===pick.id)

        if(index != -1){
            orderCartCopy[index].quantity+=1;
            setOrderCart(orderCartCopy);
        }else{
            orderCartCopy.push({id:pick.id, name:pick.name, price:pick.price, quantity:1});
            setOrderCart(orderCartCopy);
        }

        
    }
    console.log(orderCart);

    // 모달 열림/닫힘
    const [showCart,setShowCart]=useState(false);
    // + / - 수량 버튼 함수
    const plus=(index)=>{
        let orderCartCopy=[...orderCart];
        if(orderCartCopy[index].quantity>=10){
            alert('10개까지만 주문 가능');
        }else{
            orderCartCopy[index].quantity+=1;
            setOrderCart(orderCartCopy);
            // total();
        }
    }
    const minus=(index)=>{
        let orderCartCopy=[...orderCart];
        if(orderCartCopy[index].quantity<=1){
            alert('최소주문은 1개부터 가능');
        }else{
            orderCartCopy[index].quantity-=1;
            setOrderCart(orderCartCopy);
            // total();
        }
    }

    // 총 합계 금액 계산
    const [totalPrice,setTotalPrice]=useState(0);

    
    // const total=()=>{
    //     let orderCartCopy=[...orderCart];
    //     let sumPrice=0;
    //     for(let i=0;i<orderCartCopy.length;i++){
    //         sumPrice += orderCartCopy[i].price * orderCartCopy[i].quantity;
    //     }
    //     setTotalPrice(sumPrice.toLocaleString());
        
    // }
        // console.log('총 금액: '+totalPrice);

    // 주문내역 클릭(두개의 함수 동시 실행 함수)
    const orderClick=()=>{
        setShowCart(true);
        // total();
    }

    // 주문 취소 X 버튼
    const delOrder=(index)=>{
        let orderCartCopy=[...orderCart];
        orderCartCopy.splice(index,1);
        setOrderCart(orderCartCopy);
        // total();
        console.log('삭제된 인덱스 뭐야?',orderCartCopy)
        
    }
    console.log('최종 가격: ',totalPrice);

    useEffect(() => {
        let total=0;
        for(let i=0;i<orderCart.length;i++){
            total += (orderCart[i].price*orderCart[i].quantity)
        }
        setTotalPrice(total.toLocaleString())
    }, [orderCart]);
    

    return(
        <div className='all'>
            <div className='menuTab'>
                <ul>
                    {/* <li>베스트 10</li> */}
                    <li style={{backgroundColor: menuTab === 1?'rgb(133, 184, 74)':null, 
                    color: menuTab === 1?'#fff':null}} 
                    onClick={()=>setMenuTab(1)}>샐러드/포케</li>
                    <li style={{backgroundColor: menuTab === 2?'rgb(133, 184, 74)':null,
                    color: menuTab === 2?'#fff':null}} 
                    onClick={()=>setMenuTab(2)}>디저트</li>
                    <li style={{backgroundColor: menuTab === 3?'rgb(133, 184, 74)':null,
                    color: menuTab === 3?'#fff':null}} 
                    onClick={()=>setMenuTab(3)}>커피/음료</li>
                </ul>
                <button type='button' onClick={orderClick}>주문내역</button>
            </div>
            {/* 주문내역 모달창 */}
            {showCart && <CartModal orderCart={orderCart} setShowCart={setShowCart} 
            plus={plus} minus={minus} totalPrice={totalPrice} delOrder={delOrder} />}


            {/* 메뉴 리스트 */}
            <div className='Menu'>
                <ul className='menulist'
                style={{display:'flex', flexWrap:'wrap', padding:0, 
                justifyContent:'center'}}>
                    {filterImg.map((menuItem)=>(
                        <MenuList 
                            tableMenu={tableMenu}
                            menuItem={menuItem}
                            addCart={addCart}
                            key={menuItem.id}
                        />
                    ))}
                </ul>
            </div>
            
        </div>
    )
}