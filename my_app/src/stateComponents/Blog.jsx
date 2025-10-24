// 01. useState() 훅(hook)을 import함
import React,{useState} from "react";


export default function Blog(){

    const [post,setPost]=useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
    const [like,setLike]=useState([0,0,0]);
    const [inputValue,setInputValue]=useState('');
    // 모달 창이 안보이는 상태를 false로 지정
    const [modalOpen,setModalOpen]=useState(false);
    // 선택된 글의 인덱스 지정
    const [selectedIndex,setSelectedIndex]=useState(null);

    // 실행 로직 함수 -------------------------------------------------------
    
    // - 글 추가 함수 
    const addPost=()=>{
        //   (글을 추가하면 위로 추가 / 배열이름.unShift()이용)
        //   (배열, 오브젝트, 오브젝트 배열은 React에서 useState 훅 사용시
        //    힙의 메모리 주소가 같은지 다른지 비교하여 랜더링함) 
        //    => 얕은 복사 필요!!! [...배열이름]
        let postCopy=[...post]
        postCopy.unshift(inputValue);

        // setPost 함수형 변수에 변경된 변수를 담아둠
        setPost(postCopy)

        // - 예외처리 : 혹시 모를 데이터의 필요없는 오류로 부터 
        //              데이터가 정확하게 입력되도록 로직으로 예외를 처리하는 작업
        //   input에 입력받은 값이 공백일 때는 추가 금지하는 코드 필요
        if(inputValue.trim()===''){
            return alert('자료를 입력하세요')
        }
        
        // ===================================================
        // - 좋아요 추가 함수
        let likeCopy=[...like];
        likeCopy.unshift(0);
        setLike(likeCopy);

        // input 입력한 글이 발행버튼 클릭과 동시에 지워지는 코드
        setInputValue('')
    }
    

        // - 글 삭제 함수
        //   삭제할 글의 index번호를 알아야함
        const delPost=(index)=>{
            // 배열삭제 프로퍼티 : splice(시작위치, 삭제할 길이)
            let postCopy=[...post]
            let likeCopy=[...like];
            // 글 삭제
            postCopy.splice(index,1);
            setPost(postCopy);
            // 좋아요 삭제
            likeCopy.splice(index,1);
            setLike(likeCopy);
        }

        // 좋아요 증가 함수
        // 증가해야하는 index번호 알아야함
        const addLike=(index)=>{
            let likeCopy=[...like];
            // 좋아요 증가 코드 (얕은 복사했기 때문에)
            likeCopy[index]+=1;
            // 업데이트
            setLike(likeCopy);
        }
    

    // const plusPostBtn=()=>{
    //     setPost([...item,post.length+1]);
    // }
    // ----------------------------------------------------------------------------
    // react에서 로직함수 생성 후 return의 태그에 지정하는 방식의
    // 차이로 인해 랜더링이 안될 수 있음
    // 1. onClick = {addPost} : 클릭할 때마다 실행(정상)
    // 2. onClick = {()=>addPost()} : 클릭할 때마다 실행(정상)
    // 3. onClick = {addPost()} : 랜더링 시 바로 실행, 일명 즉시 실행 함수임
    
    
    return(
        <>
            <ul>
                {post.map((post,index)=>(

                    // 배열이라서 index 넣음
                    <li key={index}> 
                        {/*  함수 2개 넣는 방법 !!!!! */}
                        <span onClick={()=>{setModalOpen(true);setSelectedIndex(index)}}>{post}</span>
                        {/* post.map((post,index)라고 넣어서 addLike(index)라고 작성
                                             i   라고 한다면           i   라고 작성 */}
                        <span onClick={()=>addLike(index)}>👍</span>
                        <span>{like[index]}</span>
                        <p>11월 1일 발생</p>
                        <button onClick={()=>delPost(index)}>삭제</button>
                    </li>
                ))}
            </ul>
            <input type="text" value={inputValue} placeholder="여기에 입력" onChange={(e)=>setInputValue(e.target.value)}></input>
            <button onClick={addPost}>글발행</button>

            {/* 자식한테 보내는 것 : 글제목, 글 인덱스, 모달닫기함수, color */}
            {modalOpen && <Modal 
            color={'lightgray'}
            title={post}
            setPost={setPost}
            index={selectedIndex}
            // modalOpen을 그냥 자식한테 보내는게 아니라
            // 함수를 넣어서(flase값을 넣은) 바로 보냄 !!!!
            onClose={()=>setModalOpen(false)}
            />}

        </>
    )
}

// 자식
function Modal(props){
    // 업데이트 함수 필요
    // 업데이트 조건 => 얕은 복사

    // 1. props.title를 얕은 복사함
    //    let titleCopy=[...props.title]

    // 2. propmt("새 제목을 입력하세요",~~~~)
    //    titleCopy[props.index] = propmt("새 제목을 입력하세요",~~~~)

    // 3. titleCopy[props.index] => titleCopy[0] => 남자코트 추천

    // 4. 수정한 글제목을 업데이트해야함
    //    props.setPost(titleCopy)

    const update=()=>{
        let titleCopy=[...props.title]
        //                                           입력값이거나,                              null이면 기존값 !!!!
        titleCopy[props.index]=prompt("새 글 제목을 입력하세요.",titleCopy[props.index]) || titleCopy[props.index]
        // if(titleCopy[props.index]=prompt("새 글 제목을 입력하세요.",titleCopy[props.index])){

        // }
        props.setPost(titleCopy);
    }

    return(
        <>
            <div className="modal" style={{backgroundColor:props.color}}>
                <h4>{props.title[props.index]}</h4>
                <p>날짜: 11월 1일</p>
                <p>상세내용: 여기에 내용을 넣어보세요</p>
                <button onClick={update}>글수정</button>
                <button onClick={props.onClose}>닫기</button>
            </div>
        </>
    )
}