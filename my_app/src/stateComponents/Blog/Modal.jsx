// 자식 UI
export default function Modal(props){
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