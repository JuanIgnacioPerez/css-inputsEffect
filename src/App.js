import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="container">
            <h2>Border effects</h2>
            <div className="col-3">
              <input className="effect-1" type="text" placeholder="Placeholder Text" />
              <span className="focus-border"></span>
            </div>
            <div className="col-3">
              <input className="effect-2" type="text" placeholder="Placeholder Text" />
              <span className="focus-border"></span>
            </div>
            <div className="col-3">
              <input className="effect-3" type="text" placeholder="Placeholder Text" />
              <span className="focus-border"></span>
            </div>

            <div className="col-3">
              <input className="effect-4" type="text" placeholder="Placeholder Text" />
              <span className="focus-border"></span>
            </div>
            <div className="col-3">
              <input className="effect-5" type="text" placeholder="Placeholder Text" />
              <span className="focus-border"></span>
            </div>
            <div className="col-3">
              <input className="effect-6" type="text" placeholder="Placeholder Text" />
              <span className="focus-border"></span>
            </div>

            <div className="col-3">
              <input className="effect-7" type="text" placeholder="Placeholder Text" />
              <span className="focus-border">
                <i></i>
              </span>
            </div>
            <div className="col-3">
              <input className="effect-8" type="text" placeholder="Placeholder Text" />
              <span className="focus-border">
                <i></i>
              </span>
            </div>
            <div className="col-3">
              <input className="effect-9" type="text" placeholder="Placeholder Text" />
              <span className="focus-border">
                <i></i>
              </span>
            </div>

            <h2>Background Effects</h2>
            <div className="col-3">
              <input className="effect-10" type="text" placeholder="Placeholder Text" />
              <span className="focus-bg"></span>
            </div>
            <div className="col-3">
              <input className="effect-11" type="text" placeholder="Placeholder Text" />
              <span className="focus-bg"></span>
            </div>
            <div className="col-3">
              <input className="effect-12" type="text" placeholder="Placeholder Text" />
              <span className="focus-bg"></span>
            </div>
            <div className="col-3">
              <input className="effect-13" type="text" placeholder="Placeholder Text" />
              <span className="focus-bg"></span>
            </div>
            <div className="col-3">
              <input className="effect-14" type="text" placeholder="Placeholder Text" />
              <span className="focus-bg"></span>
            </div>
            <div className="col-3">
              <input className="effect-15" type="text" placeholder="Placeholder Text" />
              <span className="focus-bg"></span>
            </div>

            <h2>Input with Label Effects</h2>
            <div className="col-3 input-effect">
              <input className="effect-16" type="text" placeholder="" />
              <label>First Name</label>
              <span className="focus-border"></span>
            </div>
            <div className="col-3 input-effect">
              <input className="effect-17" type="text" placeholder="" />
              <label>First Name</label>
              <span className="focus-border"></span>
            </div>
            <div className="col-3 input-effect">
              <input className="effect-18" type="text" placeholder="" />
              <label>First Name</label>
              <span className="focus-border"></span>
            </div>

            <div className="col-3 input-effect">
              <input className="effect-19" type="text" placeholder="" />
              <label>First Name</label>
              <span className="focus-border">
                <i></i>
              </span>
            </div>
            <div className="col-3 input-effect">
              <input className="effect-20" type="text" placeholder="" />
              <label>First Name</label>
              <span className="focus-border">
                <i></i>
              </span>
            </div>
            <div className="col-3 input-effect">
              <input className="effect-21" type="text" placeholder="" />
              <label>First Name</label>
              <span className="focus-border">
                <i></i>
              </span>
            </div>

            <div className="col-3 input-effect">
              <input className="effect-22" type="text" placeholder="" />
              <label>First Name</label>
              <span className="focus-bg"></span>
            </div>
            <div className="col-3 input-effect">
              <input className="effect-23" type="text" placeholder="" />
              <label>First Name</label>
              <span className="focus-bg"></span>
            </div>
            <div className="col-3 input-effect">
              <input className="effect-24" type="text" placeholder="" />
              <label>First Name</label>
              <span className="focus-bg"></span>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
