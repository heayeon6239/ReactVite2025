// MovieApp의 손자, MovieList의 자식

export default function MovieItem(props){
    return(
        <>
            <li>
                {/* MovieItem이 부모에게 물려받은 데이터는 Movie
                    Movie =[{id: value, title: value, review: value}] */}
                {props.movie.title}
                <button type="button" onClick={()=>props.onSelect(props.movie)}>상세보기</button>
            </li>
        </>
    )
}