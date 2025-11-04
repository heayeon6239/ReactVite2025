import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";

export default function FoodDetail({data}){

    const {id}=useParams();
    const FoodDetail=data.find((item)=>item.id===Number(id));

    return(
        <div className="detail">
            <img src={FoodDetail.image} alt={FoodDetail.name}/>
            <div className="text">
                <h2>{FoodDetail.name}</h2>
                <p>리뷰: {FoodDetail.reviewCount} 개</p>
                <p>★ {FoodDetail.rating}</p>
                <p>{FoodDetail.caloriesPerServing} cal</p>
                <p>{FoodDetail.servings} 인분</p>
                <h4>조리 방법</h4>
                <ul>
                    {FoodDetail.instructions.map((item)=>(
                        <li key={item.id}>
                            {item}
                        </li>
                    ))}
                </ul>
                {/* <p>{FoodDetail.instructions}</p> */}
            </div>
            
        </div>
    )
}