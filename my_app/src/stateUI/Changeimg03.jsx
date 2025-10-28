import {useState} from 'react'

export default function Changeimg03(){

    const [img,setImg]=useState('/images/tree-4.jpg')

    return(
        <> 
            <img src={img} alt='tree' onMouseEnter={()=>setImg('/images/tree-4.jpg')} onMouseLeave={()=>setImg('/images/tree-5.jpg')} />
        </>
    )
}