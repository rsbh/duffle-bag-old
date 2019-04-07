import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  color: #666;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  display: inline-flex;
  margin: 4px;
  padding: 4px;
  position: relative;
  box-sizing: border-box;
  transition: box-shadow 0.1s ease-in-out;
  border-radius: 4px;
  height: ${props => props.height};
  width: ${props => props.width || "max-content"};
`;

export default Card;
