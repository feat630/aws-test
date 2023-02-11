import { React, useEffect, useState } from "react"; 
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const Review = () => {

    useEffect(() => {
        dataCheck();
    }, []);

    const { index } = useParams();
    const [userId, setUserId] = useState();
    // const [review, setReview] = useState();
    // const [point, setPoint] = useState();


    const dataCheck = async() => {
        const response = await axios.get(`/getReview/${index}`,{ withCredentials: true });
        console.log(response)
        if(!response.data) {
            console.log("err")
        } else{
            setUserId(response.data[0].user_id);
            console.log("로그인상태")
        }
    }

    return (
        <>
            <br/>
            <h1>리뷰</h1>
            <h2>{ index }</h2>
            <h2>{ userId }</h2>
            <Link to="/random">오늘 점심 고르기</Link><br/>
        </>
    )


}

export default Review;