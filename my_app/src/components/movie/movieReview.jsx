import React,{useState} from "react";

export default function MovieReview(){

    const [reviews,setReviews]=useState([
         { id: 0, title: '인셉션', comment: '꿈속의 꿈! 최고였어요.', likes: 0 },
         { id: 1, title: '인터스텔라', comment: '음악이 너무 웅장해요.', likes: 0 },
    ])
    const [inputReviews01,setInputReviews01]=useState('');
    const [inputReviews02,setInputReviews02]=useState('');

    // const [inputReviews,setInputReviews]=useState([])

    // 실행 로직 함수

    // - 리뷰 추가 함수
    const addReviews=()=>{
        //  글 추가 
        let reviewCopy=[...reviews];
        // let inputCopy01=[...inputReviews01];
        // let inputCopy02=[...inputReviews02];
        reviewCopy.unshift({id: reviews.length, title: inputReviews01, comment: inputReviews02, likes: 0 });
        setReviews(reviewCopy);
    }

    const addTitle=(e)=>{
        setInputReviews01(e.target.value);
    }
    const addComment=(e)=>{
        setInputReviews02(e.target.value);
    }

    // - 리뷰 삭제 함수 (삭제할 index 번호를 알아야함)
    const delReviews=(index)=>{
        let reviewCopy=[...reviews];
        // 글 삭제
        reviewCopy.splice(index,1);
        setReviews(reviewCopy);
    }

    // - 좋아요 증가 함수 (증가할 index 번호를 알아야함)
    const addLike=(index)=>{
        let reviewCopy=[...reviews];
        reviewCopy[index].likes+=1;
        setReviews(reviewCopy);
    }
    // console.log(reviewCopy);
        
    return(
        <>
            <h2>🎞나의 영화 리뷰</h2>
            <input type="text" placeholder="영화 제목" onChange={addTitle}></input>
            <input type="text" placeholder="한줄평" onChange={addComment}></input>
            <button onClick={addReviews}>등록</button>

            <ul>
                {reviews.map((reviews,index)=>(
                    <li key={index}>
                        <strong>{reviews.title}</strong>
                        <p>{reviews.comment}</p>
                        <span onClick={()=>addLike(index)}>👍{reviews.likes}</span>
                        <button onClick={()=>delReviews(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </>
    )
}