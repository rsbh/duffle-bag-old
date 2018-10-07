import React from "react";
import Navbar from "../../components/Navbar";

class CardDocs extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="page-body">
          <div className="card">Cards</div>
          <div className="card">
            <div className="card-header">Card Header</div>
            card
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-title">Title</div>
              <div className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus sequi maxime dignissimos, ex
                iste aperiam provident nisi, maiores hic voluptatibus! Ut eligendi possimus voluptate modi ipsa natus
                sequi aliquam?
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">Card Header</div>
            <div className="card-body">
              <div className="card-title">Title</div>
              <div className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus sequi maxime dignissimos, ex
                iste aperiam provident nisi, maiores hic voluptatibus! Ut eligendi possimus voluptate modi ipsa natus
                sequi aliquam?
              </div>
            </div>
            <div className="card-footer">
              <button className="btn-primary">Action Button</button>{" "}
              <button className="btn-outline-primary">Action Button</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardDocs;
