import React from "react";
import Navbar from "../../components/Navbar";

class InputDocs extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="page-body">
          <div className="card">
            <div className="card-header">Input</div>
            <div className="card">
              <div className="card-body">
                <div class="input-field">
                  <input type="text" />
                  <label>Label</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputDocs;
