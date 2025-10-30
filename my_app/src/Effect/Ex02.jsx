import { useEffect, useState } from "react";

export default function Ex02(){

    useEffect(()=>{
        document.title='Welcome to React';
    },[]);

    return(
        <>
            <h2>Title changer</h2>
            <p>브라우저 탭을 확인해보세요!</p>
        </>
    )

}