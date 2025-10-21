function Counter01(){
    // 버튼을 클릭해도 콘솔의 값은 누적되어 보여짐
    // 그러나 화면의 현재 카운트의 값은 변하지 X
    // 이유 : count는 단순히 메모리 안에서만 값이 변경되었고
    //        react는 값이 변경된 걸 알지 못함
    // 값이 동적으로 변해야하는 경우는 무조건 useState() 훅(hook)사용
    let count=0

    function increase(){
        count=count+1
        console.log('count 누적'+count)
    }
    return(
        <>
            <p>현재 카운트 : {count}</p>
            <button type="button" onClick={increase}>+1</button>
        </>
    )
}
export default Counter01