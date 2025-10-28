import {useState} from 'react'

export default function Changeimg01(){

    const [img,setImg]=useState('/images/girl.png')
    const [click,setClick]=useState(false)

    // 이미지 토글형식으로 변경하는 함수
    const toggle=()=>{
        click === false?
        setImg('/images/girl.png'):setImg('/images/boy.png')
        setClick(!click)
    }

    return(
        <> 
            {/* .public/images/girl.png => X */}
            <img src={img} alt='boy'></img>
            <button type='button' onClick={toggle}>이미지 변경</button>
        </>
    )
}