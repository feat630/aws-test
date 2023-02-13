import React, { useState } from "react"; 
import { useNavigate  } from "react-router-dom";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const SignIn = () => {
  let navigate = useNavigate();

  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [pwCheck, setPwCheck] = useState();
  const [nickname, setNickname] = useState();

  const getValue = (e) => {
		const { name, value } = e.target;
    	if(name === 'id') {
			setId(value);
      console.log(value)
		} else if(name === 'nickname') {
      setNickname(value);
      console.log(value)
    } else if(name === 'pwCheck') {
			setPwCheck(value);
      console.log(value)
		} else {
			setPw(value);
      console.log(value)
		}
	}

  const idCheck = async() => {
    if(id===null||id===""){
      alert("입력해주세요");
      return;
    }
    const response = await axios.post('/duplId',{
    data: {
      id
    }
  }, { withCredentials: true });
      console.log(response.data)
      if(response.data===true) {
          alert("사용가능한 아이디입니다");
          console.log("성공")
          // navigate("/");
      } else {
          alert("중복된 아이디입니다");
          console.log("실패")
          // window.location.href = 'http://localhost:3000/main';
      }
  }

  const nickCheck = async() => {
    if(nickname===null||nickname===""){
      alert("입력해주세요");
      return;
    }
    const response = await axios.post('/duplNick',{
    data: {
      nickname
    }
  }, { withCredentials: true });
      console.log(response.data[0])
      if(response.data===true) {
          alert("사용가능한 닉네임입니다");
          console.log("성공")
          // navigate("/");
      } else {
          alert("중복된 닉네임입니다");
          console.log("실패")
          // window.location.href = 'http://localhost:3000/main';
      }
  }

  const dataCheck = async() => {
    const response = await axios.post('/signin',{
    data: {
      id,
      pw,
      nickname
    }
  }, { withCredentials: true });
      console.log(response.data)
      if(response.data==true) {
          alert("회원가입 성공");
          console.log("회원가입 성공")
          // navigate("/");
      } else {
          console.log("회원정보를 다시 확인해주세요")
          // window.location.href = 'http://localhost:3000/main';
      }
  }


  return (
    <>
    <h1>회원가입</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
                    className="id-input"
                    type='text'
                    placeholder='id'
                    value={id}
                    onChange={getValue}
                    name='id' />
        <Button variant="primary" onClick={() => {idCheck()}}>
          중복체크
        </Button>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className="nickname-input"
                    type='text'
                    placeholder='nickname'
                    value={nickname}
                    onChange={getValue}
                    name='nickname' />
      </Form.Group>
      <Button variant="primary" onClick={() => {nickCheck()}}>
        중복체크
      </Button>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control className="pw-input"
                    type='password'
                    placeholder='pw'
                    value={pw}
                    onChange={getValue}
                    name='pw' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control className="pwCheck-input"
                    type='password'
                    placeholder='pwCheck'
                    value={pwCheck}
                    onChange={getValue}
                    name='pwCheck' />
      </Form.Group>

      <Button variant="primary" onClick={() => {dataCheck()}}>
        회원가입
      </Button>
      <hr/>
      <a href="login">비밀번호 찾기</a>
      <a href="login">아이디찾기</a>
      <a href="login">회원가입</a>
    </Form>
    </>
  );
}

export default SignIn;