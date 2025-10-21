// 함수이름은 반드시 대문자로 작성한다.
function Test12(){

    // 문제 01. score의 값에 따라 다른 색상을 표시하시오.
    // score가 80이상이면 파란색,
    // score가 60이상이면 초록색,
    // 그 외에는 빨간색으로 출력
    // (단, 3항연산자 이용)
    const score01=65;
    // 함수 안에는 반드시 return()안에 작성
    return(
        // 빈 태그(프래그먼트 이용해 작성)
        <>
            <h2 style={{color:score01>=80?'blue':score01>=60?'green':'red'}}>{score01}점</h2>
        </>
    )
}
// Test12 함수를 내보내기
export default Test12;