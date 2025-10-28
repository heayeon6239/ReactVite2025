import {useState} from 'react'

export default function Changeimg04(){
    
    // 카테고리: 1, 카테고리:2 => 카테고리별 이미지를 탭메뉴에 출력
    // 조건에 만족하는 값을 하나가 아니라 여러개 배열로 추출하는 함수

    // < 배열이름.filter((요소,인덱스,원본배열)=>{return조건}) >
    // 조건에 만족   -> 새로운 배열을 반환함
    // 조건에 만족 X -> 빈 배열 [ ] 반환함
    // imgs.filter((img)=>조건입력) => 조건에 만족 [{id:1},{id:2},{id:3},{id:4}]
     const imgs = [
        { id: 1, name: 'pic-1.jpg', category: 1 },
        { id: 2, name: 'pic-2.jpg', category: 1 },
        { id: 3, name: 'pic-3.jpg', category: 1 },
        { id: 4, name: 'pic-4.jpg', category: 1 },
        { id: 5, name: 'tree-1.jpg', category: 2 },
        { id: 6, name: 'tree-2.jpg', category: 2 },
        { id: 7, name: 'tree-3.jpg', category: 2 },
        { id: 8, name: 'tree-4.jpg', category: 2 },
    ];
    // 내가 선택한 카테고리의 값이 담기는 변수 초기값을 1로 지정
    // 카테고리 1번의 배경이미지가 출력되도록 의도
    const[selectCate,setSelectCate]=useState(1);

    // 배경 필터
    // const filterImg= imgs.filter((img)=>{return img.category===selectCate});
    const filterImg= imgs.filter((img)=> img.category===selectCate);
    console.log('여기까지')
    console.log(filterImg)

    // 나무 필터

    return(
        <> 
            <h2>이미지 탭 전환 예제</h2>
            <button type='button' onClick={()=>setSelectCate(1)}>배경</button>
            <button type='button' onClick={()=>setSelectCate(2)}>나무</button>
            <div className="img_area">
                {filterImg.map((img)=>(
                    <img key={img.id} src={`/images/${img.name}`} alt={img.name}/>
                ))}
            </div>
        </>
    )
}