import { React, useEffect, useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export const Main = () => {

    const [resId, setResId] = useState();
    const [resName, setResName] = useState();
    const [newAddr, setNewAddr] = useState();
    const [oldAddr, setOldAddr] = useState();
    const [lat, setLat] = useState();
    const [lon, setLon] = useState();
    const [resTel, setResTel] = useState();
    const [resType, setResType] = useState();

    useEffect(() => {
        dataCheck();
    }, []);

    const dataCheck = async() => {
        const response = await axios.get('/getRand', 
        { withCredentials: true });
          console.log(response.data)
          if(response.data[0]==null) {
                alert("실패");
                console.log("실패")
                // navigate("/");
          } else {
                console.log("성공")
                setResId(response.data[0].res_id);
                setResName(response.data[0].res_name);
                setNewAddr(response.data[0].new_addr);
                setOldAddr(response.data[0].old_addr);
                setLat(response.data[0].lat);
                setLon(response.data[0].lon);
                setResTel(response.data[0].res_tel);
                setResType(response.data[0].res_type);
          }
      }

    return (
        <>
            <br/>
            <img src={`${process.env.PUBLIC_URL}/logoalphabet.png`} width="200" height="200"/>
            <h1>오늘 뭐먹지?</h1>
            
            <h4>항상 점심메뉴를 고민하던 팀원들을 위해 만든 사이트입니다.</h4>
            <h4>영등포내의 식당정보와 리뷰를 볼수있습니다.</h4>
            <hr/>
            <Map 
                className="Map-css"
                center={{ lat: [lat], lng: [lon] }}   // 지도의 중심 좌표
                style={{ width: '600px', height: '350px' }} // 지도 크기
                level={3}                                   // 지도 확대 레벨
            >
                <MapMarker position={{ lat: [lat], lng: [lon] }}>
                    <div style={{color:"#000"}}>{resName}</div>
                </MapMarker>
            </Map>
            <hr/>
            <Link to="/random">오늘 점심 고르기</Link><br/>
        </>
    )


}

export default Main;