import {useEffect,useState} from 'react'
import axios from 'axios'
import { add } from '../store02/cartSlice'; 
import { useDispatch,useSelector } from 'react-redux';
import { setData } from '../store02/productSlice';

export default function Shop(){
    
    // const [data,setData] = useState([]); 필요없음 !!

    // 상태 읽기
    const productList=useSelector((state)=>state.product.items)
    // 내보내기
    const dispatch=useDispatch();

    // axios를 이용해서 API 호출
    useEffect(()=>{
        const load = async()=>{
            try{
                const res = await axios.get('https://dummyjson.com/products')
                console.log(res.data.products.images);
                // ★ ★ ★ productSlice의 => setData() 저장, 
                // 마치 useState의 set~ 함수처럼 이용, productSlice로 내보냄
                dispatch(setData(res.data.products));
            }catch(err){
                console.log('데이터 호출 실패',err)
            }finally{
                console.log('요청 성공')
            }
        }
        load();
    },[])

    // 핸들러 함수 ( 장바구니에 상품이 담길때마다 alert)
    const addhandeler=(item)=>{
        dispatch(add(item));
        alert(`${item.title}    상품이 담겼습니다.`);
    }

    return(
        <div>
            <ul style={{display:'flex', flexWrap:'wrap', width:'1200px',justifyContent:'center',gap:'10px'}}>
                {productList.map((item)=>(
                    <li key={item.id} onClick={()=>addhandeler(item)}
                    style={{width:'250px',height:'300px',border:'1px solid lightgray',borderRadius:'5px',
                            display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <img src={item.images[0]} alt={item.title} style={{width:'200px',height:'200px'}}/>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
