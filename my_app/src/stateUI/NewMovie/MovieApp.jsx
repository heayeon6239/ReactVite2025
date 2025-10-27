import  {useState} from 'react'
import MovieList from '../NewMovie/MovieList'
import MovieModal from '../NewMovie/MovieModal'

export default function NewMovie(){
    // 영화 제목, 리뷰 담는 변수
    const [movie,setMovie]=useState([])
    // const [movie,setMovie]=useState([{}]) 
    // -> 배열 0번 위치에 빈 오브젝트가 생성되어 랜더링이 되면서 무조건 빈 그림이 그려짐
    // React에서는 useState([{}]) => 사용하지 X

    // 선택한 영화가 없으면 null
    const[selectMovie,setSelectMovie]=useState(null)
    // 영화 제목 담는 변수
    const[title,setTitle]=useState('')
    // 영화 리뷰 담는 변수
    const[review,setReview]=useState('')

    // 실행 함수

    // 영화 제목, 리뷰가 같이 저장되는 오브젝트 배열에 입력한 데이터가 삽입되는 함수
    const addMovie=()=>{
        // title이 빈값이면 return으로 종료
        if(title==='')return;
        // 얕은 복사
        let movieCopy=[...movie];
        // movie =[{}]삽입하고자 함
        // 오브젝트 = {key:value, key:value, ......} 
        // 오브젝트는 반드시 id 필요 / id:movie.length -> 삭제 이슈
        // 삭제이슈없이 작성하고자 한다면 -> id:Date.now()
        movieCopy.push({id:movie.length, title:title, review:review}); // [] 배열이기 때문에 push 가능
        // 반드시 업데이트해야 재랜더링됨
        setMovie(movieCopy);
        // title, review의 input에 입력된 후 입력된 글자 비워주기
        setTitle('')
        setReview('')
    }
    


    return(
        <>
            <div>
                <h2>영화 리뷰 관리 앱</h2>
                <input type='text' placeholder='영화제목' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <input type='text' placeholder='리뷰' value={review} onChange={(e)=>setReview(e.target.value)}></input>
                <button type='button'onClick={addMovie}>추가</button>
                {/* 자식 컴포넌트 태그로 넣기 */}
                {/* movie, setSelectMovie */}
                <MovieList
                    movie={movie}
                    onSelect={setSelectMovie}
                />
                {/* 모달이 열리고 닫힘 
                    selectMovie !=null 아니면 -> 모달출력, 아니면 -> null !!!!
                    (null은 빈값이 X 아무것도 그려지지 않음) */}
                    {selectMovie != null ? <MovieModal selectMovie={selectMovie} onClose={()=>setSelectMovie(null)}/> : null}
            </div>
        </>
    )
}