import React, {Component} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Main from "./component/Main";
import Home from "./component/Home";
import TopMenu from "./component/TopMenu";

class App extends Component {
  state = { username: null };

  render() {
    return (
      <div className="App">
        <TopMenu/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;