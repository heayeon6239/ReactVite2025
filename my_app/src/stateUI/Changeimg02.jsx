import {useState} from 'react'

export default function Changeimg02(){

    const imgs = [
        '/images/coffee-gray.jpg',
        '/images/coffee-blue.jpg',
        '/images/coffee-pink.jpg',
    ];

    const [imgIndex,setImgIndex]=useState(0)

    // 클릭할때마다 이미지 변경 함수
    const changeImg=()=>{
        if(imgIndex === imgs.length-1){
            setImgIndex(0);
        }else{
            setImgIndex(imgIndex+1);
        }
        // index = 0 / 3 => 나머지 0
        // index = 1 / 3 => 나머지 1
        // index = 2 / 3 => 나머지 2
        // index = 3 / 3 => 나머지 0
        // setImgIndex((index+1)%imgs.length)
    }


    return(
        <> 
            <img src={imgs[imgIndex]} alt='coffee' onClick={changeImg}/>
        </>
    )
}