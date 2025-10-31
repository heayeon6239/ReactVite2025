import { useEffect,useState } from "react";
// 01. 상태변수 유무 생각
// 02. useEffect를 어디 사용할지
// 03. UI 어떻게 출력할건지
// 04. 컴포넌트 분리 유무
// 05. JSON을 이용해 데이터를 가져오기 위해 해야하는 상황 고려
//     userID 피라미터 상태를 저장하는 변수 필요
// 06. 상태변수를 사용하는 경우 useState(초기값)을 생각

export default function ExJ02(){

    const[loading,setLoading]=useState(true);
    const[data,setData]=useState([]);
    const[errMsg,setErrMsg]=useState(null);

    useEffect(()=>{
        
        console.log('데이터 요청 시작')
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json()
        })
        .then((data)=>{
            console.log('가져온 데이터',data)
            setData(data)
        })
        .catch((err)=>{
            console,log('x 에러 발생',err)
            setErrMsg(err)
        })
        .finally(()=>{
            console.log('요청 완료')
            setLoading(false);
        })

    },[]);

    if(loading){
        return <p>데이터 불러오는 중....</p>
    }
    // error 출력
    if(errMsg){
        return <p>x 에러 : {errMsg}</p>
    }

    const titleAlert=(titleItem)=>{
        alert(titleItem);
    }

    
    return(
        <div>
            <h2>게시글 5개</h2>
            <ul>
                {data.slice(0,5).map((item)=>(
                    <li key={item.id} onClick={()=>titleAlert(item.body)}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}