import React, {Component} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Main from "./component/Main";
import Random from "./component/Random";
import Login from './component/Login';
import SignIn from './component/SignIn';

import TopMenu from "./component/TopMenu";
import Footer from './component/Footer';

class App extends Component {
  state = { username: null };

  render() {
    return (
      <div className="App">
        <TopMenu/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/Random" element={<Random />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;