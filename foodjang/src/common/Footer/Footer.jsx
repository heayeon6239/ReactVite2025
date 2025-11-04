import { useState } from "react"
import {Link} from "react-router-dom"
import '../Footer/Footer.css'

export default function Footer(){
    return(
        <div className="Foot">
            <div className="Footer">
                <div className="footer01">
                    <div className="left_01">
                        <span>회사소개</span>
                        <span>공고</span>
                        <span>이용안내</span>
                        <span>개인정보처리방침</span>
                        <span>이용약관</span>
                        <span>입점문의</span>
                        <span>대량주문</span>
                        <span>1:1문의</span>
                        <span>이용후기</span>
                    </div>
                    <div className="right_01">
                        <span>홈으로</span>
                        <span>위로가기</span>
                    </div>
                </div>
                    <div className="footer02">
                        <div className="left_02">
                            <p className="cc">고객센터</p>
                            <p className="tel">1899-4797</p>
                            <p>평일 10:00~17:00</p>
                            <p>점심시간 12:00~13:00</p>
                            <p>토요일/일요일/공휴일 휴무</p>
                        </div>
                        <div className="right_02">
                            <div className="top">
                                <img src="/image/mini_logo.gif" alt="미니 로고"/>
                                <div className="top_right">
                                    <p>COMPANY : (주)푸드장 / OWNER : 조제효 / CALL CENTER : 1899-4797 / FAX : 02-356-8448</p>
                                    <p>ADDRESS : 본사 (사무실) - 서울특별시 서초구 사임당로 52(서초동) 2층 푸드장</p>
                                    <p>반품 주소지 (물류센터) - 경기도 고양시 일산동구 감내길 22푸드장</p>
                                </div>
                            </div>
                            <p>개인정보관리책임자 : 조제효 help@foodjang.com</p>
                            <p>사업자등록번호 : [188-87-00048] / 통신판매업 신고번호 : 제2023-서울서초-0995호 [사업자정보확인]</p>
                            <p>입금계좌 : (주)푸드장 - 기업은행 55503373004011 (기타 은행은 고객센터로 문의)</p>
                        </div>
                    </div>
                
                
                
            </div>
        </div>
    )
}