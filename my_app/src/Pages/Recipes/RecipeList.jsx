import { Link } from "react-router-dom";
import {useState,useEffect} from 'react'
import  '../Recipes/Recipe.css'

export default function RecipeList({data}){

    
    const[tab,setTab]=useState('All');

    // 평점순
    const [rate,setRate]=useState(false);

    const dataCopy=[...data];
    const rateFilter=dataCopy.sort((a,b)=>b.rating - a.rating)
 
    // 카테고리
    const categoryTab=data.filter((item)=>item.cuisine===tab);
    console.log(categoryTab);

    // 좋아요
    // like = {1:0, 2:0, 3:0 ....}
    // id 음식명 좋아요 ( ex : 1 된장찌개 0 / 2 김치찌개 0 / 3 피자 0 ...)
    // like 상태변수 ( JSON 자체가 오브젝트이기 때문에 useState(0)처럼 다같이 초기화 할 수 없음 )
    
    // 오브젝트 0을 초기화하는 초기값 변수
    const defaultLike={}; // 빈 배열 또는 빈 오브젝트는 undefined될 가능성 높음

    if(data.length > 0){
        for(let i=0; i<data.length;i++){
            const recip=data[i]
            // defaultLike[1]=0 -> {id:1, 좋아요 :0}
            defaultLike[recip.id]=0 // 각 레시피 id별로 초기값 0으로 세팅
        }
    }
    console.log(defaultLike)
    const [like,setLike]=useState(defaultLike);
    // useState({id:1, 0, id:2, 0})
    

    // 좋아요 버튼 클릭시 좋아요 1씩 증가하는 핸들러 작성
    const addLike=(id)=>{
        // 배열, 오브젝트는 힙의 어드레스 번지 주소가 같으면 리랜더링을 하지 않기 때문에 
        // 반드시 얕은 복사 필요 !
        const likeCopy={...like}
        // 현재 undefined인 경우 => undefined +1 => NaN
        likeCopy[id] = (likeCopy[id] !== undefined ? likeCopy[id]:0) + 1
        setLike(likeCopy);
    }

    return(
        <div style={{width:'1000px'}}>
            <h2>레시피 목록</h2>
            <div style={{display:'flex', 
                width:'1200px',
                justifyContent:'center',
                flexWrap:'wrap',
                // listStyle:'none',
                gap:'20px'}}>
                {/* map()은 배열의 반복문이므로 조건이 만족할 때는 그림을 그리고
                    아니면 그림을 그리면 안되 null이 되도록 코드에 삽입
                    무한루프가 돌지 않는다.
                */}
                        <button type="button" onClick={()=>{setTab('All');setRate(false)}}>All</button>
                        <button type="button" onClick={()=>{setTab('Italian');setRate(false)}}>Italian</button>
                        <button type="button" onClick={()=>{setTab('Asian');setRate(false)}}>Asian</button>
                        <button type="button" onClick={()=>{setTab('American');setRate(false)}}>American</button>
                        <button type="button" onClick={()=>{setTab('Mexican');setRate(false)}}>Mexican</button>
                        <button type="button" onClick={()=>{setTab('Mediterranean');setRate(false)}}>Mediterranean</button>
                        <button type="button" onClick={()=>{setTab('Pakistani');setRate(false)}}>Pakistani</button>
                        <button type="button" onClick={()=>{setTab('Japanese');setRate(false)}}>Japanese</button>
                        <button type="button" onClick={()=>{setTab('Moroccan');setRate(false)}}>Moroccan</button>
                        <button type="button" onClick={()=>{setTab('Korean');setRate(false)}}>Korean</button>
                        <button type="button" onClick={()=>{setTab('Greek');setRate(false)}}>Greek</button>
                        <button type="button" onClick={()=>{setTab('Thai');setRate(false)}}>Thai</button>
                        <button type="button" onClick={()=>{setTab('Indian');setRate(false)}}>Indian</button>
                        <button type="button" onClick={()=>{setTab('Turkish');setRate(false)}}>Turkish</button>
                        <button type="button" onClick={()=>{setTab('Smoothie');setRate(false)}}>Smoothie</button>
                        <button type="button" onClick={()=>{setTab('Russian');setRate(false)}}>Russian</button>
                        <button type="button" onClick={()=>{setTab('Lebanese');setRate(false)}}>Lebanese</button>
                        <button type="button" onClick={()=>{setTab('Brazilian');setRate(false)}}>Brazilian</button>
                        <button type="button" onClick={()=>setRate(true)}>평점순</button>
            </div>
            <div className="listAll">
                <ul className="list">
                    {(rate === true ? rateFilter : (tab === 'All' ? data:categoryTab)).map((item,index)=>(
                        <div>
                            <li key={item.id} className="list_li">
                                <Link to={`/detail/${item.id}`}>
                                    <img src={item.image} alt={item.name}/>
                                    <p>{item.name}</p>
                                    <p>{item.cuisine}</p>
                                    <p>{item.rating}</p>
                                </Link>
                                <button type="button" onClick={()=>addLike(item.id)}>🤍 좋아요 {like[item.id]}</button>
                            </li>
                            
                        </div>
                    
                    ))}
                </ul>
            </div>
        </div>
    )
}