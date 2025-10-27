// 자식 불러오기
import MovieItem from "./MovieItem"

export default function MovieList(props){
    return(
        <>
            <ul>
                {/* <li>반복을 위해 map()함수 이용 / map()안에서는 push를 할 수 없음 */}
                {props.movie.map((movie)=>(
                    // 자식인 movieItem을 태그로 가져옴
                    // <li>태그는 MovieItem.jsx에 그릴 예정
                    <MovieItem 
                        key={movie.id}
                        movie={movie}
                        onSelect={props.onSelect}
                    />
                ))}
            </ul>
        </>
    )
}