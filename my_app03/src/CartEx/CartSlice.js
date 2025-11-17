import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    // store에 저장될 key의 이름 ★
    name:'cart', 
    // items=[] 빈배열 생성, 초기값 생성
    initialState:{items:[]}, 
    // 로직
    reducers:{ 
        // 계속 같은 상품만 push됨
        // add:(state)=>{state.items.push({id:1, name:'사과',price:1000}) } 
        //    = 매개변수 !!
        add:(state,actions)=>{
            console.log('삽입됨?')
            console.log(actions.payload)
            state.items.push(actions.payload) 
        },
        remove:(state,actions)=>{
            console.log('id 뭐야?',actions.payload);
            // 같은 상품이 존재하면 삭제, 아니면 삭제 불가
            // 배열이름.findIndex(()=>조건) => 존재하는 값의 인덱스 번호 출력
            // 값이 존재하지 않으면 -1 출력
            // const delIndex= state.items.findIndex((item)=>item.id===actions.payload)
            // if(delIndex !== -1){ // 찾는 값 존재 = 삭제
            //     state.items.splice(delIndex,1)
            // } 
            state.items= state.items.filter((item)=>item.id !== actions.payload)
        },
        reset:(state)=>{
            state.items =[];
        }
    }
})

// 위에서 작성한 로직, 이름 전부 export로 내보내야함
export const {add,remove,reset}=cartSlice.actions; // 함수로 만들어주는 부분 ★
export default cartSlice.reducer; // switch ~ case문을 이용한 함수를 자동생성하는 부분 ★