import React from "react";
import Navbar from "../../components/Navbar";

class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="page-body">
          <div className="component-list">
            <a href="/docs/button" className="btn btn-link">
              Buttons
            </a>
            <a href="/docs/input" className="btn btn-link">
              Input
            </a>
            {/*
            <a href="#" className="btn btn-link">
              Navbar
            </a> */}
            <a href="/docs/card" className="btn btn-link">
              Card
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default DocsPage;
