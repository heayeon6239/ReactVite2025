// 1단계  : slice 파일 만들기
// 리덕스의 상태+로직을 정의하는 부분
// -> 이 단계에서는 state 구조, state를 변경하는 reducer함수 그리고 action 생성 함수를 정의
// 생성하는 라이브러리는 createSlice()이며, import함
import {createSlice} from '@reduxjs/toolkit'

const countSlice = createSlice({
    // name, initialState, reducers => 모두 예약어, 작명 금지
    name:'counter', // state 이름으로 store에서 접근할 때 key로 사용
    initialState:{value:0}, 
    // 초기값 0, 'A', boolean값(true, false)
    // {item : []}, {object : {id:1, name:'키위'}}
    reducers:{
        increment:(state)=>{state.value += 1},
        decrement:(state)=>{state.value -= 1},
        reset:(state)=>{state.value=0},
        // 5씩 더하는 함수를 생성 => action의 payload를 이용해 상태를 변경
        incrementByAmount:(state,action)=>{state.value += action.payload},
    }
})
// countSlice.actions => action.type => {type:'counter/increment'}.. 자동생성해줌
export const {increment,decrement,reset,incrementByAmount} = countSlice.actions
console.log(countSlice.actions)
// countSlice.reducer는 => Switch(action.type) {case 'counter/increment : return state.value+1} 함수를 의미
export default countSlice.reducer;
