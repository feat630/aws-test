import React, {Component} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

import Main from "./component/Main";
import Random from "./component/Random";
import Login from './component/Login';
import SignIn from './component/SignIn';
import Review from './component/Review';
import Input from './component/Input';

import TopMenu from "./component/TopMenu";
import Footer from './component/Footer';

class App extends Component {
  state = { username: null };

  render() {
    return (
      <>
        <TopMenu/>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/Random" element={<Random />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/review/:index" element={<Review />}></Route>
              <Route path="/input/:index" element={<Review />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
        <Footer/>
      </>
    );
  }
}

export default App;