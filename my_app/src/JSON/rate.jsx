import {useEffect,useState} from 'react';

// 평점별
// 카테고리 별

export default function Rate(){

    const[data,setData]=useState([]);

    useEffect(()=>{

        console.log('데이터 요청 시작');
        fetch('https://fakestoreapi.com/products')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            setData(data)
        })
        .finally(()=>{
            console.log('요청 완료')
        })

    },[]);

  
    const[tab,setTab]=useState("");

     useEffect(()=>{
        console.log(categoryTab)
    },[tab])

    // 각 카테고리를 클릭
    const categoryTab=data.filter((item)=>item.category===tab);

    // 평점별 클릭
    const rateTab=()=>{
        data.sort((a, b) => a.rating - b.rating);
    };
    

    return(
        <div>
            
            <h2 onClick={()=>setTab("men's clothing")}>men's</h2>
            <h2 onClick={()=>setTab("women's clothing")}>women's</h2>
            <h2 onClick={()=>setTab("electronics")}>electronics</h2>
            <h2 onClick={()=>setTab("jewelery")}>jewelery</h2>
            <h2 onClick={()=>setTab()}>평점별</h2>
            {/* ul */}
            <ul style={{display:'flex',
                flexWrap:'wrap',
                width:'1000px',
                gap:'15px'}}>
                {/* li */}
                {(category? categoryTab : data).map((item)=>(
                    <li key={item.id}
                    style={{width:'200px',height:'300px'}}>
                        {/* 이미지 */}
                        <img src={item.image}
                        style={{width:'200px',height:'250px'}}/>
                        {/* 제품 타이틀 */}
                        <p>{item.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}