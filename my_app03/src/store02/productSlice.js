import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name:'product',
    initialState:{items:[]},
    // 동기적으로 상태 변경하는 함수들 모임
    // 동기적 => 버튼 클릭, 또는 입력 change / 총계구하는 함수 => 작성 X
    reducers:{
        // set + 작명 => 업데이트 의미를 가지는 함수를 생성하기로 약속
        setData:(state,action)=>{
            state.items=action.payload
        }
    }
})

export const {setData}=ProductSlice.actions;
export default ProductSlice.reducer;