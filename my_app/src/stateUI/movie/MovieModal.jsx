import {useState} from 'react';

export default function MovieModal(props){

    // 상세보기 함수(index 필요)
    // const modal_title=(index)=>{
    //     props.movieLists[index].title;
    // }
    

    return(
        <div className='overlay'>
            <div className='movieModals'>
                <h2>{props.movieLists[props.selectedIndex].title}</h2>
                <p>{props.movieLists[props.selectedIndex].review}</p>
                <button onClick={props.modalClose}>닫기</button>
            </div>
        </div>
    )
}