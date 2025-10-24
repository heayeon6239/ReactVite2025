import React,{useState} from "react";

// 부모
export default function CommentBoard(){

    const [comments, setComments] = useState([
        { id:0, text: '리액트 재밌어요!', like: 0 },
        { id:1, text: 'useState 너무 신기해요', like: 0 },
        ]);

    const [inputComments,setInputComments]=useState('')

    // 실행 구문

    // - 등록 함수
    const addCom=()=>{
        let commentsCopy=[...comments];
        commentsCopy.unshift({id:comments.length, text: inputComments, like: 0});
        setComments(commentsCopy);
    }

    const inputText=(e)=>{
        setInputComments(e.target.value);
    }

    // - 삭제 함수 (매개변수 사용해서 index 번호 알아내기)
    const delCom=(index)=>{
        let commentsCopy=[...comments];
        commentsCopy.splice(index,1);
        setComments(commentsCopy);
    }
    
    // -  좋아요 증가 함수
    const plusLike=(index)=>{
        let commentsCopy=[...comments];
        // let likeNum=commentsCopy[index].like+1  ???????????;
        commentsCopy[index].like+=1;
        setComments(commentsCopy);
    }

    console.log(comments);
    return(
        <>
            <CommentItem 
                input_text={inputText}
                add_com={addCom}
                commentss={comments}
                del_com={delCom}
                plus_like={plusLike}
                // plus_likeNum={likeNum}
            />
        </>
    )
}

// 자식
function CommentItem(props){

    console.log(props.comments);
    return(
        <>
            <h2>🚑댓글게시판</h2>
            <input onChange={props.input_text} type="text" placeholder="댓글입력"></input>
            <button onClick={props.add_com}>등록</button>

            <ul>
                {props.comments.map((item,id)=>(
                    <li key={id}>
                        <p>{item.text}</p>
                        <span onClick={props.plus_like}>🎅{item.like}</span>
                        {/* <span onClick={props.plus_like}>🎅{props.plus_likeNum}</span> */}
                        <button onClick={props.del_com}>삭제</button>
                    </li>
                ))}
            </ul>
        </>
    )

}