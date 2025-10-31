import { useEffect,useState } from "react";
// 01. 상태변수 유무 생각
// 02. useEffect를 어디 사용할지
// 03. UI 어떻게 출력할건지
// 04. 컴포넌트 분리 유무
// 05. JSON을 이용해 데이터를 가져오기 위해 해야하는 상황 고려
//     userID 피라미터 상태를 저장하는 변수 필요
// 06. 상태변수를 사용하는 경우 useState(초기값)을 생각

export default function ExJ03(){

    const[loading,setLoading]=useState(true);
    const[data,setData]=useState([]);
    const[errMsg,setErrMsg]=useState(null);

    useEffect(()=>{
        
        console.log('데이터 요청 시작')
        fetch('https://jsonplaceholder.typicode.com/userss')

        .then((res)=>{
            // 데이터가 오류 아님 res.ok = true (200 ~ 299)
            // 데이터가 오류      res.ok = false ( HTTP 400/500 )

            // HTTP 400/500 에러를 fecth가 잡지 못하기 때문에
            // res.ok를 이용해서 error를 잡는 것

            // res.ok는 bollean 데이터 타입
            // (boolean은 오직 true,false만 가질 수 있음)
            if(!res.ok){
                throw new Error(`HTTP error! status: ${res.status}`) 
                // (이걸 안쓰면 .catch()도 쓸 필요가 없음) !!!
                // res.status -> 지금 현재 오류 상태가 출력됨 ex) 404 Not Found
                // res.ok 를 넣으면 -> flase 가 나옴
            }
            return res.json()
        })
        .then((data)=>{
            console.log('가져온 데이터',data)
            setData(data)
        })
        // catch 는 res.ok의 에러체크 부분이 없으면 출력되지 않음
        .catch((err)=>{
            console.log('x 에러 발생',err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            console.log('요청 완료')
            setLoading(false)
        })

    },[]);

    if(loading){
        return <p>데이터 불러오는 중임</p>
    };
    if(errMsg){
        return <h3 style={{color:'red'}}>데이터 요청 실패!</h3>
    }
    
    
    return(
        <div>
            
        </div>
    )
}