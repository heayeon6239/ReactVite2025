import {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

// 평점별
// 카테고리 별

export default function FakeStore({data}){
    // 01. props => ffff(props)

    // 02. 구조 분해 할당 => ffff({data})
    //     일일 변수로 대입해서 할당을 다시 함
    //     반드시 구조분해할당은 중괄호를 꼭 써줘야함 !!!

    const[tab,setTab]=useState("men's clothing");
    const[rate,setRate]=useState(false);
  
    

     useEffect(()=>{
        console.log(categoryTab)
    },[tab])

    // 각 카테고리를 클릭
    const categoryTab=data.filter((item)=>item.category===tab);
    // 나중을 위한 방지용 코드 ( 평점이 공백일 가능성을 미리 방지 )
    const rateFilter=data.filter((item)=>item.rating.rate>0);

    const rateCopy=[...rateFilter];
    const rateSort=rateCopy.sort((a,b)=>b.rating.rate-a.rating.rate);
    //                                  -> json의 경로를 타줘야함

    // 평점별 클릭
    // const rateTab=()=>{
    //     let dataCopy=[...data];
    //     dataCopy.sort((a, b) => b.rating.rate - a.rating.rate);
    //     setData(dataCopy);
    // };
    

    return(
        <div>
            <h1>FakeShop</h1>
            <div style={{display:'flex', justifyContent:'space-around',margin:'50px'}}>
                <h2 onClick={()=>{setTab("men's clothing");setRate(false)}}>men's</h2>
                <h2 onClick={()=>{setTab("women's clothing");setRate(false)}}>women's</h2>
                <h2 onClick={()=>{setTab("electronics");setRate(false)}}>electronics</h2>
                <h2 onClick={()=>{setTab("jewelery");setRate(false)}}>jewelery</h2>
                <h2 onClick={()=>{setRate(true)}}>평점별</h2>
            </div>
            
            {/* ul */}
            <ul style={{display:'flex',
                flexWrap:'wrap',
                width:'1000px',
                gap:'55px',
                listStyle:'none'}}>
                {/* li */}
                {(rate? rateSort : categoryTab).map((item)=>(
                // 3항 연산자 계산을  ()안에 작성하여 먼저 계산시켜야 함
                    <li key={item.id}
                    style={{width:'200px',height:'400px'}}>
                        {/* 이미지 */}
                        <Link to={`/detail/${item.id}`}>
                            <img src={item.image}
                            style={{width:'200px',height:'250px'}}/>
                            {/* 제품 타이틀 */}
                            <p style={{height:'100px',display:'flex',alignItems:'center',justifyContent:'center'}}>{item.title}</p>
                            <span>{item.price} $ / ★ {item.rating.rate}  </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}