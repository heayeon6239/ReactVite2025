import React,{useState} from "react";


// 부모
export default function ScoreManager(){

    const [scores,setScores]=useState([
        { id: 0, name:'김철수', score: 85},
        { id: 1, name:'이영희', score: 92},
        { id: 2, name:'박민수', score: 78},
    ])

    // 실행 함수

    // 점수 증가 함수
    // function plusScore(index){
    const onScoreIncrease=(index)=>{
        let scoresCopy=[...scores];
        scoresCopy[index].score+=10;
        setScores(scoresCopy);
    }
    console.log(scores);

    return(
        <>
            <StudentCard
                scoress={scores}
                plusScores={onScoreIncrease}
            />
        </>
    )
}

// 자식
function StudentCard(props){
    return(
        <>
            <h1>학생 점수 관리 시스템</h1>
            <ul>
                {props.scoress.map((item,id)=>(
                    <li key={id}>
                        <h4>{item.name}</h4>
                        <p>점수:{}점</p>
                        <button onClick={props.plusScores}>+10점</button>
                    </li>
                )) }
            </ul>
        </>
    )
}