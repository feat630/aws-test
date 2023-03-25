import React, { useEffect, useState } from "react"; 
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {

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
            <Link to={`/review/${resId}`}>{resName}(클릭시 식당리뷰로 이동)</Link><br/>
            <span>
                {resType}
            </span><br/>
            <span>
                {newAddr}
            </span><br/>
        </>
    )


}

export default Home;
