import React,{useState} from "react";

export default function ShoppingList(){

    const [items, setItems] = useState([
            { id:0, name: '우유', done: false },
            { id:1, name: '계란', done: false },
            ]);

    const [inputItem,setInputItem]=useState('');
    const [changeLine,setChangeLine]=useState('');

    // 실행 로직 함수

    // - 항목 추가 함수
    const addItem=()=>{
        let addCopy=[...items];
        addCopy.unshift({id: items.length, name:inputItem, done: false});
        setItems(addCopy);
    }

    const addClick=(e)=>{
        setInputItem(e.target.value);
    }

    // - 항목 삭제 함수
    const delItem=(index)=>{
        let addCopy=[...items];
        // addCopy[index].splice()
        addCopy.splice(index,1);
        setItems(addCopy);
    }

    // 취소선 함수
    // function changeText(){
    //     setChangeLine(changeLine==='lineThrough'? '':'lineThrough');
    // }
    // - 구매 완료 버튼 클릭 시 변하는 함수 (취소선 생김, 버튼 바뀜)
    const trueFalse=(index)=>{
        let addCopy=[...items];
        if(addCopy[index].done===false){
            addCopy[index].done=true;
        }else{
            addCopy[index].done=false;
        }
        setItems(addCopy);
    }

    console.log(items);

    return(
        <>
            <h2>🌈쇼핑리스트</h2>
            <input type="text" placeholder="물건 이름 입력" onChange={addClick}></input>
            <button onClick={addItem}>추가</button>
            <ul>
                {items.map((item,index)=>(
                    <li key={index}>
                        <span style={{textDecoration: item.done ?'line-through':''}}>{item.name}</span>
                        <button onClick={()=>trueFalse(index)}>{item.done ?'취소':'구매완료'}</button>
                        <button onClick={delItem}>삭제</button>
                    </li>
                ))}
            </ul>
        </>
    )
}