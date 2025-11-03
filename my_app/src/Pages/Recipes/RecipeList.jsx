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
    const likeArr=[];
    const [like,setLike]=useState(0);
    const addLike=()=>{
        setLike(like+1);
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
                                <button type="button" onClick={()=>addLike(index)}>🤍 좋아요 {like}</button>
                            </li>
                            
                        </div>
                    
                    ))}
                </ul>
            </div>
        </div>
    )
}