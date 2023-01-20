import React, {Component} from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Main from "./component/Main";
import Home from "./component/Home";

class App extends Component {
  state = { username: null };

  render() {
    return (
      <div className="App">
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