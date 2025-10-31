import { useEffect,useState } from "react";
// 01. 상태변수 유무 생각
// 02. useEffect를 어디 사용할지
// 03. UI 어떻게 출력할건지
// 04. 컴포넌트 분리 유무
// 05. JSON을 이용해 데이터를 가져오기 위해 해야하는 상황 고려
//     userID 피라미터 상태를 저장하는 변수 필요
// 06. 상태변수를 사용하는 경우 useState(초기값)을 생각

export default function ExJ01(){

    const[userId,setUserId]=useState(1);

    const idPlus=()=>{
        setUserId(userId+1);
    }
    
    // 값을 하나만 출력할 땐 배열말고
    const[result,setResult]=useState(null);
    const[data,setData]=useState([]);

    // JSON의 데이터 받은 부분을 함수로 정의
    const JSONdata=()=>{
        console.log('데이터 요청 시작');

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        // res의 원문 response객체는 이미 react에 존재
        // res 줄임말은 약속같은 의미
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP error! status: ${res.status}`)
            }

            return res.json()
            // 한줄로 쓸 떈 -> { return } 중괄호와 return 빼도 됨
        })
        // res.json()이 넘겨준 데이터를 매개변수 data에 저장
        .then((data)=>{
            console.log('가져온 데이터',data)
            setResult(data)
        })
        // JSON에서 가져오는 데이터가 실패, 성공 상관없이 무조건 출력
        .finally(()=>{
            console.log('요청 완료')
            setLoading(false)
        })
    }

    // 01. 상태변수
    
    // 로딩 중 표시
    const[loading,setLoading]=useState(true);
    // 가져온 데이터 저장
    // 배열 -> 여러개의 자료를 저장
    // 여러개의 자료가 반복되며 출력 -> .map()으로 출력하는게 정석
    // const[data,setData]=useState([]);

    useEffect(()=>{
        JSONdata()  
    },[userId]);

    // 02. 화면 표시
    if(loading){
        return <p>데이터 불러오는 중</p>
    }

    return(
        <div>
            <h2>현재 선택된 사용자 ID:</h2>
            <h2>{userId}</h2>
            <button type="button" onClick={idPlus}>다른 사용자 보기</button>
            {result &&
                <div>
                    <h3>{result.name}</h3>
                    <p>{result.email}</p>
                </div>
            }
        </div>
    )
}