import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import '../Food/Food.css'

export default function FoodList({data}){

    const rateCopy=[...data];
    const reviewCopy=[...data];
    const calCopy=[...data];
    // 평점순
    const rateSort=rateCopy.sort((a,b)=>b.rating-a.rating);
    // 리뷰순
    const reviewSort=reviewCopy.sort((a,b)=>b.reviewCount-a.reviewCount);
    // 칼로리순
    const calSort=calCopy.sort((a,b)=>b.caloriesPerServing-a.caloriesPerServing);

    const [sortData,setSortData]=useState(rateSort);
    const [focus,setFocus]=useState(1);
    const tabClick=(num)=>{
        if(num ===1){
            setSortData(rateSort);
            setFocus(1);
        }else if(num ===2){
            setSortData(reviewSort);
            setFocus(2);
        }else if(num ===3){
            setSortData(calSort);
            setFocus(3);
        }else{
            setSortData(data);
        }
    };
    console.log(focus);
    

    return(
        <div className="FoodList">
            <p>상품 수 : {data.length}개</p>
            <div className="tab">
                <p onClick={()=>tabClick(1)} style={{fontWeight:focus === 1 ?700:null}}>추천순</p>
                <p onClick={()=>tabClick(2)} style={{fontWeight:focus === 2 ?700:null}}>상품평순</p>
                <p onClick={()=>tabClick(3)} style={{fontWeight:focus === 3 ?700:null}}>칼로리순</p>
            </div>
            <div className="list">
                <ul>
                    {sortData.map((item)=>(
                        <li key={item.id}>
                            <Link to={`/new/datail/${item.id}`}>
                                <img src={item.image} alt={item.name}/>
                                <p className="name">{item.name}</p>
                                <p>★ {item.rating}</p>
                                <p>리뷰: {item.reviewCount} 개</p>
                                <p>{item.caloriesPerServing} cal</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}