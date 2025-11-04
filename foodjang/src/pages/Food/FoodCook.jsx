import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function FoodCook({data}){

    // const[level,setLevel]=useState([]);
    const[tab,setTab]=useState(0);

    const levelCopy=[...data];
    const levelSort=levelCopy.filter((item)=>item.difficulty===tab)

    const levelClick=(num)=>{
        if(num===1){
            setTab('Medium');
        }else if(num===2){
            setTab('Easy');
        }else if(num===0){
            setTab(0);
        }
    };
    console.log(levelSort);

    // hover
    const [levelHover,setLevelHover]=useState(false);

    return(
        <div className='FoodCook'>
            <div className='tabMenu'
                onMouseEnter={()=>setLevelHover(true)}
                onMouseLeave={()=>setLevelHover(false)}>
                <p>
                    난이도  -  {tab === 0 ? 'All' : tab}
                </p>
                <div className='hover'
                style={{display:levelHover ? 'block':'none'}}>
                    <p onClick={()=>levelClick(0)}>All</p>
                    <p onClick={()=>levelClick(1)}>Medium</p>
                    <p onClick={()=>levelClick(2)}>Easy</p>
                </div>
            </div>
            

            <ul>
                {(tab === 0 ? data : levelSort).map((item)=>(
                    <li key={item.id}>
                        <img src={item.image} alt={item.name}/>
                        <p className="name">{item.name}</p>
                        <p>★ {item.rating}</p>
                        <p>리뷰: {item.reviewCount} 개</p>
                        <p>{item.caloriesPerServing} cal</p>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}