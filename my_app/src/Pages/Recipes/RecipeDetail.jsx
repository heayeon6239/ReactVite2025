import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function RecipeDetail({data}){

    const {id}=useParams();
    const recipe=data.find((item)=>item.id===Number(id))

    return(
        <div className="detail">
            <h2>레시피 상세</h2>
            <img src={recipe.image}/>
            <p>요리 유형 : {recipe.cuisine}</p>
            <p>난이도 : {recipe.difficulty}</p>
            <p>서빙수 : {recipe.servings}</p>
            <p>칼로리 : {recipe.caloriesPerServing}</p>
            <p>평점 : {recipe.rating} (후기{recipe.reviewCount}건)</p>
            <p><strong>조리 방법</strong></p>
            <ul>
                {recipe.instructions.map((item,index)=>(
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>

            <Link to='/'><h4>상품 목록으로 이동</h4></Link>

        </div>
    )
}