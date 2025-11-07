import { useState } from "react";
import DaumPostCode from 'react-daum-postcode';
import './Postcode.css';

export default function PostCode(){

    const [zipcode,setZipcode]=useState(''); // 우편번호
    const [address,setAddress]=useState(''); // 주소

    const [isOpen,setIsOpen]=useState(false);

    const FindHandeler=(data)=>{
        let arr='';
        if(data.userSelectedType === 'R'){
            arr=data.roadAddress;
        }else{
            arr=data.jibunAddress;
        }
        setZipcode(data.zonecode);
        setAddress(arr)
    }

    const toggle=()=>{
        setIsOpen(!isOpen);
    }
    console.log(isOpen);

    return(
        <div className="address">
            <div className="postcode">
                <p>주소</p>
                <input type="text" value={zipcode} placeholder="우편번호" readOnly name="post" id="post"/>
                <button type="button" onClick={toggle}>우편번호 검색</button>
            </div>
            <input type="text" value={address} placeholder="도로명주소" name="userAddress" id="userAddress"/>
            <input type="text" placeholder="상세주소" name="detailAddress" id="detailAddress"/>

            {isOpen &&
                <div className="modalOverlay">
                    <button type="button" onClick={toggle}>X</button>
                    <DaumPostCode onComplete={FindHandeler} className="modal"/>
                </div>
            }
            

        </div>
    )
}