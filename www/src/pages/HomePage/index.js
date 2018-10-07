import React from "react";
import Navbar from "../../components/Navbar";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="page-body">
          <div className="banner">
            <h2 className="banner-heading">duffle bag</h2>
            <div className="banner-btns">
              <a className="btn btn-primary btn-lg" href="/docs">
                Docs
              </a>
              <a
                href="https://github.com/rishabh09/duffle-bag"
                target="_blank"
                className="btn btn-outline-primary btn-lg"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
