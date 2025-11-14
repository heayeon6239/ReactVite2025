// counterReducer.js 파일은 상태(state)와 동작(action)을 정의하는 가장 핵심 로직
// Redux의 동작 원리
// ( 리듀서 -> 스토어 -> Provider -> 컴포넌트 )
const initialState = {count:0} // 초기값 / initialState -> 예약어, 작명 X

export default function counterReducer(state = initialState, action){
    // swich문을 이용하여 직접 함수 생성해야함
    switch(action.type){
        case 'INCREMENT':
            return {count:state.count+1} // count가 1씩 증가하는 함수
        case 'DECREMENT':
            return {count:state.count-1} // count가 1씩 감소하는 함수
        default:
            return state;
    }
}