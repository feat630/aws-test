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
            <h1>환영합니다</h1>
            <h2>랜덤식당고르기</h2>
            <Link to="/login"><button>로그인</button></Link><br/>
        </>
    )


}

export default Main;