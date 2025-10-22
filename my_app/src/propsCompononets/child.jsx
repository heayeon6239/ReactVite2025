// 구조분해 할당이란 : 변수지정한 값

// props는 부모 -> 자식으로 데이터를 전달
// 단, 읽기전용 데이터임
// 자식은 데이터를 수정할 수 없음

// 서로 다른 파일에 존재하더라도 props로 가져올 수 있음
// 다만, props.name 이라고 직접 입력해야함 
// (props.name처럼 직접 입력해도 되고
//  구조분해할당 {name}해도 가능함 ) !!!!

function Child({name}){
    return(
        <>
            {/* props.name */}
            <h2>안녕하세요~{name}님</h2>
        </>
    )
}
export default Child