import {useState} from 'react'

export default function Hover04(){
    // activeTab = null 이면 이동할 tab을 찾을 때 사용
    const [activeTab,setActiveTab]=useState(null)
    const tabs=[
        {id:1, title: 'HTML', content:'HTML은 웹의 구조를 담당한다.'},
        {id:2, title: 'CSS', content:'CSS는 스타일을 담당한다.'},
        {id:3, title: 'JavaScript', content:'JavaScript는 동작을 담당한다.'},
    ]

    // < 활성화된 탭의 내용을 찾는 코드 필요 >

    // 배열이름.find((요소,인덱스,원본배열)=>{return 조건})
    // 조건을 만족하는 첫번째 요소(그 객체 또는 값)을 반환
    // 만약 못 찾으면 undefinded를 반환
    // (검색이나 상세보기 .... 에서 사용)
    let contentText="탭 위에 마우스를 올려보세요." // 기본 text
    if(activeTab !== null){ // (item.id 가 들어있음)
        // activeTab에 같은 id를 가진 탭을 찾아야 함 
        // findTab = 1 or 2 or 3 (item.id 가 들어있음) !!!!!!!!
        const findTab=tabs.find((tab)=>tab.id===activeTab)
        console.log('여기까지'+findTab);
        // 탭을 찾았으면 그 탭의 내용(content)를 contentText = content로 수정
        if(findTab){
            console.log('여기까지 2'+findTab);
            console.log(findTab);
            contentText=findTab.content
            console.log('text'+contentText);
        }
    }

    return(
        <div style={{width:'400px', margin:'50px auto'}}>
            <h3>Hover Tab Menu</h3>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                {/* tabs.map((요소(이름은 별칭),인덱스,원본배열)=>()) */}
                {tabs.map((item)=>(
                    // map() => 반드시 태그의 고유 번호 (key) 필요
                    <div key={item.id} 
                    onMouseEnter={()=>setActiveTab(item.id)} // 마우스 활성화(찾는값 존재)
                    onMouseLeave={()=>setActiveTab(null)} // 마우스 비활성화(찾는값 존재 X)
                    >
                        {item.title}
                    </div>
                ))}
            </div>
            {/* 탭 영역 */}
            <div style={{marginTop:'20px',padding:'15px',
            backgroundColor:'#fefefe',borderRadius:'5px', height:'50px'}}>
                    <div>{contentText}</div>
            </div>
        </div>
    )
}