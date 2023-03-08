import { React, useEffect } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Main = () => {
    let navigate = useNavigate();

    const loginCheck = async() => {
        const response = await axios.get('/login/status', "",{ withCredentials: true });
        console.log(response.data)
        if(!response.data) {
            navigate("/");
            console.log("로그아웃상태")
        } else{
            console.log("로그인상태")
        }
    }

    useEffect(() => {
        loginCheck();
    },[]);

    return (
        <>
            <br/>
            <img src={`${process.env.PUBLIC_URL}/logoalphabet.png`} width="200" height="200"/>
            <h1>오늘 뭐먹지?</h1>
            <Link to="/random">오늘 점심 고르기</Link><br/>
            <h2>전체 식당리스트 보기</h2>
            <h2>모든 리뷰 보기</h2>
        </>
    )


}

export default Main;