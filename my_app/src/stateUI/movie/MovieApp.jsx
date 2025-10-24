import {useState} from 'react';
import Movie_List from '../movie/MovieList';
// import MovieItem from '../movie/MovieItem';


export default function MovieApp(){

    // 영화 리스트
    const [movieLists,setMovieLists]=useState([{}])
    // 입력값
    const [title,setTitle]=useState('');
    const [review,setReview]=useState('');

    // 실행 함수

    // - 영화 추가 함수
    const addMovieList=()=>{
        let movieListCopy=[...movieLists];
        movieListCopy.unshift({id: movieLists.length, title: title, review: review});
        setMovieLists(movieListCopy);
        // 공백 추가
        setTitle('');
        setReview('');
    }


    return(
        <div>
            <h2>영화 리뷰 관리 앱🍤</h2>
            <input type='text'placeholder='영화제목'onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <input type='text'placeholder='리뷰'onChange={(e)=>setReview(e.target.value)} value={review}></input>
            <button onClick={addMovieList}>추가</button>
            <Movie_List movieLists={movieLists}/>
            {/* <ul>
                {movieLists.map((item,id)=>(
                    <li key={id}>
                        <span>{item.title}</span>
                        <button onClick={()=>{setModal(true);setSelectedIndex(id)}}>상세보기</button>
                    </li>
                ))}
            </ul> */}
            {/* {modal && <MovieModal 
                movieLists={movieLists}
                selectedIndex={selectedIndex}
                modalClose={()=>{setModal(false)}}
            />} */}
            
            

        </div>
    )
}