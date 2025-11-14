// Counter.jsx 파일은 컴포넌트 파일로 UI
// useSelector(상태 읽음)와 useDispatch(액션 보냄)인 훅을 이용하여 상태를 읽고, 액션을 보냄
// useDispatch는 단순히 값만 보냄
// counterReducer이 그 값을 처리해서 store에 저장
// Counter.jsx가 useSelector로 그걸 읽음
import { useSelector,useDispatch } from "react-redux";

export default function Counter(){
    // useSelector을 이용하여 state의 count를 읽어옴
    const count = useSelector(state => state.count)
    console.log('처음이야',count)
    // useDispatch를 이용하여 내보냄
    const dispatch = useDispatch()

    // + => 10까지, 그 이상은 alret
    // - => 0까지, 그 이하는 alret
    const PlusHandeler=()=>{
        if(count>=10){
            alert('10까지')
        }else{
            dispatch({type:'INCREMENT'})
        }
    }
    const MinusHandeler=()=>{
        if(count<=0){
            alert('0까지')
        }else{
            dispatch({type:'DECREMENT'})
        }
    }

    return(
        <>
            <h2>count {count}</h2>
            <button type="button" onClick={PlusHandeler}>+</button>
            <button type="button" onClick={MinusHandeler}>-</button>
        </>
    )
}