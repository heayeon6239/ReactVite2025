// 자식 UI

    // <postList
    //     post={post} 
    //     like={like} 
    //     setModalOpen={setModalOpen} 
    //     setSelectedIndex={setSelectedIndex} 
    //     delPost={delPost} 
    //     addLike={addLike}
    // />

export default function PostList(props){
    return(
        <>
            <div>
                <ul>
                    {props.post.map((post,index)=>(

                        // 배열이라서 index 넣음
                        <li key={index}> 
                            {/*  함수 2개 넣는 방법 !!!!! */}
                            <span onClick={()=>{props.setModalOpen(true);props.setSelectedIndex(index)}}>{post}</span>
                            {/* post.map((post,index)라고 넣어서 addLike(index)라고 작성
                                                i   라고 한다면           i   라고 작성 */}
                            <span onClick={(e)=>{e.stopPropagation();props.addLike(index)}}>👍</span>
                            {/* 버블링 : 자식을 선택해도 부모요소인 <h4>태그가 실행됨
                                버블링 해결 메소드 : e.stopPropagation() */}
                            <span>{props.like[index]}</span>
                            <p>11월 1일 발생</p>
                            <button onClick={()=>props.delPost(index)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}