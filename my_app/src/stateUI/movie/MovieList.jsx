import {useState} from 'react';
import MovieModal from '../movie/MovieModal';

export default function Movie_List(props){

    // modal 창(false로 지정)
    const [modal,setModal]=useState(false);
    // 선택된 글의 인덱스 지정
    const [selectedIndex,setSelectedIndex]=useState(null);

    {modal && <MovieModal 
                movieLists={props.movieLists}
                selectedIndex={selectedIndex}
                modalClose={()=>{setModal(false)}}
            />}

    // const nonReview=()=>{
    //     props.movieLists.review ===''? alert('아직 작성된 리뷰가 없습니다.'):null
    // }
    const nonReview=()=>{
        if(item.review===''){
            alert('아직 작성된 리뷰가 없습니다.')
        }else{
            setModal(true);
            setSelectedIndex(id);
        }
    }

    console.log(props.movieLists);

    return(
        <>
            <ul>
                {props.movieLists.map((item,id)=>(
                    <li key={id}>
                        <span>{item.title}</span>
                        {/* <button onClick={()=>{setModal(true);setSelectedIndex(id);}}>상세보기</button> */}
                        <button onClick={nonReview}>상세보기</button>
                    </li>
                ))}
            </ul>
        </>
    )
}