// 구조분해 할당이란 : 변수지정한 값

// props는 부모 -> 자식으로 데이터를 전달
// 단, 읽기전용 데이터임
// 자식은 데이터를 수정할 수 없음

function Child({name}){
    return(
        <>
            {/* props.name */}
            <h2>안녕하세요~{name}님</h2>
        </>
    )
}
export default Child