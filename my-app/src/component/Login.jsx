import React, { useState } from "react"; 
import { useNavigate  } from "react-router-dom";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  let navigate = useNavigate();

  const [id, setId] = useState();
  const [pw, setPw] = useState();

  const test = () => {
    console.log("a")
  }

  const getValue = (e) => {
		const { name, value } = e.target;
    	if(name === 'id') {
			setId(value);
      console.log(value)
		} else {
			setPw(value);
      console.log(value)
		}
	}

  const dataCheck = async() => {
    const response = await axios.post('/login/check',{
    data: {'data': [
      id,
      pw]
    }
  }, { withCredentials: true });
      console.log(response.data[0])
      if(response.data[0]==null) {
          alert("아이디, 비밀번호가 틀렸습니다");
          console.log("실패")
          // navigate("/");
      } else {
          console.log("성공")
          // window.location.href = 'http://localhost:3000/main';
      }
  }


  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
                    className="id-input"
                    type='text'
                    placeholder='id'
                    value={id}
                    onChange={getValue}
                    name='id' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control className="pw-input"
                    type='password'
                    placeholder='pw'
                    value={pw}
                    onChange={getValue}
                    name='pw' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={() => {dataCheck()}}>
        Login
      </Button>
      <hr/>
      <a href="login">비밀번호 찾기</a>
      <a href="login">아이디찾기</a>
      <a href="login">회원가입</a>
    </Form>
  );
}

export default Login;