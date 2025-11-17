import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{items:[]},
    reducers:{
        add:(state,actions)=>{
            // 존재 => 배열이름.find(()=>조건), (값 있으면 -> 인덱스, 없으면 undefinded)
            const newItem=actions.payload; // newitem = {id:1, ~~~}
            const existIndex= state.items.find((item)=>item.id == newItem.id)

            if(existIndex === undefined){
                // 장바구니에 같은 상품 존재 X
                // 01. 얕은 복사 방법은 push하면서 수량까지 추가 못함
                //     let newitemCopy=[...newItem]
                //     state.items.push(newitemCopy)

                // 02. ...newItem => 스프레드 문법 ★
                //     newItem을 펼쳐서 보여줌
                //     const newItem = {
                //       id:1, name:'사과',price:1000
                //     }
                //     => 펼쳐놓은 이 공간에 quantity:1을 삽입시킴
                state.items.push({...newItem, quantity:1})
                console.log('추가됨?',actions.payload)
            }else{
                existIndex.quantity+=1;
            }
            
        },
        remove:(state,actions)=>{
            // state.items=state.items.filter((item)=>item.id !== actions.payload)
            console.log("여긴 뭐야")
            console.log(actions.payload)
            const delIndex = state.items.findIndex((item)=>item.id === actions.payload)
            if(delIndex !== -1){
                state.items.splice(delIndex,1)
            }
        },
        reset:(state)=>{
            state.items=[];
        },
        plus:(state,actions)=>{
            const plusIndex=state.items.findIndex((item)=>item.id===actions.payload)
            console.log('인덱스',plusIndex);
            if(plusIndex !== -1){
                state.items[plusIndex].quantity+=1;
                // console.log('plus',plus[plusIndex].quantity);
            }
        },
        minus:(state,actions)=>{
            // state없이 items 접근 불가
            // ★ find() => 값이 있으면 배열, 없으면 undefinded  ex) aaa=[{quantity:1}]
            const minusIndex=state.items.findIndex((item)=>item.id===actions.payload)
            if(minusIndex !== -1 && state.items[minusIndex] >1){
                state.items[minusIndex].quantity-=1;
            }
        }
    }
})

export const {add,remove,reset,plus,minus} = cartSlice.actions;
export default cartSlice.reducer;